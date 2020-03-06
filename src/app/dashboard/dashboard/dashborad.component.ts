import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService, EventManager, Account} from '../../core';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit, OnDestroy {

  account: Account;

  constructor(private accountService: AccountService, private eventManager: EventManager, private router: Router) { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';

    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });

    this.registerAuthenticationSuccess();
  }

    ngOnDestroy(): void {
        document.body.className = '';
    }

  registerAuthenticationSuccess() {
    this.eventManager.subscribe('authenticationSuccess', message => {
      this.accountService.identity().then(account => {
        this.account = account;
      });
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

}
