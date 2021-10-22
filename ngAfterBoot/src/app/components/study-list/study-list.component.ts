import { Component, OnInit } from '@angular/core';
import { Study } from 'src/app/models/study';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.css']
})
export class StudyListComponent implements OnInit {

  constructor(
    private studyService: StudyService
  ) { }
studies: Study[] = [];
  ngOnInit(): void {
    this.loadStudies();
  }

  loadStudies(){
    this.studyService.index().subscribe(
      studies =>{
        this.studies = studies;
      },
      fail =>{
        console.error('StudyListComponent.loadStudies(): error loading studies');
        console.error(fail);
      }

    )
  }

}
