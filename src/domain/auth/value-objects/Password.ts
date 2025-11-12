export class Password {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): Password {
    if (!value || value.trim().length === 0) {
      throw new Error("La contraseña no puede estar vacía");
    }

    if (value.length < 6) {
      throw new Error("La contraseña debe tener al menos 6 caracteres");
    }

    return new Password(value);
  }

  getValue(): string {
    return this.value;
  }

  equals(other: Password): boolean {
    return this.value === other.value;
  }
}

