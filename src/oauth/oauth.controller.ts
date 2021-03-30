import { Controller, Post, Body } from '@nestjs/common';
import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}

  @Post('/login')
  async login(@Body() access) {
    return await this.oauthService.login(access.accessToken, access.tokenType);
  }
}
