function next(ID) {  
  document.getElementById("q" + ID.toString()).style.display = "none"
  document.getElementById("q" + (ID+1).toString()).style.display = "block"
  
  return false
}

function calculate() {
  var answers = new Array()
  answers.push(document.forms[0].q.value)
  answers.push(document.forms[1].q.value)
  answers.push(document.forms[2].q.value)
  var results = frequent(answers)

  showVideoBG();

  if (results[0] == "A") {
    showVideo('video/mov.mp4');
  }
  if (results[0] == "W") {
    showVideo('video/mov.mp4');
  }
  if (results[0] == "E") {
    showVideo('video/mov.mp4');
  }
  if (results[0] == "F") {
    showVideo('video/mov.mp4');
  }

  return false
}

function frequent(arr) {
  var mf = 1;
  var m = 0;
  var item;
  for (var i=0; i<arr.length; i++){
    for (var j=i; j<arr.length; j++){
      if (arr[i] == arr[j])
        m++;
        if (mf<m){
          mf=m; 
          item = arr[i];
        }
      }
    m=0;
  }

  return [item, mf]
}

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function showVideo(source) {
  var video = document.getElementById('video');
  video.style.display = "block";
  video.style.width = "100%";
  video.style.height = "auto";

  var src = document.createElement('source');
  src.setAttribute('src', source);
  video.appendChild(src);

  //video.onclick = openFullscreen;
  video.play();
  openFullscreen(video);
}

function hideVideo() {
  var video = document.getElementById('video');
  video.style.display = "none";
  video.style.width = "0";
  video.style.height = "0";
  video.stop();
}

function showVideoBG() {
  var videobg = document.getElementById('video-bg');
  videobg.style.display = "block";
  videobg.style.width = "100%";
  videobg.style.height = "100%";
}

function hideVideoBG() {
  var videobg = document.getElementById('video-bg');
  videobg.style.display = "none";
  videobg.style.width = "0";
  videobg.style.height = "0";
}
