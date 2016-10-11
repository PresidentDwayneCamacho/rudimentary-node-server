/*
	Class for user posts
*/

/*
class Post {
	constructor(header, category, text_body){
		this.header = header;
		this.category = category;
		this.text_body = text_body;
	}
}
*/

function Post(){
	this.header = header;
	this.category = category;
	this.text_body = text_body;
}

Post.prototype.print(){
	console.log(this.header);
}


module.exports = Post;

