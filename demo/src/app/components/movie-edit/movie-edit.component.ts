import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movieForm:FormGroup;
  movieId: any|undefined;

  constructor(private movieService:MovieService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router){
    this.movieForm=this.fb.group({      
          title:['',[Validators.required]],
          director:['',[Validators.required]],
          year:['',[Validators.required]]
        });
  }

  ngOnInit(): void {
    this.movieId=this.route.snapshot.paramMap.get('id')!;    
    this.movieService.getMovie(this.movieId).subscribe(movie=>{
      this.movieForm.patchValue(movie);
    });
  }

  updateMovie():void{
    if(this.movieForm.valid){
      this.movieService.updateMovie({...this.movieForm.value,id:this.movieId}).subscribe(()=>{
        this.router.navigate(['/']);
      });
    }

  }


}
