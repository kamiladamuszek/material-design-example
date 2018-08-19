import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.css']
})
export class CommonDialogComponent implements OnInit {

  selectedField:Object;
  public repo;
  fieldOptions:Array<Object>;

  constructor(public dialogRef:MatDialogRef<CommonDialogComponent>) { }

  ngOnInit() {
    this.fieldOptions=[];
    for(var key in this.repo){
      this.fieldOptions.push({'name':key,'value':this.repo[key]});
    }
    this.selectedField=this.fieldOptions[0];
  }

}
