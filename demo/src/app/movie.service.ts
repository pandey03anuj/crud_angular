import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl='https://symmetrical-eureka-vx9grwx5jj5hxr75-3000.app.github.dev/movies';

  constructor(private http:HttpClient ) { }

    // Get all movies
    getMovies():Observable<Movie[]>{
      return this.http.get<Movie[]>(this.apiUrl);
    }

    // Get a single movie by ID
    getMovie(id:number): Observable<Movie>{
      return this.http.get<Movie>(`${this.apiUrl}/${id}`);
    }


    // Create a new movie
    createMovie(movie:Movie):Observable<Movie>{
      return this.http.post<Movie>(this.apiUrl,movie);
    }

    // Update an existing movie
    updateMovie(movie:Movie):Observable<Movie>{
      return this.http.put<Movie>(`${this.apiUrl}/${movie.id}`,movie);

    }

    // Delete a movie
    deleteMovie(id:number):Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }


}
