let xHttp = new XMLHttpRequest();
 //Action when app recieves the answer
 xHttp.onreadystatechange = function (){
 	if(this.readyState == 4 && this.status == 200){
 		var element = document.getElementsByClassName("main-text");
 		element.innerHTML = this.responseText;
 	}
 }

xHttp.open("GET", "database/homePageContent.json", true);
xHttp.send();