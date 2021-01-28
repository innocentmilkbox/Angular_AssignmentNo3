import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public student: StudentModel = new StudentModel();
  public studentList: StudentModel[] = [];  
  constructor() { }

  ngOnInit(): void {
  }
  public btnAddStudent_Click(): void {
    this.studentList.push(this.student);
    this.student = new StudentModel();
  }
}
