import { Component, OnInit } from '@angular/core';
import { Study } from 'src/app/models/study';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.css']
})
export class StudyListComponent implements OnInit {
  title = 'ngAfterBoot';

  studies: Study[] = [];

  selected: Study | null = null;
  newStudy: Study = new Study(0, '', '', '', '', '', '', '', '','');
  editStudy: Study | null = null;


  constructor(
    private studyService: StudyService
  ) { }



  ngOnInit(): void {
    this.reloadStudies();
  }

  reloadStudies(){
    this.studyService.index().subscribe(
      studies =>{
        this.studies = studies;
      },
      fail =>{
        console.error('StudyListComponent.loadStudies(): error loading studies');
        console.error(fail);
      }
    );
  }

  displayStudy(study: Study): void {
    this.selected = study;
  }

  displayTable(study: Study): void {
    this.selected = null;
  }

  addStudy(study: Study) {
    this.studyService.create(study).subscribe(
      (newStudy) => {
        console.log('StudyList.addStudy(): todo created successfully');
        this.reloadStudies();
        this.newStudy = new Study(0, '', '', '', '', '', '', '', '','');
      },
      (err) => {
        console.error('TodoList.addTodo(): Error creating Study');
        console.error(err);
      }
    );
  }

  setEditStudy(): void {
    this.editStudy = Object.assign({}, this.selected);
  }

  updateStudy(study: Study, showStudy = true): void {
    this.studyService.update(study).subscribe(
      (updated) => {
        this.reloadStudies();
        this.editStudy = null;
        if (showStudy) {
          this.selected = updated;
        }
        this.selected = updated;
      },

      (failure) => {
        console.error('TodoListComponent.updateTodo(): error updating todo');
        console.error(failure);
      }
    );
  }

  deleteStudy(id: number): void {
    this.studyService.delete(id).subscribe(
      (success) => {
        this.reloadStudies();
      },
      (failure) => {
        console.error('TodoListComponent.deleteTodo(): error deleting todo');
        console.error(failure);
      }
    );
  }

  // calcDuration ParseInt(end: string, start: string){
  //   return Math.round((end-start));
  // }
}

