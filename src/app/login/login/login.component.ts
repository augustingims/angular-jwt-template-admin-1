import {Component, ElementRef, OnInit, Renderer} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {AccountService, EventManager, StateStorageService} from '../../core';
import {LoginService} from './login.service';
declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authenticationError: boolean;

  loginForm = this.fb.group({
    username: [''],
    password: [''],
    rememberMe: [true]
  });

  constructor(
    private accountService: AccountService,
    private eventManager: EventManager,
    private loginService: LoginService,
    private stateStorageService: StateStorageService,
    private elementRef: ElementRef,
    private renderer: Renderer,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    document.body.className = 'hold-transition login-page';
      $(() => {
          $('input').iCheck({
              checkboxClass: 'icheckbox_square-blue',
              radioClass: 'iradio_square-blue',
              increaseArea: '20%' /* optional */
          });
      });

    setTimeout(() => this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []), 0);

    if (this.isAuthenticated()) {
      this.router.navigate(['Dashboard']);
    }
  }

  cancel() {
    this.authenticationError = false;
    this.loginForm.patchValue({
      username: '',
      password: ''
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  login() {
    this.loginService
      .login({
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value,
        rememberMe: this.loginForm.get('rememberMe').value
      })
      .then(() => {
        this.authenticationError = false;
        if (this.router.url === '/login' || /^\/activate\//.test(this.router.url) || /^\/reset\//.test(this.router.url)) {
          this.router.navigate(['Dashboard']);
        }

        this.eventManager.broadcast({
          name: 'authenticationSuccess',
          content: 'Sending Authentication Success'
        });

        // previousState was set in the authExpiredInterceptor before being redirected to login modal.
        // since login is successful, go to stored previousState and clear previousState
        const redirect = this.stateStorageService.getUrl();
        if (redirect) {
          this.stateStorageService.storeUrl(null);
          this.router.navigateByUrl(redirect);
        }
      })
      .catch(() => {
        this.authenticationError = true;
      });
  }

  requestResetPassword() {
    this.router.navigate(['/reset', 'request']);
  }

}
