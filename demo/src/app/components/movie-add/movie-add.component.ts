import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent {

  movieForm:FormGroup;

  constructor(private movieService:MovieService,private fb:FormBuilder,private router:Router){
    this.movieForm=this.fb.group({
      title:['',[Validators.required]],
      director:['',[Validators.required]],
      year:['',[Validators.required,]]
    });
  }

  addMovie():void{
    if(this.movieForm.valid){      
      this.movieService.createMovie(this.movieForm.value).subscribe(()=>{                
        this.router.navigate(['/']);
      });
    }    
  }

  



  



}
