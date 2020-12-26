//function for getting json comment file from server
function commentProcessor(){
	let xHttp = new XMLHttpRequest();
	xHttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			let storedCommentsAsJson = JSON.parse(this.responseText);

			//append the comment
			let commentObj = handleFormData();
			storedCommentsAsJson.push(commentObj);
			saveComment(storedCommentsAsJson);
			document.getElementById("visitorName").value = "";
			document.getElementById("visitorComment").value = "";
		}
	}
	xHttp.open("GET", "database/comments.json", true);
	xHttp.send();
}

//takes form's data and return comment object
function handleFormData(){
	let senderName = document.getElementById("visitorName").value;
	let senderComment = document.getElementById("visitorComment").value;

	var commentObject = {
		sender: senderName,
		comment: senderComment
	};
	
	return commentObject;
}

function saveComment(jsonData){

	//sending data back to the server
	let xhr = new XMLHttpRequest(); 
    let url = "database/comments.json";

    //open a connection
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    //converting json data to string
    let data = JSON.stringify(jsonData);
    console.log(data);
    xhr.send(data);

}

