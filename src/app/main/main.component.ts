import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'main',
    templateUrl:'./main.component.html',
    styleUrls:['./main.component.css']
})
export class MainComponent{

    constructor(private _router : Router){}

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    QueryBuilder_Click(){
        this._router.navigate(['/myapp/querybuilder']);
    }
    

}//class
