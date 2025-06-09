// import mongoose from 'mongoose';

// const UserSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     role: {
//       type: String,
//       enum: [
//         'student',
//         'class_teacher',
//         'regular_teacher',
//         'cooperation_store_admin',
//         'school_admin',
//         'room_supervisor',
//         'pta_treasurer',
//         'jpn_ppd_individual',
//         'principal',
//       ],
//       required: true,
//     },
//     password: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// export default mongoose.model('User', UserSchema);

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: [
        'student',
        'class_teacher',
        'regular_teacher',
        'cooperation_store_admin',
        'school_admin',
        'room_supervisor',
        'pta_treasurer',
        'jpn_ppd_individual',
        'principal',
      ],
      required: true,
    },
    password: { type: String, required: true },

    // 🛒 Cart: products the user added
    cart: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
          min: 1,
        },
      }
    ],

    // 📦 Orders placed by the user
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
      }
    ],
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
