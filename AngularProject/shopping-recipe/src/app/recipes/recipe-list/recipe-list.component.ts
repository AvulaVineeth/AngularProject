import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://s3-ap-southeast-1.amazonaws.com/assets1.craftsvilla.com/blog/wp-content/uploads/2016/06/tikka.jpg')
    
  ];

  constructor(){ }
  ngOnInit(){

  }
}
