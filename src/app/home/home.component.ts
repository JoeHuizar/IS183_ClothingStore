import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: Boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  //   const token = localStorage.getItem('id_token');
  //   if (token == null) {
  //     this.loggedIn = true;
  //     this.router.navigate(['login']);
  //   } else {
  //     this.loggedIn = true;
  //   }
  }
  goToMen() {
    console.log("from gotoedit")
    this.router.navigate(['app-men']);
  }
}
