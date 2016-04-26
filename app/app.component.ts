import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>Topics</h2>
    <ul class="heroes">
      <li *ngFor="#hero of angularjs2"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
  `,
  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 30em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  directives: [HeroDetailComponent]
})
export class AppComponent {
  title = 'List of items for angular2';
  angularjs2 = Angular2;
  selectedHero: Topics;
  onSelect(hero: Topics) { this.selectedHero = hero; }
}
var Angular2: Topics[] = [
  { "id": 1, "name": "Template Basics" },
  { "id": 2, "name": "Template Directives" },
  { "id": 3, "name": "Filters/Pipes" },
  { "id": 4, "name": "Controllers/Components" },
  { "id": 5, "name": "Style sheets" },
  {"id":6 , "name":"String Data Pipe"}
];