import 'dotenv/config';
export declare enum Environment {
    Development = "development",
    Production = "production",
    Staging = "staging",
    Test = "test"
}
declare const environment: {
    nodeEnv: string | undefined;
    host: string | undefined;
    port: string | undefined;
    mongoUrl: string;
    privateKey: string | undefined;
    publicKey: string | undefined;
    morganEnabled: boolean;
    mongoDbLoggerEnabled: boolean;
    corsOrigin: string | undefined;
    saltWorkFactor: number;
    accessTokenTtl: number;
    refreshTokenTtl: number;
    cookieAllowedDomain: string | undefined;
};
export default environment;
//# sourceMappingURL=environment.d.ts.map