/*
 *	author: Serafim Dos Santos Fagundes
 */
$(function () {
	var aImg = document.getElementsByClassName("aspect");
	for (i=0; i<aImg.length; i++) {
		dragElement(aImg[i]);
	}

	var aImg = document.getElementsByClassName("house");
	for (i=0; i<aImg.length; i++) {
		dragElement(aImg[i]);
	}
	
	var aImg = document.getElementsByClassName("constellation");
	for (i=0; i<aImg.length; i++) {
		dragElement(aImg[i]);
	}
	
	var aImg = document.getElementsByClassName("planet");
	for (i=0; i<aImg.length; i++) {
		dragElement(aImg[i]);
	}	
});
