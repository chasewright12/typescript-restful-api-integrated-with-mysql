export interface RegisterData {
    name: string;
    email: string;
    password: string;
}
export interface LoginData {
    email: string;
    password: string;
}
export declare class UserService {
    register(name: string, email: string, password: string): Promise<void>;
    login(email: string, password: string): Promise<void>;
    refresh(refreshToken: string): Promise<void>;
    logout(refreshToken: string): Promise<void>;
}
//# sourceMappingURL=userService.d.ts.map