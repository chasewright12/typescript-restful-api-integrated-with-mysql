import { Request } from "express";

export { authenticate as authMiddleware } from "../security/jwt";

export type AutenticatedRequest = Request;