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
  
  if (results[0] == "A") {
    window.location.href = "https://www.youtube.com/embed/sGkh1W5cbH4?autoplay=1";
  }
  if (results[0] == "B") {
    window.location.href = "https://www.youtube.com/embed/jkLRith2wcc?autoplay=1";
  }
  if (results[0] == "C") {
    window.location.href = "https://www.youtube.com/embed/xNN7iTA57jM?autoplay=1";
  }
  if (results[0] == "D") {
    window.location.href = "https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1";
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