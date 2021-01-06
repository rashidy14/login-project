import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User} from './user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  
  public userName:string="";
  public password :string= "";

  ngOnInit(): void {
  }
  users : User[] = [new User("admin","P@ssw0rd"),
                      new User("operation","P@ssw0rd@Oper"),
                    new User("reg_user","P@ssw0rd@Red")];
  wrongCredentials:boolean = false;
  loginAction(){ 

    for(let u of this.users){
      if(this.userName ==u.user_name && this.password==u.password)
        this.router.navigate(['product']);
      else
      this.wrongCredentials = true; 
  }}
  
                  

                      
}
