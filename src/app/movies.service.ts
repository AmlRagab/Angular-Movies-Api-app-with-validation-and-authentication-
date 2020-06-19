import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( public _HttpClient:HttpClient) { }



  gettrendingmovies():Observable<any> {

  return this._HttpClient.get('https://api.themoviedb.org/3/trending/movies/week?api_key=2a2c4a1964967cff2d6f95c381f19dd0')
    };


gettrendingtv():Observable<any> {

      return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=2a2c4a1964967cff2d6f95c381f19dd0')
        }
   
}

