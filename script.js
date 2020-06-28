function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
  }

function punnettsquare() {

// initialize parents' genomes

  var x = 0
  var mothers_eye_genome = document.getElementById("mothers eye genome").value;
  var fathers_eye_genome = document.getElementById("fathers eye genome").value;
  var mothers_hair_genome = document.getElementById("mothers hair genome").value;
  var fathers_hair_genome = document.getElementById("fathers hair genome").value;

  mothers_eye_genome = mothers_eye_genome.toString()
  fathers_eye_genome = fathers_eye_genome.toString()
  mothers_hair_genome = mothers_hair_genome.toString()
  fathers_hair_genome = fathers_hair_genome.toString()
  var mothers_eye_genome2 = mothers_eye_genome.split('')
  var fathers_eye_genome2 = fathers_eye_genome.split('')
  var mothers_hair_genome2 = mothers_hair_genome.split('')
  var fathers_hair_genome2 = fathers_hair_genome.split('')

// calculate child 1's genomes
  
  var child1_eye1 = mothers_eye_genome2[randomIntFromInterval(0,1)] + fathers_eye_genome2[randomIntFromInterval(0,1)]
  var child1_eye2 = mothers_eye_genome2[randomIntFromInterval(2,3)] + fathers_eye_genome2[randomIntFromInterval(2,3)]
  
  if (child1_eye1 === 'aA') {
    child1_eye1 = 'Aa';
  }
  
  if (child1_eye2 === 'bB') {
    child1_eye2 = 'Bb';
  }
  
  var child1_hair1 = mothers_hair_genome2[randomIntFromInterval(0,1)] + fathers_hair_genome2[randomIntFromInterval(0,1)]
  var child1_hair2 = mothers_hair_genome2[randomIntFromInterval(2,3)] + fathers_hair_genome2[randomIntFromInterval(2,3)]
  
  if (child1_hair1 === 'cC') {
    child1_hair1 = 'cC';
  }
  
  if (child1_hair2 === 'dD') {
    child1_hair2 = 'Dd';
  }
  
  // image conditionals go here
  
  document.getElementById("child1 eye image").innerHTML = `<div class='result'>${child1_eye1 + child1_eye2}</div>`;
  
  
  document.getElementById("child1 hair image").innerHTML = `<div class='result'>${child1_hair1 + child1_hair2}</div>`

// calculate child 2's genomes

  var child2_eye1 = mothers_eye_genome2[randomIntFromInterval(0,1)] + fathers_eye_genome2[randomIntFromInterval(0,1)]
  var child2_eye2 = mothers_eye_genome2[randomIntFromInterval(2,3)] + fathers_eye_genome2[randomIntFromInterval(2,3)]
  
  if (child2_eye1 === 'aA') {
    child2_eye1 = 'Aa';
  }
  
  if (child2_eye2 === 'bB') {
    child2_eye2 = 'Bb';
  }
  
  var child2_hair1 = mothers_hair_genome2[randomIntFromInterval(0,1)] + fathers_hair_genome2[randomIntFromInterval(0,1)]
  var child2_hair2 = mothers_hair_genome2[randomIntFromInterval(2,3)] + fathers_hair_genome2[randomIntFromInterval(2,3)]
  
  if (child2_hair1 === 'cC') {
    child2_hair1 = 'cC';
  }
  
  if (child2_hair2 === 'dD') {
    child2_hair2 = 'Dd';
  }
  
  // image conditionals go here
  
  document.getElementById("child2 eye image").innerHTML = `<div class='result'>${child2_eye1 + child2_eye2}</div>`;
  
  
  document.getElementById("child2 hair image").innerHTML = `<div class='result'>${child2_hair1 + child2_hair2}</div>`

// calculate child 3's genomes

  var child3_eye1 = mothers_eye_genome2[randomIntFromInterval(0,1)] + fathers_eye_genome2[randomIntFromInterval(0,1)]
  var child3_eye2 = mothers_eye_genome2[randomIntFromInterval(2,3)] + fathers_eye_genome2[randomIntFromInterval(2,3)]
  
  if (child3_eye1 === 'aA') {
    child3_eye1 = 'Aa';
  }
  
  if (child3_eye2 === 'bB') {
    child3_eye2 = 'Bb';
  }
  
  var child3_hair1 = mothers_hair_genome2[randomIntFromInterval(0,1)] + fathers_hair_genome2[randomIntFromInterval(0,1)]
  var child3_hair2 = mothers_hair_genome2[randomIntFromInterval(2,3)] + fathers_hair_genome2[randomIntFromInterval(2,3)]
  
  if (child3_hair1 === 'cC') {
    child3_hair1 = 'cC';
  }
  
  if (child3_hair2 === 'dD') {
    child3_hair2 = 'Dd';
  }
  
  // image conditionals go here
  
  document.getElementById("child3 eye image").innerHTML = `<div class='result'>${child3_eye1 + child3_eye2}</div>`;
  
  
  document.getElementById("child3 hair image").innerHTML = `<div class='result'>${child3_hair1 + child3_hair2}</div>`

// calculate child 4's genomes

var child4_eye1 = mothers_eye_genome2[randomIntFromInterval(0,1)] + fathers_eye_genome2[randomIntFromInterval(0,1)]
  var child4_eye2 = mothers_eye_genome2[randomIntFromInterval(2,3)] + fathers_eye_genome2[randomIntFromInterval(2,3)]
  
  if (child4_eye1 === 'aA') {
    child4_eye1 = 'Aa';
  }
  
  if (child4_eye2 === 'bB') {
    child4_eye2 = 'Bb';
  }
  
  var child4_hair1 = mothers_hair_genome2[randomIntFromInterval(0,1)] + fathers_hair_genome2[randomIntFromInterval(0,1)]
  var child4_hair2 = mothers_hair_genome2[randomIntFromInterval(2,3)] + fathers_hair_genome2[randomIntFromInterval(2,3)]
  
  if (child4_hair1 === 'cC') {
    child4_hair1 = 'cC';
  }
  
  if (child4_hair2 === 'dD') {
    child4_hair2 = 'Dd';
  }
  
  // image conditionals go here
  
  document.getElementById("child4 eye image").innerHTML = `<div class='result'>${child4_eye1 + child4_eye2}</div>`;
  
  
  document.getElementById("child4 hair image").innerHTML = `<div class='result'>${child4_hair1 + child4_hair2}</div>`

// parents' genome images
 
  document.getElementById('mother eye image').innerHTML = 
    `<div class='megenome'>${mothers_eye_genome}</div>`;
  document.getElementById('mother hair image').innerHTML = `<div class='mhgenome'>${mothers_hair_genome}</div>`;
  document.getElementById('father eye image').innerHTML =
    `<div class='fegenome'>${fathers_eye_genome}</div>`;
  document.getElementById('father hair image').innerHTML = `<div class-'fhgenome'>${fathers_hair_genome}</div>`;
  

}