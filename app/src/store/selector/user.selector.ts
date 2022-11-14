import { selector } from 'recoil';

import { parseJwt } from '../../common/parseJwt';

import { accessTokenAtom } from '../atom/accessToken.atom';
import { User } from '../model/user';

export type JwtPayload = Pick<User, 'email' | 'name'> & { sub: number };

export const userState = selector({
  key: 'user',
  get: ({ get }) => {
    const accessToken = get(accessTokenAtom);

    let result: Partial<User> | null = null;
    if (accessToken) {
      try {
        const jwtPayload = parseJwt(accessToken) as JwtPayload;

        result = {
          email: jwtPayload.email,
          name: jwtPayload.name,
          id: jwtPayload.sub,
        };
      } catch (error) {
        result = null;
      }
    }

    return result;
  },
});
