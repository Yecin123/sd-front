import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  username = new FormControl("");
  password  = new FormControl("");

  response = null;

  constructor(private request:RequestService) { }

  ngOnInit() {
  }



  submit() {

      this.request.auth(this.username.value.toString(),this.password.value.toString())
      .then(data=> {

          this.response  =data;
          
      });

  }

}
