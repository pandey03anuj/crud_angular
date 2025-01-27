import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies:Movie[]=[];
  filteredMovies:Movie[]=[];
  searchText:string='';

  constructor(private movieService:MovieService,private router:Router){}


  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data)=>{
      this.movies=data;
      this.filteredMovies=[...this.movies];
    });
  }

  deleteMovie(id:number):void{
    this.movieService.deleteMovie(id).subscribe(()=>{
      this.movies=this.movies.filter(movie=>movie.id!==id);
    });
  }

  editMovie(id:number):void{
    this.router.navigate([`/edit/${id}`]);
  }

  filterMovies():void{    
    if(this.searchText){
      this.filteredMovies=this.movies.filter((movie)=>{
        movie.title.toLowerCase().includes(this.searchText.toLowerCase()) || 
        movie.director.toLowerCase().includes(this.searchText.toLowerCase())
      });
    }
    else{
      this.filteredMovies=[...this.movies];
    }
  }


}
