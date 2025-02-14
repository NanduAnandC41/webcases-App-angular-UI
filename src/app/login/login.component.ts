import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { DataRequestService } from '../services/data-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm!: FormGroup;

  loading = false;
  submitted = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private userdata: any = null;
  private userDetails: any = null;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private elementRef: ElementRef,
    private authService: AuthService, private storageService: StorageService,
    private dataRequestService: DataRequestService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    // const eleDom: HTMLElement = this.elementRef.nativeElement;
    // const classElement = eleDom.querySelectorAll('modules-body');
    // classElement.
}

  onSubmit(): void {
    this.submitted = true;

    this.loading = true;
    console.log("form values : ", this.loginForm.value);

    this.authService.login(this.loginForm.value.username,
      this.loginForm.value.password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  loggedIn(): void{
    // alert("Function has been called");
    console.log("Form Values : ", this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.value.username == null ||
      this.loginForm.value.username === '' ||
      this.loginForm.value.password == null ||
      this.loginForm.value.password === '') {
      return;
    }
    console.log("Form Values : ", this.loginForm.value);
    this.loading = true;

    this.authService.login(this.loginForm.value.username,
      this.loginForm.value.password).subscribe(res => {
        if(res){

          console.log(res);
          this.userdata = res;
          this.storageService.saveToken(res.jwtToken);
          this.storageService.saveUser(res);

        }

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.userDetails = this.storageService.getUser();
      let strRoles = [];
      strRoles.push(this.userDetails.user_role);
      this.roles = strRoles;
      // this.reloadPage();
      this.router.navigateByUrl('/dashboard');

    },
    err => {
      this.errorMessage = err.error.message;
      console.log(err);
      this.isLoginFailed = true;
    });

  }

  reloadPage(): void {
    window.location.reload();
  }

  createUser(): void{
    this.router.navigateByUrl("/register");
  }





}
