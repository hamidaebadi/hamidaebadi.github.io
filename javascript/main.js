let xHttp = new XMLHttpRequest();
 //Action when app recieves the answer
 xHttp.onreadystatechange = function (){
 	if(this.readyState == 4 && this.status == 200){
 		var dataObj = JSON.parse(this.responseText);
 		console.log(dataObj[0].title);
 	}
 }

xHttp.open("GET", "database/homePageContent.json", true);
xHttp.send();