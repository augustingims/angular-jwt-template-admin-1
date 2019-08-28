import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../login/login/login.service';
import {AccountService, Account} from '../../core';

@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.scss']
})
export class AsidenavbarComponent implements OnInit {

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
