class ValidationError extends Error {
  constructor(public message: string) {
    super(message);
  }
}

function doubleIt(value: number): number {
  if (value < 0) {
    throw new ValidationError("Value cannot be less than 0");
  }

  return value * 2;
}

function tryCatch(value: number): boolean {
  try {
    doubleIt(value);
    return true;
  } catch (e) {
    if (e instanceof ValidationError) {
      return false;
    }
  } finally {
    return false;
  }
}

export default tryCatch;
