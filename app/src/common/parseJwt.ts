import { Buffer } from 'buffer';

export const parseJwt = (accessToken: string) => {
  return JSON.parse(
    Buffer.from(accessToken.split('.')[1], 'base64').toString(),
  );
};
