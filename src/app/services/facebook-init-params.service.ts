import { Injectable } from '@angular/core';
import { InitParams } from 'ng2-facebook-sdk';

@Injectable()
export class FacebookInitParamsService {

  public get params(): InitParams {
    return {
      appId: '1382369148525539',
      version: 'v2.9',
      cookie: true,
    }
  }

}
