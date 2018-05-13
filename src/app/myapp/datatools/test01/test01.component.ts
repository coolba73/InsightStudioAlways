import { Component, ViewChild } from "@angular/core";
import { DrawCanvasComponent } from "../../common/material/drawcanvas/drawcanvas.component";
import { BaseObject } from "../../common/shapeobject/BaseObject";
import { BoxBase } from "../../common/shapeobject/BoxBase";
import { FlowBox } from "../../common/shapeobject/FlowBox";
import { LineBase } from "../../common/shapeobject/LineBase";
import { SelectBox } from "../../common/shapeobject/SelectBox";


@Component({
    selector:'test01',
    templateUrl:'./test01.component.html',
    styleUrls:['./test01.component.css']
})
export class Test01Component{

    @ViewChild("fcvs") finCanvas : DrawCanvasComponent;


    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    Add_Click(){
        let flowBox = new FlowBox();

        flowBox.x = 10;
        flowBox.y = 10;

        this.finCanvas.AddObject(flowBox);

    }

}//class