import axios from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OauthService {
  async login(accessToken: string, tokenType: string) {
    return await axios
      .get('https://discord.com/api/users/@me', {
        headers: {
          authorization: `${tokenType} ${accessToken}`,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        return data;
      })
      .catch(console.error);
  }
}
