export const isStatusCodeOk = (statusCode: string | Number) => {
    const numericCode = Number(statusCode);
    return numericCode>= 200 && numericCode < 300;
};
