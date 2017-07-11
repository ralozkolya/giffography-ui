import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public expanded = false;

  constructor(private router: Router) { }

  public getUrl(lang: string): string {
    return this.router.url.replace(/en|ka/, lang);
  }

  ngOnInit() {}

}
