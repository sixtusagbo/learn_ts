function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

const result = generateError('An error occured!', 500);
// This is not logged because since an error is thrown, my script is canceled
console.log(result);
