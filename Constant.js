const Constant = {
	hone: hone = "h1",
	newC: function newC(objectName, values) {
		if(arguments[0] == hone) {
			var honeMain = document.createElement("h1");
			var num = arguments[1].indexOf("value")+1; 
			var argo = arguments[1];
			honeMain.innerHTML = argo[num];
			document.body.appendChild(honeMain);
		}
	}
}
