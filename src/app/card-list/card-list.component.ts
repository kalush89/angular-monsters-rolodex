import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  users: User[]= [];
  sub!: Subscription;
  errorMessage = '';
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.sub = this._userService.getUsers().subscribe({
      next: users => {
        this.users = users;
        //this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
