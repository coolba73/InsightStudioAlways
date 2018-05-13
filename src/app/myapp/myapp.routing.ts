import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QueryBuilderComponent } from "./datatools/querybuilder/qb.component";
import { Test01Component } from "./datatools/test01/test01.component";

const routes : Routes = [{
    path:'',
    children:[
        {
            path:'querybuilder',
            component:QueryBuilderComponent
        },
        {
            path:'test01',
            component:Test01Component
        }
    ]
}]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class MyAppRouting{}
