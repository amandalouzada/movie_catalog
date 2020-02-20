import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  public formMovie: FormGroup;
  constructor() {
    this.formMovie = new FormGroup({
      title: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required),
      mainActors: new FormControl('', Validators.required),
      youtubeTrailer: new FormControl('', Validators.required),
      summarizedPlot: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {

  }

  save(){
    console.log(this.formMovie.value);
  }

}
