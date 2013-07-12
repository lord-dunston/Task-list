var list = document.getElementById("myList");
var el = document.getElementById("submit");

el.addEventListener("click", getTask, false);
list.addEventListener("click", removeTask, false);

function getTask (){

	var task = document.getElementById("task").value;
	document.getElementById("task").value = "";

	var taskNumber;
	var i;

	var d = new Date();
	var n = d.toISOString();

	for(i = 0; i <= localStorage.length ; i++){
		var taskNumber =  n ;
	}	

	list.innerHTML += '<li class="ct__input" id="' + n +'">' + task + '</li>';

	restoreState(taskNumber, task);
}

function restoreState(key, value) {
	localStorage.setItem(key, value)
}

function setList() {
	for (key in localStorage){
		list.innerHTML += '<li class="ct__input" id="' + key + '">' + localStorage[key] + '</li>';
		console.log(document.getElementById(key));
	}
}

function removeTask (e) {

	var listItem = e.target;

	var listId = listItem.getAttribute("id");

	localStorage.removeItem(listId);

	listItem.remove();

}

setList();