import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
  animations: [
    trigger('ball', [
      state('down', style({
        position: 'fixed',
        'background-color': 'green',
        transform: 'translateY(100px)'
      })),
      state('up', style({
        position: 'fixed',
        'background-color': 'blue',
        transform: 'translateY(-100px)'
      })),
      state('right', style({
        position: 'fixed',
        'background-color': 'red',
        transform: 'translateX(100px)'
      })),
      state('left', style({
        position: 'fixed',
        'background-color': 'yellow',
        transform: 'translateX(-100px)'
      })),

      transition('* => *', animate(300)),




    ]),
  ]
})
export class BallComponent implements OnInit {

  constructor() { }
  top = 0;
  left = 0;
  ngOnInit(): void {
  }

  move = '';

  moveUp() {
    this.move = 'up';
    this.top -=100;
  }
  moveDown() {
    this.move = 'down';
    this.top +=100;
  }

  moveRight() {
    this.move = 'right';
    this.left += 100;
  }

  moveLeft() {
    this.move = 'left';
    this.left -= 100;
  }

  animationEnded(event: any) {
    console.log(event)
  }
  getTopPx() {
    return this.top+'px';
  }

  getLeftPx() {
    console.log(this.left)
    return this.left+'px';
  }
}
