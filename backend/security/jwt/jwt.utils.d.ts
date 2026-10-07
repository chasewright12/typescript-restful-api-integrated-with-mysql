import jwt from 'jsonwebtoken';
export declare function signJwt<T extends object>(payload: T, options?: jwt.SignOptions | undefined): string;
export declare function verifyJwt(token: string): Promise<{
    valid: boolean;
    expired: boolean;
    decoded: unknown;
} | {
    valid: boolean;
    expired: boolean;
    decoded: null;
}>;
//# sourceMappingURL=jwt.utils.d.ts.map