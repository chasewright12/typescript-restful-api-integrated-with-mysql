import { Model, Types } from 'mongoose';
import { Timestamps } from './types/base.interface';
export declare const SESSION = "Session";
export interface ISession extends Timestamps {
    user: Types.ObjectId;
    isValid: boolean;
    userAgent: string;
}
type SessionModel = Model<ISession>;
declare const Session: SessionModel;
export default Session;
//# sourceMappingURL=Session.d.ts.map