/*
 *	author: Serafim Dos Santos Fagundes
 */
$(function () {
	var aImg = document.getElementsByClassName("ma");
	for (i=0; i<aImg.length; i++) {
		dragElement(aImg[i]);
	}
	
	var aImg = document.getElementsByClassName("minaw");
	for (i=0; i<aImg.length; i++) {
		dragElement(aImg[i]);
	}
	
	var aImg = document.getElementsByClassName("minac");
	for (i=0; i<aImg.length; i++) {
		dragElement(aImg[i]);
	}	

	var aImg = document.getElementsByClassName("minas");
	for (i=0; i<aImg.length; i++) {
		dragElement(aImg[i]);
	}
	
	var aImg = document.getElementsByClassName("minad");
	for (i=0; i<aImg.length; i++) {
		dragElement(aImg[i]);
	}	
});
