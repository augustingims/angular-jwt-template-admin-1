import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../login/login/login.service';
import {AccountService} from '../../core';

@Component({
  selector: 'app-settingsnavbar',
  templateUrl: './settingsnavbar.component.html',
  styleUrls: ['./settingsnavbar.component.scss']
})
export class SettingsnavbarComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

}
