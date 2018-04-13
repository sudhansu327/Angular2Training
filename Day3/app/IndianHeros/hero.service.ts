import {ISuperHero} from "./superhero";
import {Injectable} from "angular2/core";
import {Http,Response} from "angular2/http";
import {Observable} from "rxjs/Observable";



@Injectable()
export class HeroService{

private _dataUrl="http://chandraappazure.azurewebsites.net/api/indianheroes";
// private _dataUrl="http://localhost:58936/api/IndianHero";

constructor(private _http:Http){}

getHeroes():Observable<ISuperHero[]>{
    return this._http.get(this._dataUrl)
    .map((response:Response)=><ISuperHero[]>response.json())
    .do(data=>console.log("All:"+JSON.stringify(data)))
    .catch(this.handleError);
}

getHero(id:number):Observable<ISuperHero>{
    return this.getHeroes().map((myHeroes:ISuperHero[])=>myHeroes.find(p=>p.heroId===id));    
}

private handleError(error:Response){
console.error(error);
return Observable.throw(error.json().error||"Server Error");
}

//     getHeroes():ISuperHero[]{
//    return [
//     {
//         "heroId": 1,
//         "heroName": "GOD Of Cricket",
//         "realName": "Sachin Tendulkar",
//         "heroStrength": "Indian Cricket Legend",
//         "heroNature": "Calm,Quiet and Focused",
//         "imageUrl": "./app/assets/images/sachin.jfif"
//     },
//     {
//          "heroId": 2,
//         "heroName": "P V Sindhu",
//         "realName": "Pusarla Venkata Sindhu",
//         "heroStrength": "Olympic Silver Medal Winner for Women Badminton",
//         "heroNature": "Aggressiv,Stylish",
//         "imageUrl": "./app/assets/images/PVSindhu.jpg"
//     },
//     {
//           "heroId": 3,
//         "heroName": "Sakshi Malik",
//         "realName": "Sakshi Malik",
//         "heroStrength": "Indian Women Wrestler",
//         "heroNature": "Rustic",
//         "imageUrl": "./app/assets/images/sakshimalik.jpg"
//     },
//     {
//         "heroId": 4,
//         "heroName": "Mariyappan",
//         "realName": "Mariyappan Thangavelu",
//         "heroStrength": "Inldian paralympic  High Jump Gold Winner",
//         "heroNature": "Angry",
//         "imageUrl": "./app/assets/images/Mariyappan.jpg"
//     },
//     {
//         "heroId": 5,
//         "heroName": "Vishy",
//         "realName": "Viswanathan Anand",
//         "heroStrength": "Indian Chess GrandMaster",
//         "heroNature": "Smart,Clever",
//         "imageUrl": "./app/assets/images/ViswanathanAnand.jpg"
//     }
// ]
//     }



}