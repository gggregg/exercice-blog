import { Component } from '@angular/core';
import { Post } from './shared/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'exercice-blog';
  
    /* listPosts : Array<Post> = [
	{
		title : "Debut du tutoriel Angular",
		content : "Ca a l'air plutot simple...",
		loveIts : 3
	},
	{
		title : "C'est hyper dur",
		content : "La demotivation est terrible",
		loveIts : -2,
	},
	{
		title : "Finalement on y arrive",
		content : "... avec beaucoup d'efforts",
		loveIts : 0,
	}]; */

	listPosts : Array<Post> = [
		new Post ("Debut du tutoriel Angular", "Ca a l'air plutot simple...", 3),
		new Post ("C'est hyper dur", "La demotivation est terrible", -2),
		new Post ("Finalement on y arrive", "... avec beaucoup d'efforts", 0)
	];

}
