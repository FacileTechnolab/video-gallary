import { Injectable } from '@angular/core';

@Injectable()
export class APIConfiguration {
    public ServerPath: string = "http://d2.faciletechnolab.com/";
    public ApiUrl: string = "api/";
    public TokenUrl = this.ServerPath + 'token';
    public ServerWithApiUrl = this.ServerPath + this.ApiUrl;
}
export class RegularExpr{
    public emailRegx = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    public namePattern = "[a-zA-Z ]*";
}
export class AppDefaults{
    public imageSourc = "assets/image/appicon.png";
}
