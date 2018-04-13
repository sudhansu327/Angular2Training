import {Component, Input,OnInit,Output,EventEmitter} from '@angular/core';



@Component(
  {
    selector:'my-popup',
    templateUrl:'./popup.component.html'
    // template:`<h1>Hello {{name}}</h1>`
  }
)

export class PopupComponent implements OnInit {
    @Input() data:string;
    @Output() onSave = new EventEmitter();
    msg:string="";
    

    ngOnInit() {
        this.msg=this.data;
    }

    saveData() {
        
        this.onSave.emit();
    }
  
}
