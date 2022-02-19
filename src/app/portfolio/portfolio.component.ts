import { Component, OnInit } from '@angular/core';
import { PortfolioContent } from './portfolio-content';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolios: PortfolioContent[] = [
    { titlePortfolio: 'LOG CABIN', paragraphPortfolio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.', imagePortfolio: 'assets/images/cabin.png' },
    { titlePortfolio: 'TASTY CAKE', paragraphPortfolio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.', imagePortfolio: 'assets/images/cake.png' },
    { titlePortfolio: 'CIRCUS TENT', paragraphPortfolio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.', imagePortfolio: 'assets/images/circus.png' },
    { titlePortfolio: 'CONTROLLER', paragraphPortfolio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.', imagePortfolio: 'assets/images/game.png' },
    { titlePortfolio: 'LOCKED SAFE', paragraphPortfolio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.', imagePortfolio: 'assets/images/safe.png' },
    { titlePortfolio: 'SUBMARINE', paragraphPortfolio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.', imagePortfolio: 'assets/images/submarine.png' },
  ]
  myIndex:any;
  displayPortfolio(data:any){
    this.myIndex = data;
  }

  close(){
    this.myIndex = "";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
