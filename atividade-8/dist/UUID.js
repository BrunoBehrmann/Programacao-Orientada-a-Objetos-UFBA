"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUID = void 0;
// Classe UUID
const crypto_1 = __importDefault(require("crypto"));
class UUID {
    constructor() {
        this.value = crypto_1.default.randomUUID().slice(0, 4);
    }
}
exports.UUID = UUID;
