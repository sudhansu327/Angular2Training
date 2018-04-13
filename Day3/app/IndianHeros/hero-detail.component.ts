import {Component,OnInit} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
import {ISuperHero} from "./superhero";
import {HeroService} from "./hero.service"

@Component({    
    templateUrl:'app/IndianHeros/hero-detail.component.html'   
})



export class HeroDetailComponent implements OnInit {
    pageTitle:string="Hero Detail";   
    hero:ISuperHero;
    errroMessage:string;  

    constructor(private _heroService:HeroService, private _router:Router,
        private _routeParam:RouteParams){
        let id=+this._routeParam.get('id');
    }   

    ngOnInit():void{
       if(!this.hero){
        let id=+this._routeParam.get('id');
        this.getHero(id);
        }
    }

    getHero(id:number){
        this._heroService.getHero(id).subscribe(hero=>this.hero=hero,
            error=>this.errroMessage=<any>error);
    }

    onBack(){
        this._router.navigate(['Heroes']);
    }
}
