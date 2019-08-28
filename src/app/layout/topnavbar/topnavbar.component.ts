import { Component, OnInit } from '@angular/core';
import {AccountService, Account} from '../../core';
import {Router} from '@angular/router';
import {LoginService} from '../../login/login/login.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  account: Account;

  constructor(
    private loginService: LoginService,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['']);
  }

  getImageUrl() {
    return this.isAuthenticated() ? this.accountService.getImageUrl() : null;
  }


}
