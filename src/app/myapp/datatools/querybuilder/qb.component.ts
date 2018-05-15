import { Component, ViewChild } from "@angular/core";
import { DrawCanvasComponent } from "../../common/material/drawcanvas/drawcanvas.component";
import { FlowBox } from "../../common/shapeobject/FlowBox";
import { MatDialog, MatDialogRef } from "@angular/material";
import { TestDialogComponent } from "../../common/dialog/testdialog/testdialog.component";

@Component({
    selector:'querybuilder',
    templateUrl:'./qb.component.html',
    styleUrls:['/qb.component.css']
})
export class QueryBuilderComponent{

    @ViewChild("fcvs") finCanvas : DrawCanvasComponent;
    testDialogRef : MatDialogRef<TestDialogComponent>;


    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    constructor(private dialog:MatDialog){}

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Add_Click(){
        let flowBox = new FlowBox();

        flowBox.x = 10;
        flowBox.y = 10;

        this.finCanvas.AddObject(flowBox);
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    ViewSQL_Click(){

        this.testDialogRef = this.dialog.open(TestDialogComponent );
    }


}//class