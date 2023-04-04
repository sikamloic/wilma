import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, ReactiveFormsModule]
})
export class ConnexionPage implements OnInit {

  // registerForm: FormGroup
  constructor(
    private formbuilder: FormBuilder,
    // private userService:  UserService,
    private route: Router
  ) { 
    // this.registerForm = this.formbuilder.group({
    //   email: formbuilder.control('', [Validators.required, Validators.email]),
    //   password: formbuilder.control('', [Validators.required])
    // })
  }

  login(){
    // this.userService.userLogin(
    //   this.registerForm.value.email,
    //   this.registerForm.value.password,
    // ).subscribe((res: any) =>{
    //   console.log(res)
    // })
  }

  ngOnInit() {
  }

}
