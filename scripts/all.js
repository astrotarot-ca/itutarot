/*
*	Author: Serafim Junior Dos Santos Fagundes
*/
function dragElement(elmnt) {
  var active = false;
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;
  
  elmnt.addEventListener("touchstart", dragStart, false);
  elmnt.addEventListener("touchend", dragEnd, false);
  elmnt.addEventListener("touchmove", drag, false);  
  elmnt.addEventListener("mousedown", dragStart, false);
  elmnt.addEventListener("mouseup", dragEnd, false);
  elmnt.addEventListener("mousemove", drag, false);
  
  function dragStart(e) {  
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    $(elmnt).css("zIndex", "100");
  
    if (e.target === elmnt) {
      active = true;
    }
  }
  
  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;  
    active = false;
    $(elmnt).css("zIndex", "90");
  }
  
  function drag(e) {
    if (active) {
    
      e.preventDefault();

      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }
  
      xOffset = currentX;
      yOffset = currentY;  
      setTranslate(currentX, currentY, elmnt);
    }
  }  
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

function placeElement(iTot,iNdx,oEnt) {
	oEnt.style.left = (iMrgnStrt+iCrdMrgn*iNdx+"px");
	oEnt.style.top = (iMrgnStrt+iCrdTop+"px");
}

