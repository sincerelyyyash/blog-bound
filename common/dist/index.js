"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostBody = exports.createPostBody = exports.signInBody = exports.signUpBody = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signUpBody = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string(),
    name: zod_1.default.string()
});
exports.signInBody = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string(),
});
exports.createPostBody = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
exports.updatePostBody = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
