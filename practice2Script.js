function change_paragraph() {
	var border_R = document.getElementById("border_R").value;
	var border_G = document.getElementById("border_G").value;
	var border_B = document.getElementById("border_B").value;
	var border_width = document.getElementById("border_width").value;
	var background_R = document.getElementById("background_R").value;
	var background_G = document.getElementById("background_G").value;
	var background_B = document.getElementById("background_B").value;

	var target = document.getElementById("target");
	target.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
	target.style.borderWidth = border_width;
	target.style.backgroundColor = `rgb(${background_R},${background_G},${background_B})`;
}
