let xHttp = new XMLHttpRequest();
 //Action when app recieves the answer
 xHttp.onreadystatechange = function (){
 	if(this.readyState == 4 && this.status == 200){
 		console.log(this.responsText);
 	}
 }

xHttp.open("GET", "database/homePageContent.json", true);
xHttp.send();