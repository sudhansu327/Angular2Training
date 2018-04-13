import {PipeTransform,Pipe} from 'angular2/core';
import {ISuperHero} from "./superhero";

@Pipe({
    name:'heroFilter'
})

export class HeroFilterPipe implements PipeTransform{
    transform(value:ISuperHero[],args:string[]) : ISuperHero[]{
        let filter:string=args[0]?args[0].toLocaleLowerCase():null;
        return filter?value.filter((hero:ISuperHero)=>hero.heroName.toLocaleLowerCase().indexOf(filter)!=-1):
        value;
    }
}