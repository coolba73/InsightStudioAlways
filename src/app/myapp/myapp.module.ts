import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyAppRouting } from "./myapp.routing";
import { QueryBuilderComponent } from "./datatools/querybuilder/qb.component";
import { Test01Component } from "./datatools/test01/test01.component";
import { DrawCanvasComponent } from "./common/material/drawcanvas/drawcanvas.component";
import { MatButtonModule, MatCommonModule, MatDialogModule } from "@angular/material";
import { TestDialogComponent } from "./common/dialog/testdialog/testdialog.component";

@NgModule({
    imports:[
        MyAppRouting,
        MatButtonModule,
        MatCommonModule,
        MatDialogModule,
        
    ],
    declarations:[
        QueryBuilderComponent,
        Test01Component,
        DrawCanvasComponent,
        TestDialogComponent
    ],
    entryComponents:[
        TestDialogComponent
    ]
})
export class MyAppModule{}