import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit, AfterViewInit {

  changePasswordForm!: FormGroup;

  loading = false;
  submitted = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,) { }


    ngOnInit(): void {
      // if (this.storageService.isLoggedIn()) {
      //   this.isLoggedIn = true;
      //   this.roles = this.storageService.getUser().roles;
      // }

      this.changePasswordForm = this.formBuilder.group({
        emailId: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      });
    }

    ngAfterViewInit(): void {
      // const eleDom: HTMLElement = this.elementRef.nativeElement;
      // const classElement = eleDom.querySelectorAll('modules-body');
      // classElement.
    }


  changePassword(): void{

  }

}
