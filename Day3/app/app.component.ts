import {Component} from "angular2/core"
import {HTTP_PROVIDERS} from "angular2/http"
import {ROUTER_PROVIDERS,RouteConfig,ROUTER_DIRECTIVES} from "angular2/router"
import {HeroListComponent} from "./IndianHeros/hero-list.component"
import {HeroService} from "./IndianHeros/hero.service"
import 'rxjs/Rx';
import {WelcomeComponent} from './home/welcome.component';
import {HeroDetailComponent} from './IndianHeros/hero-detail.component';
@Component({
    selector:'superhero-app',
    template:`<div>     
    <nav class='navbar navbar-default'>
    <div class=container-fluid>
    <a class="navbar-brand">{{pageTitle}} </a>
    <ul class="nav navbar-nav">
    <li> <a [routerLink]="['Welcome']">Home</a></li>
    <li> <a [routerLink]="['Heroes']">Hero List</a></li>
    <li></li>
    </ul>
    </div>
    </nav>
    <div class="container">
    <router-outlet></router-outlet>
    </div>
    </div>` ,
    directives:[ROUTER_DIRECTIVES],
    providers:[HeroService,HTTP_PROVIDERS,ROUTER_PROVIDERS]
})

@RouteConfig([
    {path:'/welcome',name:'Welcome',component:WelcomeComponent,useAsDefault:true},
    {path:'/heroes',name:'Heroes',component:HeroListComponent},
    {path:'/heroes/:id',name:'HeroDetail',component:HeroDetailComponent}
])

 export class AppComponent{
    pageTitle:string="India's Pride";
} 