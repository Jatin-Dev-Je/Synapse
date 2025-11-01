import { Schema, model, Document } from 'mongoose';

interface ISessionDocument extends Document {
  userId: string;
  token: string;
  expiresAt: Date;
  createdAt: Date;
}

const sessionSchema = new Schema<ISessionDocument>(
  {
    userId: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Session = model<ISessionDocument>('Session', sessionSchema);

export default Session;
