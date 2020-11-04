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
    showVideo('video/voda.mp4');
  }
  if (results[0] == "W") {
    showVideo('video/voda.mp4');
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

function openFullscreen(elem) {
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
  video.load();

  showVideoBG();
  hideElementsMenu();
  openFullscreen(video);
  startVideo();
}

function startVideo() {
  var video = document.getElementById('video');
  video.onended = hidePlayer;

  video.play();
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

function stopVideo() {
  var video = document.getElementById('video');
  video.stop();
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
