import { Component, ViewChild } from "@angular/core";
import { DrawCanvasComponent } from "../../common/material/drawcanvas/drawcanvas.component";
import { FlowBox } from "../../common/shapeobject/FlowBox";

@Component({
    selector:'querybuilder',
    templateUrl:'./qb.component.html',
    styleUrls:['/qb.component.css']
})
export class QueryBuilderComponent{

    @ViewChild("fcvs") finCanvas : DrawCanvasComponent;

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Add_Click(){
        let flowBox = new FlowBox();

        flowBox.x = 10;
        flowBox.y = 10;

        this.finCanvas.AddObject(flowBox);

    }

}//class