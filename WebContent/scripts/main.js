/**
 * NEWS object Definition START
 */
function fetchNews() {
	if(this.isNewsLoaded == 'N'){
		alert("News Not Yet Loaded..loading");
		this.newsHTML = "<img alt='LOADING..' src='resources/images/loading.gif'>";
		//make a request and set HTML. then set isNewsLoaded = 'Y'
	}
	this.newsDIV.innerHTML = this.newsHTML;
}

function NewsArticle(tempNewsDIV)
{
	this.newsDIV = tempNewsDIV;
	this.isNewsLoaded = 'N';
	this.newsID = "";
	this.newsHTML = "";
	
	//method which fetches news 
	this.news = fetchNews;
}
/**
 * END OF NEWS OBJECT DEFINITION
 */

var maxNewsObjects = 5;
var newsObjects = new Array(maxNewsObjects);
var defaultViewPosition = 2;
var currentViewPosition = 2;

function init() {
	for (i=0;i<newsObjects.length;i++)
	{
		var tempDiv = document.getElementById("news"+i);
		newsObjects[i] = new NewsArticle(tempDiv);		
		newsObjects[i].news();
	}

	document.getElementById('contentArea').scrollTop = ((document.getElementById('contentArea').scrollHeight)/maxNewsObjects)*2;
	
	document.onmousemove = function(e) {
		e = e || window.event;
		fixPageXY(e);

		var mousPosDiv = document.getElementById('mousePos');
		mousPosDiv.innerHTML = e.pageX + ',' + e.pageY;

		var x = e.pageX;
		var y = e.pageY;

		if (x > 0 && x < 240 && y > 100 && y < 530) {
			scrollDivRight('contentArea');
		}
		if (x > 840 && x < 1080 && y > 100 && y < 530) {
			scrollDivLeft('contentArea');
		}
	};
}


/**
 * These methods take care of scrolling news articles.
 */
defaultStep = 10;
step = defaultStep;

function scrollDivDown() {
	/*
	 * ALGO: This method shows news articles in higher index divs.
	 * 0. compute next div index position. if it is equal to max size, 
	 * call loadMoreNews(); and set current index to defaultViewPosition;
	 * 1. scroll the "contentArea" to show div which is 480*cuurrentViewPosition away from top. 
	 */
	currentViewPosition++;
	if(currentViewPosition == maxNewsObjects){
		loadMoreNews();
		currentViewPosition = defaultViewPosition;
	}
	step = ((document.getElementById('contentArea').scrollHeight)/maxNewsObjects)*currentViewPosition;
	document.getElementById('contentArea').scrollTop = step;
	toLeft('contentArea');
}

function scrollDivUp() {
	/*
	 * ALGO: This method shows news articles in lower index divs.
	 * 0. compute prev div index position. if it is equal to -1, 
	 * call loadMoreNews(); and set current index to defaultViewPosition;
	 * 1. scroll the "contentArea" to show div which is 480*nextDivIndex away from top. 
	 */
	currentViewPosition--;
	if(currentViewPosition == -1){
		loadMoreNews();
		currentViewPosition = defaultViewPosition;
	}
	step = ((document.getElementById('contentArea').scrollHeight)/maxNewsObjects)*currentViewPosition;
	document.getElementById('contentArea').scrollTop = step;
	toLeft('contentArea');
}

function loadMoreNews() {
	
}

var prevScrollTop = -1;

function toTop(id) {
	document.getElementById(id).scrollTop = 0;
}

function toBottom(id) {
	var i = document.getElementById(id).scrollTop;
	var j = document.getElementById(id).scrollHeight;
	var mousPosDiv = document.getElementById('mousePos');
	mousPosDiv.innerHTML = i + ',' + j;
	if (prevScrolTop != i && i < j) {
		prevScrollTop = i;
		document.getElementById(id).scrollTop += step;
		timerDown = setTimeout("toBottom('" + id + "')", 10);
	} else {
		clearTimeout(timerDown);
	}
}

function toPoint(id) {
	document.getElementById(id).scrollTop = 100;
}



scrollStep = 10;

timerLeft = "";
timerRight = "";


function toLeft(id) {
	document.getElementById(id).scrollLeft = 0;
}

function toRight(id) {
	document.getElementById(id).scrollLeft = document.getElementById(id).scrollWidth;
}

function scrollDivLeft(id) {
	clearTimeout(timerRight);
	document.getElementById(id).scrollLeft += scrollStep;
	i = document.getElementById(id).scrollLeft;
	if (i % 360 != 0) {
		timerRight = setTimeout("scrollDivLeft('" + id + "')", 5);
	}
}

function scrollDivRight(id) {
	clearTimeout(timerLeft);
	document.getElementById(id).scrollLeft -= scrollStep;
	i = document.getElementById(id).scrollLeft;
	if (i % 360 != 0) {
		timerLeft = setTimeout("scrollDivRight('" + id + "')", 5);
	}
}



function fixPageXY(e) {
	if (e.pageX == null && e.clientX != null) {
		var html = document.documentElement;
		var body = document.body;

		e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
		e.pageX -= html.clientLeft || 0;

		e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
		e.pageY -= html.clientTop || 0;
	}
}

