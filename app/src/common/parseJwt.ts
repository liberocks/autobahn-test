import { Buffer } from 'buffer';

export const parseJwt = (accessToken: string) => {
  console.log('DEBUG HERE', Buffer.from(accessToken.split('.')[1], 'base64'));

  try {
    console.log(
      'DEBUG SECOND',
      Buffer.from(accessToken.split('.')[1], 'base64').toString(),
    );
  } catch (error) {
    console.log(error);
  }

  const jwtPayload = Buffer.from(
    accessToken.split('.')[1],
    'base64',
  ).toString();
  return JSON.parse(jwtPayload);
};
