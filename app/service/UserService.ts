import{Injectable} from "@angular/core";
import{HttpClient} from "@angular/common/http";

@Injectable()
export class UserService{
  http: HttpClient;

  constructor( http: HttpClient){
    this.http = http;
  }

  getDataUserHttp(){
    return this.http.get('assets/user.json')
  }

  
}
