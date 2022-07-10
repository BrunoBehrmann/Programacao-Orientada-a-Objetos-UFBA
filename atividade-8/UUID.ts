// Classe UUID
import crypto from "crypto";

export class UUID {
  value: string;
  constructor() {
    this.value = crypto.randomUUID().slice(0, 4);
  }
}
