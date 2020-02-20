export const envIsDev = () => process.env.NODE_ENV == 'development' ? true : false;
export const envIsTest = () => process.env.NODE_ENV == 'test' ? true : false;
export const envNotRate = () => process.env.NOT_RATE == 'true' ? true : false;

export const envAppName = process.env.APP_NAME;

export const envServer = {
  portHttp: process.env.PORT_HTTP || 80,
  domain: process.env.SERVER_DOMAIN,
};


export const envMongodb = {
  uri: process.env.MONGODB_URI,
  sslCa: process.env.MONGODB_CERTIFICATE_BASE64 ? [Buffer.from(process.env.MONGODB_CERTIFICATE_BASE64, 'base64').toString()] : undefined,
};
