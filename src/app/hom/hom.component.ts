import { Component, OnInit } from '@angular/core';
import{MoviesService} from '../movies.service';

@Component({
  selector: 'app-hom',
  templateUrl: './hom.component.html',
  styleUrls: ['./hom.component.scss']
})

export class HomComponent implements OnInit {
imgprefix ="https://image.tmdb.org/t/p/w500/"
  trendingmovies=[];
  trendingtv=[];
  
  constructor( _MoviesService:MoviesService)
   { 
    _MoviesService.gettrendingmovies().subscribe((data)=>{

      this.trendingmovies = data.results},(err)=>{console.log(err)}
    );

    _MoviesService.gettrendingtv().subscribe((data)=>{

      this.trendingtv = data.results},(err)=>{console.log(err)}
    );

  
 

}

 
  

  

  ngOnInit():void{}

}
