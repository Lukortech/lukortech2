function showVal(newVal){
  document.getElementById("valBox").innerHTML = 'vol: ' + newVal;
  document.getElementById('valBox').style.visibility = "visible";
  document.getElementById('valBox').style.opacity = "1";
  function volumeTrackColoring(v){
    getComputedStyle(volume).setPropertyValue('--volumeTrack') = v;
    document.body.style.setProperty('--volumeTrack', v); 
  }
  setTimeout(function opacitySpan(){
    document.getElementById('valBox').style.opacity = "0";
    setTimeout(function hiddenSpan(){
      document.getElementById('valBox').style.visibility = "hidden";
    }, 1000);
  }, 2000);
}
function changeModal() {
    let el1 = document.getElementById('player')
    el1.classList.toggle("hidden");
    let el2 = document.getElementById('playlist')
    el2.classList.toggle("hidden");
}

/* This array consists of 128 records of songs with keys like: 
title  artist  year web_url  img_url and additional duration. 
I filled it with some values just to show you that the code below works just fine :) 
fe. check nr.8 and it's value of duration*/
fetch('./assets/songs.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(songList) {
    console.log(songList);
    console.log(songList.songs[0].artist);
    var div = document.createElement('div');
    document.getElementById('listOut').appendChild(div);
    songList.songs.forEach(function (item,index) {
      var playListArtist = document.createElement('div');    
      var playListTitle = document.createElement('div');
      div.appendChild(playListArtist);
      div.appendChild(playListTitle);
      playListArtist.innerHTML +=  '<span class="maxtime">' + timeDisplayHours(item.duration)+timeDisplayMinutes(item.duration)+timeDisplaySeconds(item.duration)+'</span>'+' '+item.artist;
      playListArtist.className = "artist";
      playListTitle.innerHTML += '<a href="updateCurrentSong(item .title,item.artist);">' + (index+1) + '.' + item.title + '</a>';
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
      let = titlePlaceholder = document.getElementById('title');
      let = artistPlaceholder = document.getElementById('artist');
      function updateCurrentSong(title, artist){
        let = titlePlaceholder = document.getElementById('title');
        titlePlaceholder.innerHTML = title;
        let = artistPlaceholder = document.getElementById('artist');
        artistPlaceholder.innerHTML =  artist;
      }
      updateCurrentSong(item .title,item.artist)
    });
  });





/*
window.onload = function() {
  json = JSON.parse('{"songs":[{"title":"1904","artist":"The Tallest Man on Earth","year":"2012","web_url":"http://www.songnotes.cc/songs/78-the-tallest-man-on-earth-1904","img_url":"http://fireflygrove.com/songnotes/images/artists/TheTallestManOnEarth.jpg"},{"title":"#40","artist":"Dave Matthews","year":"1999","web_url":"http://www.songnotes.cc/songs/119-dave-matthews-40","img_url":"http://fireflygrove.com/songnotes/images/artists/DaveMatthews.jpg"}]}');
  json2 = JSON.parse(/assets/songs.json);
    // Put the objects inside the <p>
  document.querySelector(".objects").textContent = json2.songs
  // Put a string of the objects in the <p>
  document.querySelector(".objectString").textContent = JSON.stringify(json2.songs);
  // Use the actual value
  document.querySelector(".value").textContent = json2.songs[0].artist;
}
*/



/*var json = fetch("./assets/songs.json")
  .then(response => response.json())
  .then(response => console.log(response));*/




// The json file availible online: for fater load hosted locally http://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/data.json

// document.getElementById("songList").innerHTML = parsed.id + ", " + obj.age;