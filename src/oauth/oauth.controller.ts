import { Controller, Get, Query } from '@nestjs/common';
import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}

  @Get('/login')
  async login(@Query('code') code: string) {
    console.log(code);

    return { message: 'opa' };
  }
}
