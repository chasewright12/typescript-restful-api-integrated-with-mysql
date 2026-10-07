// User.ts
import { Model, Schema, model } from 'mongoose';
import { Timestamps } from './types/base.interface';

export const USER = 'User';

export interface IUser extends Timestamps {
    username: string;
    email: string;
    password: string;
}

type UserModel = Model<IUser>;

const userSchema = new Schema<IUser, UserModel>(
    {
        username: {
            required: true,
            type: String,
            trim: true,
            unique: true
        },
        email: {
            required: true,
            type: String,
            trim: true,
            lowercase: true,
            unique: true
        },
        password: {
            required: true,
            type: String
        }
    },
    {
        timestamps: true
    }
);

const User = model<IUser, UserModel>(USER, userSchema);

export default User;