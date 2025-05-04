import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    console.log('🔒 No token provided');
    return res.status(401).json({ error: 'Unauthorized - Token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('🔓 Decoded token:', decoded);

    const user = await User.findById(decoded.id);
    if (!user) {
      console.log('❌ User not found');
      return res.status(401).json({ error: 'Unauthorized - User not found' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.log('❌ Invalid token:', err.message);
    return res.status(401).json({ error: 'Unauthorized - Invalid token' });
  }
};

const roleCheck = (roles) => (req, res, next) => {
  if (!req.user || !req.user.role) {
    console.log('❌ Access denied - No user or role');
    return res.status(403).json({ error: 'Forbidden - No user or role found' });
  }

  if (!roles.includes(req.user.role)) {
    console.log(`❌ Access denied - User role '${req.user.role}' not in [${roles}]`);
    return res.status(403).json({ error: 'Forbidden - Insufficient privileges' });
  }

  next();
};

export { auth, roleCheck };
