export interface RegisterData {
    name: string;
    email: string;
    password: string;
}
export interface LoginData {
    email: string;
    password: string;
}
export declare class AuthService {
    register(name: string, email: string, password: string): Promise<void>;
    login(email: string, password: string): Promise<void>;
    refresh(refreshToken: string): Promise<void>;
    logout(refreshToken: string): Promise<void>;
}
//# sourceMappingURL=authService.d.ts.map