document.getElementById("changeList").onclick = newList;

function newList() {
	item1 = prompt("firstItem");
	item2 = prompt("secondItem");
	item3 = prompt("thirdItem");
	item4 = prompt ("forthItem");
	item5 = prompt ("fifthItem");
	item6 = prompt ("sixthItem");
	updateList();
}
function updateList() {
	document.getElementById("o").innerHTML = item1;
	document.getElementById("d").innerHTML = item2;
	document.getElementById("g").innerHTML = item3;
	document.getElementById("h").innerHTML = item4;
	document.getElementById("j").innerHTML = item5;
	document.getElementById("k").innerHTML = item6;
}