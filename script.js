
function calculate() {

  console.log("calculating")

  var answers = new Array()
  answers.push(document.forms.quiz.q1.value)
  answers.push(document.forms.quiz.q2.value)
  answers.push(document.forms.quiz.q3.value)
  answers.push(document.forms.quiz.q4.value)
  answers.push(document.forms.quiz.q5.value)

  var results = frequent(answers) 

  console.log(results[0], results[1])
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