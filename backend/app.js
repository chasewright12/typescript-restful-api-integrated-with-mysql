"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "This is a simple health check endpoint" });
});
app.use("/api/users", (req, res, next) => {
    console.log(`Request to /api/users: ${req.method} ${req.url}`);
    next();
}, userRoutes_1.default);
app.use("/api/products", productRoutes_1.default);
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error", detail: err.message });
});
exports.default = app;
//# sourceMappingURL=app.js.map