import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name:string="";
  email:string="";
  phone:string = "";
  message:string="";
  warningMessage:string="";
  constructor() { }

  ngOnInit(): void {

  }

}
