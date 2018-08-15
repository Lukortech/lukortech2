document.getElementById("volume").value = "75";



function showVal(newVal){
  document.getElementById("valBox").innerHTML = newVal;
  function volumeTrackColoring(newVal){
    getComputedStyle(element).setPropertyValue('--volumeTrack') = newVal;
  }
}