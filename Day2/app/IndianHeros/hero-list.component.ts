import {Component, OnInit} from "angular2/core";
import {ISuperHero} from "./superhero";
import {HeroFilterPipe} from "./superhero-pipe.component";
import {HeroService} from "./hero.service"

@Component({
    selector:"super-heroes",
    templateUrl:'app/IndianHeros/hero-list.component.html',
    styleUrls:['app/IndianHeros/hero-list.component.css'],
    pipes:[HeroFilterPipe]
})

export class HeroListComponent implements OnInit{
    pageTitle:string="Indian Super Hero List";
    imageWidth:number=100;
    imageMargin:number=2;
    showImage:boolean=false;
    listFilter:string='m';
    heroes:ISuperHero[];
    constructor(private _heroService:HeroService){}
    ngOnInit():void{
        this.heroes=this._heroService.getHeroes();
    }
    toggleImage():void{
        this.showImage=!this.showImage;
    }    
}
