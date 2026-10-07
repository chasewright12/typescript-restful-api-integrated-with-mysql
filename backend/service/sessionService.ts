// import { FilterQuery, HydratedDocument, Types, UpdateQuery } from 'mongoose';
import Session, { ISession } from '../models/Session';
import { IUser } from '../models/User';
import { signJwt, verifyJwt } from '../security/jwt/jwt.utils';