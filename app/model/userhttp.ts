export class UserHttp {

  constructor(public name: string, public age: number){
  }

  public setUser(name:string, age:number){
    this.name = name;
    this.age = age;
  }
}
