import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QueryBuilderComponent } from "./datatools/querybuilder/qb.component";

const routes : Routes = [{
    path:'',
    children:[
        {
            path:'querybuilder',
            component:QueryBuilderComponent
        }
    ]
}]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class MyAppRouting{}
