import {e} from '@angular/core/src/render3';

export  class UserData{
  public static users = [
    {
      id : 1,
      firstname : "Thilina",
      lastname : 'Prasad',
      email : 'thilina@gmail.com',
      address : 'test address for thilina',
      password : '123'
    },
    {
      id : 2,
      firstname : "Kasun",
      lastname : 'Prasad',
      email : 'kasun@gmail.com',
      address : 'test address for kasun',
      password : 'abc'
    },
    {
      id : 3,
      firstname : "Kalindu",
      lastname : 'gayan',
      email : 'kalindu@gmail.com',
      address : 'test address for kalindu',
      password : '1234'
    }
  ];

  static authenticateUser(email, password){
    for(var i=0;i< UserData.users.length;i++){
      let user = UserData.users[i];
      if(user.email ===email && user.password === password){
        return user;
      }
    }
    return null;
  }

  static getUserByid(id){
    for(let i=0;i< UserData.users.length;i++){
      let user = UserData.users[i];
      if(user.id === id){
        return user;
      }
    }
    return null;
  }

  static getAll(){
    return this.users;
  }
}
