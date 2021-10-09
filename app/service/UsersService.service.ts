import{Injectable} from "@angular/core";
import{HttpClient} from "@angular/common/http";

@Injectable()
export class UsersServiceService {
  http: HttpClient;

  constructor( http: HttpClient){
    this.http = http;
  }

  getData(){
    return this.http.get('assets/userlist.json')
  }


}
