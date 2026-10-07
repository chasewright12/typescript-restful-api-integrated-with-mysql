import { Model } from 'mongoose';
import { Timestamps } from './types/base.interface';
export declare const USER = "User";
export interface IUser extends Timestamps {
    username: string;
    email: string;
    password: string;
}
type UserModel = Model<IUser>;
declare const User: UserModel;
export default User;
//# sourceMappingURL=User.d.ts.map