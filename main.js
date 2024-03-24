var menu = document.getElementById("a0");
var a = document.getElementById("a1");
var b = document.getElementById("a2");
var c = document.getElementById("a3");
var d = document.getElementById("a4");
var balls = document.getElementById("c");
var ball = document.getElementById("d");
var logo = document.getElementById("logo");
function imgError(image) {
    image.onerror = "";
    image.src = "img/missing_texture.png";
    return true;
}
logo.addEventListener('click', () => {
	location.href = 'index.html';
});
menu.addEventListener('click', () => {
	if (balls.style.display === "none") {
		balls.style.display = "block";
	} else {
		 balls.style.display = "none";
	}
});
ball.addEventListener('click', () => {
	balls.style.display = "none";
});
a.addEventListener('click', () => {
	location.href = 'download.html';
});
b.addEventListener('click', () => {
	location.href = 'about.html';
});
c.addEventListener('click', () => {
	location.href = 'support.html';
});
d.addEventListener('click', () => {
	location.href = 'https://github.com/rocky-devexe/rocky-devexe.github.io';
});
