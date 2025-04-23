import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);
    req.user = await User.findById(decoded.id);
    if (!req.user) {
      console.log('User not found');
      return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
  } catch (err) {
    console.log('Invalid token:', err.message);
    res.status(401).json({ error: 'Invalid token' });
  }
};
const roleCheck = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) return res.status(403).json({ error: 'Forbidden' });
  next();
};

export { auth, roleCheck };