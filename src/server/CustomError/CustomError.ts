class CustomError extends Error {
  constructor(
    public statusCode: number,
    privateMessage: string,
    public publicMessage?: string
  ) {
    super(privateMessage);

    this.publicMessage = publicMessage ?? privateMessage;
  }
}

export default CustomError;
