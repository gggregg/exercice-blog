export class Post {
	title: string;
	content: string;
	loveIts: number;
	created_at: Date;

	/* Constructor() {
		this.created_at = new Date();  
	} */
	
	constructor(title: string, content: string, loveIts: number) {
		this.title = title;
		this.content = content;
		this.loveIts = loveIts;
		this.created_at = new Date();  
	}
	
	IsLoved() { return this.loveIts > 0; }
	IsHated() { return this.loveIts < 0; }
	
	onLove() { 
		this.loveIts++;
		console.log('' + this.loveIts + ' loves'); 
	}
	onHate() { 
		this.loveIts--;
		console.log('' + this.loveIts + ' loves');
	}
} 