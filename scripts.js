
/* This array consists of 128 records of songs with keys like: 
title  artist  year web_url  img_url and additional duration. 
I filled it with some values just to show you that the code below works just fine :) 
fe. check nr.8 and it's value of duration*/


fetch('./assets/songs.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    // console.log(json);
    // console.log(json.songs[0].artist); 
    var div = document.createElement('div');
    document.getElementById('listOut').appendChild(div);
    
    json.songs.forEach(function (item,index) {
      var playListArtist = document.createElement('div');    
      var playListTitle = document.createElement('div');
      div.appendChild(playListArtist);
      div.appendChild(playListTitle);

      playListArtist.innerHTML +=  '<span class="maxtime">' + timeDisplayHours(item.duration)+timeDisplayMinutes(item.duration)+timeDisplaySeconds(item.duration)+'</span>'+' '+ '<span id="artistName">' + item.artist + '</span>';
      playListArtist.className = "artist";

      playListTitle.innerHTML += '<span id="titleName">' + '<span id="index">'+ (index+1) + '</span>' + '. ' + item.title + '</span>';
      playListTitle.className = "title";
      

      function timeDisplayHours(maxTime){
        maxTime = Number(maxTime);
        var h = Math.floor(maxTime / 3600);
        if(h>=1){return h+':'}
        else{return ''}
      }
      function timeDisplayMinutes(maxTime){
        maxTime = Number(maxTime);
        var m = Math.floor(maxTime % 3600 / 60);
        if(m>=1){return m+':'}
        else{return '00'+':'}
      }
      function timeDisplaySeconds(maxTime){
        maxTime = Number(maxTime);
        var s = Math.floor(maxTime % 3600 % 60);
        if(s>=1){return s+' |'}
        else{return '00'+' |'}
      }
      
    });
    
  });


  let volumeBar = document.getElementById('volume');
  volumeBar.addEventListener("click", function() {
    let volumeBar = document.getElementById('volume');
    let volumeValue = volumeBar.value;
    showVolume(volumeValue);
  });
  
  volumeBar.addEventListener("mouseout", hideVolume);
  
  function showVolume(volume){
    document.getElementById("valBox").innerHTML = 'vol: ' + volume;
    document.getElementById('valBox').style.visibility = "visible";
    document.getElementById('valBox').style.opacity = "1";
  }
  function hideVolume(){
    document.getElementById('valBox').style.opacity = "0";
    document.getElementById('valBox').style.visibility = "hidden";
  }
  
  function changeModal() {
    let player = document.getElementById('player');
    let playlist = document.getElementById('playlist');
    if(playlist.classList.contains('hidden')){
      player.classList.toggle("hidden");
      playlist.classList.toggle("hidden");
    }
  }
  
  function playButton(){
    button = document.getElementById('play');
    button.classList.toggle("fa-play");
    button.classList.toggle("fa-pause");
  }
  
  function nextButton(){
    button = document.getElementById('forth');
  }
  function previousButton(){
    button = document.getElementById('back');
    
  }



/* I've been working on this code but it's a little too much. 
I know there is easier way to do it with framework, but I wanted it the hard way.


    let = titlePlaceholder = document.getElementById('title').innerHTML;
    let = artistPlaceholder = document.getElementById('artist').innerHTML;

    titleElement = document.getElementById('titleName');
    titleText = titleElement.innerHTML;
    
    artistElement = document.getElementById('artistName');
    artistText = artistElement.innerHTML;
    
    
    
    titleElement.addEventListener("click", updateCurrentSong(titleText,artistText));
    function updateCurrentSong(){
      for(let i = 1; i<= json.songs.length; i++){
        if(titleText!=titlePlaceholder){
          console.log(json.songs.length); //check
          titlePlaceholder.innerHTML = titleText;
          artistPlaceholder.innerHTML = artistText;
        }
      }
    }
    
  function updateCurrentSong(title, artist){
    let = titlePlaceholder = document.getElementById('title');
    titlePlaceholder.innerHTML = title;
    let = artistPlaceholder = document.getElementById('artist');
    artistPlaceholder.innerHTML =  artist;
    let exactSong = document.getElementsByClassName('title');
    let number = json.songs.indexOf("Apple");

    for(let i=0; i<= json.songs.length ;i++){
      updateCurrentSong(item.title,item.artist);
    }
  }
  
  
  
document.addEventListener("click", updateArtist, updateTitle)
  function updateTitle(value){
    let titleBox = document.getElementById('title');
    let value = document.getElementById('value').innerHTML;
    for(var i=1; i<json.songs.length; i++){
      if(value == i){
        console.log(json.songs[i].artist + json.songs[i].title)
      }
    }
  }
  function updateArtist(){
    for(var i=1; i<json.songs.length; i++){
      
    }
  }
  
  
  */



// The json file availible online: for faster load hosted locally http://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/data.json