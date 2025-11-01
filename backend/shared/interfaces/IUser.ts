export interface IUser {
  _id?: string;
  email: string;
  password: string;
  name: string;
  isVerified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
