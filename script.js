function next(ID) {  
  document.getElementById("q" + ID.toString()).style.display = 'none';
  document.getElementById("q" + (ID+1).toString()).style.display = 'block';
  
  return false;
}

function calculate() {
  var answers = new Array();
  answers.push(document.forms[0].q.value);
  answers.push(document.forms[1].q.value);
  answers.push(document.forms[2].q.value);
  answers.push(document.forms[3].q.value);
  answers.push(document.forms[4].q.value);
  answers.push(document.forms[5].q.value);
  answers.push(document.forms[6].q.value);
  answers.push(document.forms[7].q.value);
  var results = frequent(answers);

  hideQuiz();

  console.log(answers);
  console.log(results);

  if (results[0] == "A") {
    showVideo('https://github.com/agajdosi/lilky.wtf/raw/master/video/air.mov');
  }
  if (results[0] == "W") {
    showVideo('https://github.com/agajdosi/lilky.wtf/raw/master/video/water.mp4');
  }
  if (results[0] == "E") {
    showVideo('https://github.com/agajdosi/lilky.wtf/raw/master/video/earth.mp4');
  }
  if (results[0] == "F") {
    showVideo('https://github.com/agajdosi/lilky.wtf/raw/master/video/fire.mp4');
  }

  return false
}

function frequent(arr) {
  //handle answers containing 2 elements
  for (var i=0; i<arr.length; i++){
    if (arr[i] == 'EF'){
      arr[i] = 'E';
      arr.push('F');
    } else if (arr[i] == 'AW'){
      arr[i] == 'A';
      arr.push('W');
    }
  }
  console.log(arr);

  //count the most frequent element
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

function openFullscreen() {
  var elem = document.getElementById('video-player');
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
} 

function hideQuiz() {
  document.getElementById('q8').style.display = 'none';
  document.getElementById('elementalAnimation').style.display = 'none';
}

function showVideo(source) {
  var video = document.getElementById('video');
  video.style.display = 'block';
  video.style.width = '100%';
  video.style.height = 'auto';

  var src = document.createElement('source');
  src.setAttribute('src', source);
  video.appendChild(src);
  showVideoBG();
  video.load();
  hideElementsMenu();
  openFullscreen();
  video.onended = hidePlayer;
  startVideo();
}

function startVideo() {
  var video = document.getElementById('video');
  video.play();
}

function stopVideo() {
  var video = document.getElementById('video');
  video.stop();
}

function hidePlayer() {
  hideVideo();
  hideVideoBG();
  closeFullscreen();
  showElementsMenu();
}

function showElementsMenu() {
  var em = document.getElementById("elementsMenu");
  em.style.display = "block";
  em.style.width = "100%";
}

function hideElementsMenu() {
  var em = document.getElementById("elementsMenu");
  em.style.display = "none";
  em.style.width = "0";
}

function hideVideo() {
  var video = document.getElementById('video');
  video.style.display = "none";
  video.style.width = "0";
  video.style.height = "0";

  while (video.hasChildNodes()) {  
    video.removeChild(video.firstChild);
  }
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



// COUNTDOWN
var countDownDate = new Date("Nov 4, 2020 17:15:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var ofset = new Date().getTimezoneOffset();
  var utc = now + ofset*60000;
  
  console.log(now);
  console.log(ofset);
  console.log(utc);

  var distance = countDownDate - utc;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('q1').style.display = 'block';
    document.getElementById('elementalAnimation').style.display = 'flex';
    document.getElementById('counter').style.display = 'none';
    document.getElementById('counter').style.height = '0';
    document.getElementById('counter').style.width = '0';
    document.title = 'Lilky.wtf - elemental quiz';
  } else {
    document.getElementById('counter').style.display = 'block';
    document.getElementById('counter').style.width = '100%';
    document.title = 'Lilky.wtf - starting soon!';
  }
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById('time').innerHTML = hours + 'h '
  + minutes + 'm ' + seconds + 's ';
}, 1000);