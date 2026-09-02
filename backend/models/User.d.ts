declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    constructor(id: number, username: string, email: string, password: string);
    static create(username: string, email: string, password: string): Promise<User>;
    static findById(id: number): Promise<User | null>;
}
export default User;
//# sourceMappingURL=User.d.ts.map