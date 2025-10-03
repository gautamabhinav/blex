import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  link: { type: String, default: '' },
  type: { type: String, default: 'info' }, // e.g. 'like', 'comment', 'system'
  meta: { type: mongoose.Schema.Types.Mixed },
  targetRoles: [{ type: String }], // e.g. ['USER','ADMIN'] - empty => all
  targetUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  readBy: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      readAt: { type: Date, default: Date.now },
    },
  ],
}, { timestamps: true });

export default mongoose.model('Notification', NotificationSchema);
