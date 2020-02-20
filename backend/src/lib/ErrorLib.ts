interface ErrorInterface {
  message: string;
  errors?: string[];
  httpCode?: number;
  extraData?: any;
}

class ErrorLib {

  private error: ErrorInterface

  public constructor(error: ErrorInterface) {
    this.error = error;
  }

  public getErrorJson() {
    return this.error;
  }

  public getMessage() {
    return this.error.message;
  }

  public getErrors() {
    return this.error.errors || null;
  }

  public getHttpCode() {
    return this.error.httpCode || null;
  }


  public isErrorLib() {
    return true;
  }

};

export default ErrorLib;
