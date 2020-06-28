function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
  }

function punnettsquare() {

  var x = 0
  var mothers_genome = document.getElementById("mothers genome").value;
  var fathers_genome = document.getElementById("fathers genome").value;

  mothers_genome = mothers_genome.toString()
  fathers_genome = fathers_genome.toString()
  var mothers_genome2 = mothers_genome.split('')
  var fathers_genome2 = fathers_genome.split('')
  
    while (x < 10) {
    var child1_genome1 = mothers_genome2[randomIntFromInterval(0,1)] +   fathers_genome2[randomIntFromInterval(0,1)]
    var child1_genome2 = mothers_genome2[randomIntFromInterval(2,3)] + fathers_genome2[randomIntFromInterval(2,3)]
    
    if (child1_genome1 == 'aA') {
      child1_genome1 = 'Aa'
    }
      
    if (child1_genome2 == 'bB') {
      child1_genome2 = 'Bb'
    }
  
    if (child1_genome1 + child1_genome2 === 'AaBb') {
  document.getElementById("output").innerHTML += `<div class='result'>${child1_genome1 + child1_genome2}</div>`;
  document.getElementById("child image").innerHTML += "<img src = 'https://i.imgur.com/wUeCHKo.png'>" 
    } else {
      document.getElementById("output").innerHTML += `<div class='result'>${child1_genome1 + child1_genome2}</div`;
    }
    x++;
  }
  
  document.getElementById('mgenome').innerHTML = 
    `<div class='mgenome'>${mothers_genome}</div>`;
  document.getElementById('fgenome').innerHTML =
    `<div class='fgenome'>${fathers_genome}</div>`;
  
  if (mothers_genome === 'AaBb') {
    document.getElementById('mother image').innerHTML = "<img src='https://i.imgur.com/jw56xT0.png'>"
  } else if (mothers_genome === 'CcDd') {
      document.getElementById('mother image').innerHTML = "<img src='https://i.imgur.com/EdZkiyu.png'>"
  }

}