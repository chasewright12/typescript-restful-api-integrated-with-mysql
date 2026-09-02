export interface RegisterData {
    name: string;
    email: string;
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export class AuthService {
    async register(name: string, email: string, password: string) {
        // Implementation for user registration
    }

    async login(email: string, password: string) {
        // Implementation for user login
    }

    async refresh(refreshToken: string) {
        // Implementation for refreshing the access token
    }

    async logout(refreshToken: string) {
        // Implementation for user Logout
    }
}