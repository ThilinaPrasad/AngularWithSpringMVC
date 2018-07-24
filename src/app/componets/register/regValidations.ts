import {AbstractControl, ValidationErrors} from '@angular/forms';
import {UserService} from '../../services/user.service';

export class RegValidations{
  constructor(private userService: UserService){}

  static whiteSpaces(control: AbstractControl){
    if((control.value as string).indexOf(' ')>=0 ){
      return {whiteSpaces : true}
    }
    return null;
  }

  static cmfPassCheck(control:AbstractControl){
    let pass = control.get('password').value;
    let cmfPass = control.get('cmf_password').value;
    if(pass!==cmfPass){
      return {cmfPassCheck : true};
    }else {
      return null;
    }
  }

   emailExists(control : AbstractControl) {
      return new Promise((resolve)=>{
        this.userService.checkEmail(control.value).subscribe((exists)=>{
            return exists ? ({emailExists: true}) : null;
        });
      });
  }

}
