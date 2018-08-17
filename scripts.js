function showVal(newVal){
  document.getElementById("valBox").innerHTML = 'vol: ' + newVal;
  document.getElementById('valBox').style.visibility = "visible";
  document.getElementById('valBox').style.opacity = "1";
  function volumeTrackColoring(newVal){
    getComputedStyle(element).setPropertyValue('--volumeTrack') = newVal;
  }
  setTimeout(function opacitySpan(){
    document.getElementById('valBox').style.opacity = "0";
    setTimeout(function hiddenSpan(){
      document.getElementById('valBox').style.visibility = "hidden";
    }, 1000);
  }, 2000);
}

/*
var req = new XMLHttpRequest();
req.open('GET', 'http://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/data.json', true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200)
      console.log(req.responseText);
     else
      console.log("Błąd podczas ładowania strony\n");
  }
};
req.send(null);
*/


/*function changeModal() {
    let el1 = document.getElementById('player')
    el1.classList.toggle("hidden");
    let el2 = document.getElementById('playlist')
    el2.classList.toggle("hidden");
}*/

function changeModalEase(){
  if(document.getElementById('player').style.opacity === "0"){
    setTimeout(function opacitySpan(){
      document.getElementById('player').style.opacity = "1";
      setTimeout(function hiddenSpan(){
        document.getElementById('player').style.visibility = "visible";
      }, 1000);
    }, 2000);
    setTimeout(function opacitySpan(){
      document.getElementById('playlist').style.opacity = "0";
      setTimeout(function hiddenSpan(){
        document.getElementById('playlist').style.visibility = "hidden";
      }, 1000);
    }, 2000);
  }
  else{
    setTimeout(function opacitySpan(){
      document.getElementById('player').style.opacity = "0";
      setTimeout(function hiddenSpan(){
        document.getElementById('player').style.visibility = "hidden";
      }, 1000);
    }, 2000);
    setTimeout(function opacitySpan(){
      document.getElementById('playlist').style.opacity = "1";
      setTimeout(function hiddenSpan(){
        document.getElementById('playlist').style.visibility = "visible";
      }, 1000);
    }, 2000);
  }


  
}




//http://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/data.json