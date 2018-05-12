import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyAppRouting } from "./myapp.routing";
import { QueryBuilderComponent } from "./datatools/querybuilder/qb.component";

@NgModule({
    imports:[
        MyAppRouting
    ],
    declarations:[
        QueryBuilderComponent
    ]
})
export class MyAppModule{}