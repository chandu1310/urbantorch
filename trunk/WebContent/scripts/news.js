/**
 * NEWS object  
 */

function fetchNews() {
	if(this.isNewsLoaded == 'N'){
		alert("News Not Yet Loaded..loading");
		this.newsHTML = "<img alt='LOADING..' src='resources/images/loading.gif'>";
		//make a async request and set HTML. then set isNewsLoaded = 'Y'
	}
	return this.newsHTML;
}

function NewsArticle()
{
	this.isNewsLoaded = 'N';
	this.newsID = "";
	this.newsHTML = "";
	
	//this property is loaded 
	this.news = fetchNews;
}