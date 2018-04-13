import {Component} from '@angular/core';
import {Employee} from './models/employee';

@Component(
  {
    selector:'my-app',
    templateUrl:'./home1.component.html'
    // template:`<h1>Hello {{name}}</h1>`
  }
)

export class AppComponent{
  name="Welcome to Angular4";
  languages=['Hindi','English','Spanish','German','Other'];
  model=new Employee('Sudhansu','Dash',true,'Monthly','default');
  hello="Hello";
  saveData(){
    alert("Save Success");
  }
  firstnameuppercase(value:string){
    if(value.length>0){
        this.model.firstname=value.charAt(0).toUpperCase()+value.slice(1);
      }
      else{
        this.model.firstname=value
      }
  }

  hasPrimaryLanguageError=false;
  validatePrimaryLanguage(value:string)
  {
    console.log('lang'+this.model.primaryLanguage);
    if(value==='default')
      {
        this.hasPrimaryLanguageError=true;
      }
      else{
        this.hasPrimaryLanguageError=false;
      }
  }

  selectedBodystyle: string;
  selectedIcon;
  bodyStyles = [
    { value: 'Mercedez' , viewValue: 'Mercedez', icon: "http://lorempixel.com/40/40/transport/" },
    { value: 'Ferrari'  , viewValue: 'Ferrari' , icon: "http://lorempixel.com/30/30/transport/" },
    { value: 'BMW'      , viewValue: 'BMW'     , icon: "http://lorempixel.com/50/50/transport/" }
  ];
  
  optionSelected(event){
    // console.log(event.value.icon);
    this.selectedIcon = event.value.icon;
  }
}
