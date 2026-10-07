"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database");
const PORT = process.env.PORT || 3000;
async function startServer() {
    try {
        await (0, database_1.connectDB)();
        app_1.default.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    }
    catch (error) {
        console.error("Falha ao iniciar o servidor:", error);
        process.exit(1);
    }
}
startServer();
process.on("unhandledRejection", (err) => {
    console.error("Rejeição não tratada:", err);
    process.exit(1);
});
//# sourceMappingURL=server.js.map