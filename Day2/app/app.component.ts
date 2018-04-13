import {Component} from "angular2/core"
import {HTTP_PROVIDERS} from "angular2/http"
import {HeroListComponent} from "./IndianHeros/hero-list.component"
import {HeroService} from "./IndianHeros/hero.service"
import 'rxjs/Rx';
@Component({
    selector:'superhero-app',
    template:`<div> 
    <h1>{{pageTitle}}</h1>
    <super-heroes></super-heroes>
    </div>` ,
    directives:[HeroListComponent],
    providers:[HeroService,HTTP_PROVIDERS]
})

export class AppComponent{
    pageTitle:string="India's Pride";
} 