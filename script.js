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
  
// mother eye conditionals
  if (mothers_eye_genome === 'aabb') {
  document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c3uq9z37jug421r/aabb-A10.png' width='87.75' height='41.75'>";
  } else if (mothers_eye_genome === 'Aabb') {
  var dice_value = randomIntFromInterval(1,9)
    if (dice_value === 1) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/oz7xck0tp9gv035/Aabb-A17.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/3ly514bf967l92c/Aabb-A20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/8xh1gskwqkd5zzl/Aabb-A30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/cpz34m72kdddaif/Aabb-A40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 5) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/8dbvlmlmecx62d7/Aabb-A50.png' width='87.75' height='41.75'>";
    } else if (dice_value === 6) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5u4f77eclv8tu6f/Aabb-C20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 7) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/o1i54kp7ph999rd/Aabb-C30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 8) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c1vzwf74yqzbauh/Aabb-C40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 9) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/wjmiu4w7z18e7gu/Aabb-A60.png' width='87.75' height='41.75'>";
    }
  } else if (mothers_eye_genome === 'aaBb') {
    var dice_value = randomIntFromInterval(1,4)
    if (dice_value === 1) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/9g8lijmlaeka3kk/aaBb-D10.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ncd0ekh0huk2o72/aaBb-D20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/x04g6mo9rdld01h/aaBb-D30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/v9dwclvomn4zgrw/aaBb-D34.png' width='87.75' height='41.75'>";
    }
  } else if (mothers_eye_genome === 'AaBb') {
    var dice_value = randomIntFromInterval(1,4)
    if (dice_value === 1) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/unluuf2zecmzn5o/AaBb-D37.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tmwatdt4yq29i8c/AaBb-D40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2tmjd9xbc8x3y0p/AaBb-D50.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/kimpy061e9sfs1u/AaBb-D60.png' width='87.75' height='41.75'>";
    }
  } else if (mothers_eye_genome === 'AAbb') {
    document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tr6l01sol5fwyvp/AAbb-Lethal.png' width='87.75' height='41.75'>";
  } else if (mothers_eye_genome === 'aaBB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/vol8vad7yl8h6ur/aaBB-T07.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/7yr0wsip6xztqqt/aaBB-T10.png' width='87.75' height='41.75'>";
    }
  } else if (mothers_eye_genome === 'AaBB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/b4skd8b6ctotzmu/AaBB-T15.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/wjhbqv2de9vo4r5/AaBB-T17.png' width='87.75' height='41.75'>";
    }
  } else if (mothers_eye_genome === 'AABb') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/p4gyrj8kqbx1glj/AABb-T20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/gi00c04bvvd3d5u/AABb-T30.png' width='87.75' height='41.75'>";
    }
  } else if (mothers_eye_genome === 'AABB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/nwt0uyjn7hp302z/AABB-T40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/993ymz2i1jgdbmz/AABB-T50.png' width='87.75' height='41.75'>";
    }
  }
  
// mother hair conditionals
  
  if (mothers_hair_genome === 'EERR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/6y7vl2qdj3y5ons/EERR%20-%20Deep%20Black-2.png' width='87.75' height='41.75'>";
  } else if (mothers_hair_genome === 'EERr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/v3w19t9zi6voluu/EERr%20-%20Deep%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (mothers_hair_genome === 'EErr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/se2nialsly0si6c/EErr%20-%20Deep%20Black.png' width='87.75' height='41.75'>";  
  } else if (mothers_hair_genome === 'EhRr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2v346ep690mo0v8/EhRr%20-%20Faded%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (mothers_hair_genome === 'EhRR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c5pkkx0w5g85kkk/EhRR%20-%20Faded%20Black-2.png' width='87.75' height='41.75'>";  
  } else if (mothers_hair_genome === 'Ehrr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/p7vwzqu4s67lar3/Ehrr%20-%20Faded%20Black.png' width='87.75' height='41.75'>";  
  } else if (mothers_hair_genome === 'EmRr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/n06m9ckcuhizrsq/EmRr%20-%20Dark%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (mothers_hair_genome === 'EmRR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/t37zocvvgtbnd6g/EmRR%20-%20Dark%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'Emrr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/4qz1ey8ofxqifmy/Emrr%20-%20Dark%20Black.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'EoRr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/qipy3k2odvd3pr2/EoRr%20-%20Black-1.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'EoRR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/xfp1sgsosj7y2je/EoRR%20-%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'Eorr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/llx7qcvdk8x56i2/Eorr%20-%20Black.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'EpRr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/95rzr3ksm1zu1mq/EpRr%20-%20Brown%20Black-1.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'EpRR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/u318jvvdbtk5pqs/EpRR%20-%20Brown%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'Eprr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2bue3iocql8adh2/Eprr%20-%20Brown%20Black.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'hhRR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/shy2em6t2zvdkva/hhRR%20-%20Dirty%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'hhRr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/dcox6gnlmii4iig/hhRr%20-%20Dirty%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'hhrr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/hsc63w47iabd26a/hhrr%20-%20Strawberry%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'hpRR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/340ah364t3qfayn/hpRR%20-%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'hpRr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/18vj3b402kelk4m/hpRr%20-%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'hprr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5wt2o6l8atxc76v/hprr%20-%20Ginger%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'mhRr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/mx1fzxpbxsqb8pi/mhRr%20-%20Dark%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'mhRR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/9elzzin7vy23l4i/mhRR%20-%20Dark%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'mhrr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/odrqmw38outlwp6/mhrr%20-%20Dark%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'mmRr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/dphy3c8eevkgplq/mmRr%20-%20Black%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'mmRR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ohbfu3anwgkpdpj/mmRR%20-%20Black%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'mmrr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/kgf11ujellqouas/mmrr%20-%20Black%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'moRr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/mkx74srlibprhf5/moRr%20-%20Deep%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'moRR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tfukwdj1js0rmla/moRR%20-%20Deep%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'morr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ex5v1zvqxmyy3eo/morr%20-%20Deep%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'mpRr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/votdprpjiowwu4q/mpRr%20-%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'mpRR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/k5mx75m10wikvqb/mpRR%20-%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'mprr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/106qbhiuykqg6v3/mprr%20-%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'ohRr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/r0h426huxbacmll/ohRr%20-%20Mousy%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'ohRR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ibonqqqmsul58r6/ohRR%20-%20Mousy%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'ohrr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/bfhz1mw6ogzzmz0/ohrr%20-%20Mousy%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'ooRr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/n96ujt68wi7pssz/ooRr%20-%20Faded%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'ooRR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/1cbb5158bng1x9j/ooRR%20-%20Faded%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'oorr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/eq2owz5shtyvnuy/oorr%20-%20Faded%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'opRr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/xpz8ikel1p96e93/opRr%20-%20Brown%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'opRR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/twsby1eml0kf02m/opRR%20-%20Brown%20Blonde-2.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'oprr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/jxi01797trnbmbo/oprr%20-%20Brown%20Blonde.png' width='87.75' height='41.75'>";
  } else if (mothers_hair_genome === 'ppRR') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/0afbba0gizj01m2/ppRR%20-%20Platinum%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'ppRr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/sd4m7v9iunimuuo/ppRr%20-%20Platinum%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (mothers_hair_genome === 'pprr') {
  document.getElementById("mother hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5vs1rxqb14032es/pprr%20-%20Red.png' width='87.75' height='41.75'>"; 
  } else {
  document.getElementById("mother hair image").innerHTML = `<div class='result'>${child1_hair1 + child1_hair2}</div>`
  }

  // father eye conditionals

	
  if (fathers_eye_genome === 'aabb') {
  document.getElementById("mother eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c3uq9z37jug421r/aabb-A10.png' width='87.75' height='41.75'>";
  } else if (fathers_eye_genome === 'Aabb') {
  var dice_value = randomIntFromInterval(1,9)
    if (dice_value === 1) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/oz7xck0tp9gv035/Aabb-A17.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/3ly514bf967l92c/Aabb-A20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/8xh1gskwqkd5zzl/Aabb-A30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/cpz34m72kdddaif/Aabb-A40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 5) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/8dbvlmlmecx62d7/Aabb-A50.png' width='87.75' height='41.75'>";
    } else if (dice_value === 6) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5u4f77eclv8tu6f/Aabb-C20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 7) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/o1i54kp7ph999rd/Aabb-C30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 8) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c1vzwf74yqzbauh/Aabb-C40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 9) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/wjmiu4w7z18e7gu/Aabb-A60.png' width='87.75' height='41.75'>";
    }
  } else if (fathers_eye_genome === 'aaBb') {
    var dice_value = randomIntFromInterval(1,4)
    if (dice_value === 1) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/9g8lijmlaeka3kk/aaBb-D10.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ncd0ekh0huk2o72/aaBb-D20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/x04g6mo9rdld01h/aaBb-D30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/v9dwclvomn4zgrw/aaBb-D34.png' width='87.75' height='41.75'>";
    }
  } else if (fathers_eye_genome === 'AaBb') {
    var dice_value = randomIntFromInterval(1,4)
    if (dice_value === 1) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/unluuf2zecmzn5o/AaBb-D37.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tmwatdt4yq29i8c/AaBb-D40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2tmjd9xbc8x3y0p/AaBb-D50.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/kimpy061e9sfs1u/AaBb-D60.png' width='87.75' height='41.75'>";
    }
  } else if (fathers_eye_genome === 'AAbb') {
    document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tr6l01sol5fwyvp/AAbb-Lethal.png' width='87.75' height='41.75'>";
  } else if (fathers_eye_genome === 'aaBB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/vol8vad7yl8h6ur/aaBB-T07.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/7yr0wsip6xztqqt/aaBB-T10.png' width='87.75' height='41.75'>";
    }
  } else if (fathers_eye_genome === 'AaBB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/b4skd8b6ctotzmu/AaBB-T15.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/wjhbqv2de9vo4r5/AaBB-T17.png' width='87.75' height='41.75'>";
    }
  } else if (fathers_eye_genome === 'AABb') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/p4gyrj8kqbx1glj/AABb-T20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/gi00c04bvvd3d5u/AABb-T30.png' width='87.75' height='41.75'>";
    }
  } else if (fathers_eye_genome === 'AABB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/nwt0uyjn7hp302z/AABB-T40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("father eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/993ymz2i1jgdbmz/AABB-T50.png' width='87.75' height='41.75'>";
    }
  }
  
// father hair conditionals

  if (fathers_hair_genome === 'EERR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/6y7vl2qdj3y5ons/EERR%20-%20Deep%20Black-2.png' width='87.75' height='41.75'>";
  } else if (fathers_hair_genome === 'EERr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/v3w19t9zi6voluu/EERr%20-%20Deep%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (fathers_hair_genome === 'EErr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/se2nialsly0si6c/EErr%20-%20Deep%20Black.png' width='87.75' height='41.75'>";  
  } else if (fathers_hair_genome === 'EhRr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2v346ep690mo0v8/EhRr%20-%20Faded%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (fathers_hair_genome === 'EhRR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c5pkkx0w5g85kkk/EhRR%20-%20Faded%20Black-2.png' width='87.75' height='41.75'>";  
  } else if (fathers_hair_genome === 'Ehrr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/p7vwzqu4s67lar3/Ehrr%20-%20Faded%20Black.png' width='87.75' height='41.75'>";  
  } else if (fathers_hair_genome === 'EmRr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/n06m9ckcuhizrsq/EmRr%20-%20Dark%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (fathers_hair_genome === 'EmRR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/t37zocvvgtbnd6g/EmRR%20-%20Dark%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'Emrr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/4qz1ey8ofxqifmy/Emrr%20-%20Dark%20Black.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'EoRr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/qipy3k2odvd3pr2/EoRr%20-%20Black-1.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'EoRR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/xfp1sgsosj7y2je/EoRR%20-%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'Eorr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/llx7qcvdk8x56i2/Eorr%20-%20Black.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'EpRr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/95rzr3ksm1zu1mq/EpRr%20-%20Brown%20Black-1.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'EpRR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/u318jvvdbtk5pqs/EpRR%20-%20Brown%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'Eprr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2bue3iocql8adh2/Eprr%20-%20Brown%20Black.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'hhRR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/shy2em6t2zvdkva/hhRR%20-%20Dirty%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'hhRr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/dcox6gnlmii4iig/hhRr%20-%20Dirty%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'hhrr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/hsc63w47iabd26a/hhrr%20-%20Strawberry%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'hpRR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/340ah364t3qfayn/hpRR%20-%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'hpRr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/18vj3b402kelk4m/hpRr%20-%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'hprr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5wt2o6l8atxc76v/hprr%20-%20Ginger%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'mhRr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/mx1fzxpbxsqb8pi/mhRr%20-%20Dark%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'mhRR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/9elzzin7vy23l4i/mhRR%20-%20Dark%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'mhrr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/odrqmw38outlwp6/mhrr%20-%20Dark%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'mmRr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/dphy3c8eevkgplq/mmRr%20-%20Black%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'mmRR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ohbfu3anwgkpdpj/mmRR%20-%20Black%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'mmrr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/kgf11ujellqouas/mmrr%20-%20Black%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'moRr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/mkx74srlibprhf5/moRr%20-%20Deep%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'moRR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tfukwdj1js0rmla/moRR%20-%20Deep%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'morr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ex5v1zvqxmyy3eo/morr%20-%20Deep%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'mpRr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/votdprpjiowwu4q/mpRr%20-%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'mpRR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/k5mx75m10wikvqb/mpRR%20-%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'mprr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/106qbhiuykqg6v3/mprr%20-%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'ohRr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/r0h426huxbacmll/ohRr%20-%20Mousy%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'ohRR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ibonqqqmsul58r6/ohRR%20-%20Mousy%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'ohrr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/bfhz1mw6ogzzmz0/ohrr%20-%20Mousy%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'ooRr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/n96ujt68wi7pssz/ooRr%20-%20Faded%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'ooRR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/1cbb5158bng1x9j/ooRR%20-%20Faded%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'oorr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/eq2owz5shtyvnuy/oorr%20-%20Faded%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'opRr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/xpz8ikel1p96e93/opRr%20-%20Brown%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'opRR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/twsby1eml0kf02m/opRR%20-%20Brown%20Blonde-2.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'oprr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/jxi01797trnbmbo/oprr%20-%20Brown%20Blonde.png' width='87.75' height='41.75'>";
  } else if (fathers_hair_genome === 'ppRR') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/0afbba0gizj01m2/ppRR%20-%20Platinum%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'ppRr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/sd4m7v9iunimuuo/ppRr%20-%20Platinum%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (fathers_hair_genome === 'pprr') {
  document.getElementById("father hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5vs1rxqb14032es/pprr%20-%20Red.png' width='87.75' height='41.75'>"; 
  } else {
  document.getElementById("father hair image").innerHTML = `<div class='result'>${child1_hair1 + child1_hair2}</div>`
  }


// calculate child 1's genomes
  
  var child1_eye1 = mothers_eye_genome2[randomIntFromInterval(0,1)] + fathers_eye_genome2[randomIntFromInterval(0,1)]
  var child1_eye2 = mothers_eye_genome2[randomIntFromInterval(2,3)] + fathers_eye_genome2[randomIntFromInterval(2,3)]
  
  var child1_hair1 = mothers_hair_genome2[randomIntFromInterval(0,1)] + fathers_hair_genome2[randomIntFromInterval(0,1)]
  var child1_hair2 = mothers_hair_genome2[randomIntFromInterval(2,3)] + fathers_hair_genome2[randomIntFromInterval(2,3)]

// child eye hierarchy

  if (child1_eye1 === 'aA') {
    child1_eye1 = 'Aa';
  }
  if (child1_eye2 === 'bB') {
    child1_eye2 = 'Bb';
  }
 
  // child eye conditionals

	
  if (child1_eye1 + child1_eye2 === 'aabb') {
  document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c3uq9z37jug421r/aabb-A10.png' width='87.75' height='41.75'>";
  } else if (child1_eye1 + child1_eye2 === 'Aabb') {
  var dice_value = randomIntFromInterval(1,9)
    if (dice_value === 1) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/oz7xck0tp9gv035/Aabb-A17.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/3ly514bf967l92c/Aabb-A20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/8xh1gskwqkd5zzl/Aabb-A30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/cpz34m72kdddaif/Aabb-A40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 5) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/8dbvlmlmecx62d7/Aabb-A50.png' width='87.75' height='41.75'>";
    } else if (dice_value === 6) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5u4f77eclv8tu6f/Aabb-C20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 7) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/o1i54kp7ph999rd/Aabb-C30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 8) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c1vzwf74yqzbauh/Aabb-C40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 9) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/wjmiu4w7z18e7gu/Aabb-A60.png' width='87.75' height='41.75'>";
    }
  } else if (child1_eye1 + child1_eye2 === 'aaBb') {
    var dice_value = randomIntFromInterval(1,4)
    if (dice_value === 1) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/9g8lijmlaeka3kk/aaBb-D10.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ncd0ekh0huk2o72/aaBb-D20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/x04g6mo9rdld01h/aaBb-D30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/v9dwclvomn4zgrw/aaBb-D34.png' width='87.75' height='41.75'>";
    }
  } else if (child1_eye1 + child1_eye2 === 'AaBb') {
    var dice_value = randomIntFromInterval(1,4)
    if (dice_value === 1) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/unluuf2zecmzn5o/AaBb-D37.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tmwatdt4yq29i8c/AaBb-D40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2tmjd9xbc8x3y0p/AaBb-D50.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/kimpy061e9sfs1u/AaBb-D60.png' width='87.75' height='41.75'>";
    }
  } else if (child1_eye1 + child1_eye2 === 'AAbb') {
    document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tr6l01sol5fwyvp/AAbb-Lethal.png' width='87.75' height='41.75'>";
  } else if (child1_eye1 + child1_eye2 === 'aaBB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/vol8vad7yl8h6ur/aaBB-T07.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/7yr0wsip6xztqqt/aaBB-T10.png' width='87.75' height='41.75'>";
    }
  } else if (child1_eye1 + child1_eye2 === 'AaBB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/b4skd8b6ctotzmu/AaBB-T15.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/wjhbqv2de9vo4r5/AaBB-T17.png' width='87.75' height='41.75'>";
    }
  } else if (child1_eye1 + child1_eye2 === 'AABb') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/p4gyrj8kqbx1glj/AABb-T20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/gi00c04bvvd3d5u/AABb-T30.png' width='87.75' height='41.75'>";
    }
  } else if (child1_eye1 + child1_eye2 === 'AABB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/nwt0uyjn7hp302z/AABB-T40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/993ymz2i1jgdbmz/AABB-T50.png' width='87.75' height='41.75'>";
    }
  }
  
// child hair conditionals
// letter hierarchy
  
  if (child1_hair2 === 'rR') {
    child1_hair2 = 'Rr';
  }
  if (child1_hair1 === 'mE') {
    child1_hair1 = 'Em';
  }
  if (child1_hair1 === 'oE') {
    child1_hair1 = 'Eo';
  }
  if (child1_hair1 === 'hE') {
    child1_hair1 = 'Eh';
  }
  if (child1_hair1 === 'pE') {
    child1_hair1 = 'Ep';
  }
  if (child1_hair1 === 'om') {
    child1_hair1 = 'mo';
  }
  if (child1_hair1 === 'hm') {
    child1_hair1 = 'mh';
  }
  if (child1_hair1 === 'pm') {
    child1_hair1 = 'mp';
  }
  if (child1_hair1 === 'ho') {
    child1_hair1 = 'oh';
  }
  if (child1_hair1 === 'po') {
    child1_hair1 = 'op';
  }
  if (child1_hair1 === 'ph') {
    child1_hair1 = 'hp';
  }
  
// images
  
  if (child1_hair1 + child1_hair2 === 'EERR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/6y7vl2qdj3y5ons/EERR%20-%20Deep%20Black-2.png' width='87.75' height='41.75'>";
  } else if (child1_hair1 + child1_hair2 === 'EERr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/v3w19t9zi6voluu/EERr%20-%20Deep%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (child1_hair1 + child1_hair2 === 'EErr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/se2nialsly0si6c/EErr%20-%20Deep%20Black.png' width='87.75' height='41.75'>";  
  } else if (child1_hair1 + child1_hair2 === 'EhRr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2v346ep690mo0v8/EhRr%20-%20Faded%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (child1_hair1 + child1_hair2 === 'EhRR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c5pkkx0w5g85kkk/EhRR%20-%20Faded%20Black-2.png' width='87.75' height='41.75'>";  
  } else if (child1_hair1 + child1_hair2 === 'Ehrr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/p7vwzqu4s67lar3/Ehrr%20-%20Faded%20Black.png' width='87.75' height='41.75'>";  
  } else if (child1_hair1 + child1_hair2 === 'EmRr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/n06m9ckcuhizrsq/EmRr%20-%20Dark%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (child1_hair1 + child1_hair2 === 'EmRR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/t37zocvvgtbnd6g/EmRR%20-%20Dark%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'Emrr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/4qz1ey8ofxqifmy/Emrr%20-%20Dark%20Black.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'EoRr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/qipy3k2odvd3pr2/EoRr%20-%20Black-1.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'EoRR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/xfp1sgsosj7y2je/EoRR%20-%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'Eorr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/llx7qcvdk8x56i2/Eorr%20-%20Black.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'EpRr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/95rzr3ksm1zu1mq/EpRr%20-%20Brown%20Black-1.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'EpRR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/u318jvvdbtk5pqs/EpRR%20-%20Brown%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'Eprr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2bue3iocql8adh2/Eprr%20-%20Brown%20Black.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'hhRR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/shy2em6t2zvdkva/hhRR%20-%20Dirty%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'hhRr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/dcox6gnlmii4iig/hhRr%20-%20Dirty%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'hhrr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/hsc63w47iabd26a/hhrr%20-%20Strawberry%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'hpRR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/340ah364t3qfayn/hpRR%20-%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'hpRr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/18vj3b402kelk4m/hpRr%20-%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'hprr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5wt2o6l8atxc76v/hprr%20-%20Ginger%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'mhRr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/mx1fzxpbxsqb8pi/mhRr%20-%20Dark%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'mhRR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/9elzzin7vy23l4i/mhRR%20-%20Dark%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'mhrr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/odrqmw38outlwp6/mhrr%20-%20Dark%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'mmRr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/dphy3c8eevkgplq/mmRr%20-%20Black%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'mmRR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ohbfu3anwgkpdpj/mmRR%20-%20Black%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'mmrr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/kgf11ujellqouas/mmrr%20-%20Black%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'moRr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/mkx74srlibprhf5/moRr%20-%20Deep%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'moRR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tfukwdj1js0rmla/moRR%20-%20Deep%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'morr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ex5v1zvqxmyy3eo/morr%20-%20Deep%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'mpRr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/votdprpjiowwu4q/mpRr%20-%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'mpRR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/k5mx75m10wikvqb/mpRR%20-%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'mprr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/106qbhiuykqg6v3/mprr%20-%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'ohRr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/r0h426huxbacmll/ohRr%20-%20Mousy%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'ohRR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ibonqqqmsul58r6/ohRR%20-%20Mousy%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'ohrr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/bfhz1mw6ogzzmz0/ohrr%20-%20Mousy%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'ooRr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/n96ujt68wi7pssz/ooRr%20-%20Faded%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'ooRR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/1cbb5158bng1x9j/ooRR%20-%20Faded%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'oorr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/eq2owz5shtyvnuy/oorr%20-%20Faded%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'opRr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/xpz8ikel1p96e93/opRr%20-%20Brown%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'opRR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/twsby1eml0kf02m/opRR%20-%20Brown%20Blonde-2.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'oprr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/jxi01797trnbmbo/oprr%20-%20Brown%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'ppRR') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/0afbba0gizj01m2/ppRR%20-%20Platinum%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'ppRr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/sd4m7v9iunimuuo/ppRr%20-%20Platinum%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child1_hair1 + child1_hair2 === 'pprr') {
  document.getElementById("child1 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5vs1rxqb14032es/pprr%20-%20Red.png' width='87.75' height='41.75'>"; 
  } else {
  document.getElementById("child1 hair image").innerHTML = `<div class='result'>${child1_hair1 + child1_hair2}</div>`
  }
  
// calculate child 2's genomes

  var child2_eye1 = mothers_eye_genome2[randomIntFromInterval(0,1)] + fathers_eye_genome2[randomIntFromInterval(0,1)]
  var child2_eye2 = mothers_eye_genome2[randomIntFromInterval(2,3)] + fathers_eye_genome2[randomIntFromInterval(2,3)]

  var child2_hair1 = mothers_hair_genome2[randomIntFromInterval(0,1)] + fathers_hair_genome2[randomIntFromInterval(0,1)]
  var child2_hair2 = mothers_hair_genome2[randomIntFromInterval(2,3)] + fathers_hair_genome2[randomIntFromInterval(2,3)]

// child eye hierarchy

  if (child2_eye1 === 'aA') {
    child2_eye1 = 'Aa';
  }
  if (child2_eye2 === 'bB') {
    child2_eye2 = 'Bb';
  }

// child eye conditionals

if (child2_eye1 + child2_eye2 === 'aabb') {
  document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c3uq9z37jug421r/aabb-A10.png' width='87.75' height='41.75'>";
  } else if (child2_eye1 + child2_eye2 === 'Aabb') {
  var dice_value = randomIntFromInterval(1,9)
    if (dice_value === 1) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/oz7xck0tp9gv035/Aabb-A17.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/3ly514bf967l92c/Aabb-A20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/8xh1gskwqkd5zzl/Aabb-A30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/cpz34m72kdddaif/Aabb-A40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 5) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/8dbvlmlmecx62d7/Aabb-A50.png' width='87.75' height='41.75'>";
    } else if (dice_value === 6) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5u4f77eclv8tu6f/Aabb-C20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 7) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/o1i54kp7ph999rd/Aabb-C30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 8) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c1vzwf74yqzbauh/Aabb-C40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 9) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/wjmiu4w7z18e7gu/Aabb-A60.png' width='87.75' height='41.75'>";
    }
  } else if (child2_eye1 + child2_eye2 === 'aaBb') {
    var dice_value = randomIntFromInterval(1,4)
    if (dice_value === 1) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/9g8lijmlaeka3kk/aaBb-D10.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ncd0ekh0huk2o72/aaBb-D20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/x04g6mo9rdld01h/aaBb-D30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/v9dwclvomn4zgrw/aaBb-D34.png' width='87.75' height='41.75'>";
    }
  } else if (child2_eye1 + child2_eye2 === 'AaBb') {
    var dice_value = randomIntFromInterval(1,4)
    if (dice_value === 1) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/unluuf2zecmzn5o/AaBb-D37.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tmwatdt4yq29i8c/AaBb-D40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2tmjd9xbc8x3y0p/AaBb-D50.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/kimpy061e9sfs1u/AaBb-D60.png' width='87.75' height='41.75'>";
    }
  } else if (child2_eye1 + child2_eye2 === 'AAbb') {
    document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tr6l01sol5fwyvp/AAbb-Lethal.png' width='87.75' height='41.75'>";
  } else if (child2_eye1 + child2_eye2 === 'aaBB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/vol8vad7yl8h6ur/aaBB-T07.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/7yr0wsip6xztqqt/aaBB-T10.png' width='87.75' height='41.75'>";
    }
  } else if (child2_eye1 + child2_eye2 === 'AaBB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/b4skd8b6ctotzmu/AaBB-T15.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/wjhbqv2de9vo4r5/AaBB-T17.png' width='87.75' height='41.75'>";
    }
  } else if (child2_eye1 + child2_eye2 === 'AABb') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/p4gyrj8kqbx1glj/AABb-T20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/gi00c04bvvd3d5u/AABb-T30.png' width='87.75' height='41.75'>";
    }
  } else if (child2_eye1 + child2_eye2 === 'AABB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/nwt0uyjn7hp302z/AABB-T40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child2 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/993ymz2i1jgdbmz/AABB-T50.png' width='87.75' height='41.75'>";
    }
  }
  

// child hair conditionals
// letter hierarchy
  
  if (child2_hair2 === 'rR') {
    child2_hair2 = 'Rr';
  }
  if (child2_hair1 === 'mE') {
    child2_hair1 = 'Em';
  }
  if (child2_hair1 === 'oE') {
    child2_hair1 = 'Eo';
  }
  if (child2_hair1 === 'hE') {
    child2_hair1 = 'Eh';
  }
  if (child2_hair1 === 'pE') {
    child2_hair1 = 'Ep';
  }
  if (child2_hair1 === 'om') {
    child2_hair1 = 'mo';
  }
  if (child2_hair1 === 'hm') {
    child2_hair1 = 'mh';
  }
  if (child2_hair1 === 'pm') {
    child2_hair1 = 'mp';
  }
  if (child2_hair1 === 'ho') {
    child2_hair1 = 'oh';
  }
  if (child2_hair1 === 'po') {
    child2_hair1 = 'op';
  }
  if (child2_hair1 === 'ph') {
    child2_hair1 = 'hp';
  }
  
// images
  
  if (child2_hair1 + child2_hair2 === 'EERR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/6y7vl2qdj3y5ons/EERR%20-%20Deep%20Black-2.png' width='87.75' height='41.75'>";
  } else if (child2_hair1 + child2_hair2 === 'EERr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/v3w19t9zi6voluu/EERr%20-%20Deep%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (child2_hair1 + child2_hair2 === 'EErr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/se2nialsly0si6c/EErr%20-%20Deep%20Black.png' width='87.75' height='41.75'>";  
  } else if (child2_hair1 + child2_hair2 === 'EhRr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2v346ep690mo0v8/EhRr%20-%20Faded%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (child2_hair1 + child2_hair2 === 'EhRR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c5pkkx0w5g85kkk/EhRR%20-%20Faded%20Black-2.png' width='87.75' height='41.75'>";  
  } else if (child2_hair1 + child2_hair2 === 'Ehrr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/p7vwzqu4s67lar3/Ehrr%20-%20Faded%20Black.png' width='87.75' height='41.75'>";  
  } else if (child2_hair1 + child2_hair2 === 'EmRr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/n06m9ckcuhizrsq/EmRr%20-%20Dark%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (child2_hair1 + child2_hair2 === 'EmRR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/t37zocvvgtbnd6g/EmRR%20-%20Dark%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'Emrr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/4qz1ey8ofxqifmy/Emrr%20-%20Dark%20Black.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'EoRr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/qipy3k2odvd3pr2/EoRr%20-%20Black-1.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'EoRR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/xfp1sgsosj7y2je/EoRR%20-%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'Eorr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/llx7qcvdk8x56i2/Eorr%20-%20Black.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'EpRr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/95rzr3ksm1zu1mq/EpRr%20-%20Brown%20Black-1.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'EpRR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/u318jvvdbtk5pqs/EpRR%20-%20Brown%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'Eprr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2bue3iocql8adh2/Eprr%20-%20Brown%20Black.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'hhRR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/shy2em6t2zvdkva/hhRR%20-%20Dirty%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'hhRr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/dcox6gnlmii4iig/hhRr%20-%20Dirty%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'hhrr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/hsc63w47iabd26a/hhrr%20-%20Strawberry%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'hpRR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/340ah364t3qfayn/hpRR%20-%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'hpRr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/18vj3b402kelk4m/hpRr%20-%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'hprr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5wt2o6l8atxc76v/hprr%20-%20Ginger%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'mhRr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/mx1fzxpbxsqb8pi/mhRr%20-%20Dark%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'mhRR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/9elzzin7vy23l4i/mhRR%20-%20Dark%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'mhrr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/odrqmw38outlwp6/mhrr%20-%20Dark%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'mmRr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/dphy3c8eevkgplq/mmRr%20-%20Black%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'mmRR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ohbfu3anwgkpdpj/mmRR%20-%20Black%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'mmrr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/kgf11ujellqouas/mmrr%20-%20Black%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'moRr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/mkx74srlibprhf5/moRr%20-%20Deep%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'moRR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tfukwdj1js0rmla/moRR%20-%20Deep%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'morr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ex5v1zvqxmyy3eo/morr%20-%20Deep%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'mpRr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/votdprpjiowwu4q/mpRr%20-%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'mpRR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/k5mx75m10wikvqb/mpRR%20-%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'mprr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/106qbhiuykqg6v3/mprr%20-%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'ohRr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/r0h426huxbacmll/ohRr%20-%20Mousy%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'ohRR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ibonqqqmsul58r6/ohRR%20-%20Mousy%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'ohrr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/bfhz1mw6ogzzmz0/ohrr%20-%20Mousy%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'ooRr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/n96ujt68wi7pssz/ooRr%20-%20Faded%20Brown-1.png' width='87.75' height='41.75'>";
  } else if (child2_hair1 + child2_hair2 === 'ooRR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/1cbb5158bng1x9j/ooRR%20-%20Faded%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'oorr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/eq2owz5shtyvnuy/oorr%20-%20Faded%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'opRr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/xpz8ikel1p96e93/opRr%20-%20Brown%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'opRR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/twsby1eml0kf02m/opRR%20-%20Brown%20Blonde-2.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'oprr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/jxi01797trnbmbo/oprr%20-%20Brown%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'ppRR') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/0afbba0gizj01m2/ppRR%20-%20Platinum%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'ppRr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/sd4m7v9iunimuuo/ppRr%20-%20Platinum%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child2_hair1 + child2_hair2 === 'pprr') {
  document.getElementById("child2 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5vs1rxqb14032es/pprr%20-%20Red.png' width='87.75' height='41.75'>"; 
  } else {
  document.getElementById("child2 hair image").innerHTML = `<div class='result'>${child1_hair1 + child1_hair2}</div>`
  }

// calculate child 3's genomes

  var child3_eye1 = mothers_eye_genome2[randomIntFromInterval(0,1)] + fathers_eye_genome2[randomIntFromInterval(0,1)]
  var child3_eye2 = mothers_eye_genome2[randomIntFromInterval(2,3)] + fathers_eye_genome2[randomIntFromInterval(2,3)]

  var child3_hair1 = mothers_hair_genome2[randomIntFromInterval(0,1)] + fathers_hair_genome2[randomIntFromInterval(0,1)]
  var child3_hair2 = mothers_hair_genome2[randomIntFromInterval(2,3)] + fathers_hair_genome2[randomIntFromInterval(2,3)]

// child eye conditionals letter hierarchy
  
   if (child3_eye1 === 'aA') {
    child3_eye1 = 'Aa';
  }
  if (child3_eye2 === 'bB') {
    child3_eye2 = 'Bb';
  }

// child eye conditionals image

 // child eye conditionals

  if (child3_eye1 + child3_eye2 === 'aabb') {
  document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c3uq9z37jug421r/aabb-A10.png' width='87.75' height='41.75'>";
  } else if (child3_eye1 + child3_eye2 === 'Aabb') {
  var dice_value = randomIntFromInterval(1,9)
    if (dice_value === 1) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/oz7xck0tp9gv035/Aabb-A17.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/3ly514bf967l92c/Aabb-A20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/8xh1gskwqkd5zzl/Aabb-A30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/cpz34m72kdddaif/Aabb-A40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 5) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/8dbvlmlmecx62d7/Aabb-A50.png' width='87.75' height='41.75'>";
    } else if (dice_value === 6) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5u4f77eclv8tu6f/Aabb-C20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 7) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/o1i54kp7ph999rd/Aabb-C30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 8) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c1vzwf74yqzbauh/Aabb-C40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 9) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/wjmiu4w7z18e7gu/Aabb-A60.png' width='87.75' height='41.75'>";
    }
  } else if (child3_eye1 + child3_eye2 === 'aaBb') {
    var dice_value = randomIntFromInterval(1,4)
    if (dice_value === 1) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/9g8lijmlaeka3kk/aaBb-D10.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ncd0ekh0huk2o72/aaBb-D20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/x04g6mo9rdld01h/aaBb-D30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/v9dwclvomn4zgrw/aaBb-D34.png' width='87.75' height='41.75'>";
    }
  } else if (child3_eye1 + child3_eye2 === 'AaBb') {
    var dice_value = randomIntFromInterval(1,4)
    if (dice_value === 1) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/unluuf2zecmzn5o/AaBb-D37.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tmwatdt4yq29i8c/AaBb-D40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2tmjd9xbc8x3y0p/AaBb-D50.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/kimpy061e9sfs1u/AaBb-D60.png' width='87.75' height='41.75'>";
    }
  } else if (child3_eye1 + child3_eye2 === 'AAbb') {
    document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tr6l01sol5fwyvp/AAbb-Lethal.png' width='87.75' height='41.75'>";
  } else if (child3_eye1 + child3_eye2 === 'aaBB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/vol8vad7yl8h6ur/aaBB-T07.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/7yr0wsip6xztqqt/aaBB-T10.png' width='87.75' height='41.75'>";
    }
  } else if (child3_eye1 + child3_eye2 === 'AaBB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/b4skd8b6ctotzmu/AaBB-T15.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/wjhbqv2de9vo4r5/AaBB-T17.png' width='87.75' height='41.75'>";
    }
  } else if (child3_eye1 + child3_eye2 === 'AABb') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/p4gyrj8kqbx1glj/AABb-T20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child1 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/gi00c04bvvd3d5u/AABb-T30.png' width='87.75' height='41.75'>";
    }
  } else if (child1_eye1 + child1_eye2 === 'AABB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/nwt0uyjn7hp302z/AABB-T40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child3 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/993ymz2i1jgdbmz/AABB-T50.png' width='87.75' height='41.75'>";
    }
  }
  
// child hair conditionals
// letter hierarchy
  
  if (child3_hair2 === 'rR') {
    child3_hair2 = 'Rr';
  }
  if (child3_hair1 === 'mE') {
    child3_hair1 = 'Em';
  }
  if (child3_hair1 === 'oE') {
    child3_hair1 = 'Eo';
  }
  if (child3_hair1 === 'hE') {
    child3_hair1 = 'Eh';
  }
  if (child3_hair1 === 'pE') {
    child3_hair1 = 'Ep';
  }
  if (child3_hair1 === 'om') {
    child3_hair1 = 'mo';
  }
  if (child3_hair1 === 'hm') {
    child3_hair1 = 'mh';
  }
  if (child3_hair1 === 'pm') {
    child3_hair1 = 'mp';
  }
  if (child3_hair1 === 'ho') {
    child3_hair1 = 'oh';
  }
  if (child3_hair1 === 'po') {
    child3_hair1 = 'op';
  }
  if (child3_hair1 === 'ph') {
    child3_hair1 = 'hp';
  }
  
// images
  
  if (child3_hair1 + child3_hair2 === 'EERR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/6y7vl2qdj3y5ons/EERR%20-%20Deep%20Black-2.png' width='87.75' height='41.75'>";
  } else if (child3_hair1 + child3_hair2 === 'EERr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/v3w19t9zi6voluu/EERr%20-%20Deep%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (child3_hair1 + child3_hair2 === 'EErr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/se2nialsly0si6c/EErr%20-%20Deep%20Black.png' width='87.75' height='41.75'>";  
  } else if (child3_hair1 + child3_hair2 === 'EhRr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2v346ep690mo0v8/EhRr%20-%20Faded%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (child3_hair1 + child3_hair2 === 'EhRR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c5pkkx0w5g85kkk/EhRR%20-%20Faded%20Black-2.png' width='87.75' height='41.75'>";  
  } else if (child3_hair1 + child3_hair2 === 'Ehrr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/p7vwzqu4s67lar3/Ehrr%20-%20Faded%20Black.png' width='87.75' height='41.75'>";  
  } else if (child3_hair1 + child3_hair2 === 'EmRr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/n06m9ckcuhizrsq/EmRr%20-%20Dark%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (child3_hair1 + child3_hair2 === 'EmRR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/t37zocvvgtbnd6g/EmRR%20-%20Dark%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'Emrr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/4qz1ey8ofxqifmy/Emrr%20-%20Dark%20Black.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'EoRr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/qipy3k2odvd3pr2/EoRr%20-%20Black-1.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'EoRR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/xfp1sgsosj7y2je/EoRR%20-%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'Eorr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/llx7qcvdk8x56i2/Eorr%20-%20Black.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'EpRr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/95rzr3ksm1zu1mq/EpRr%20-%20Brown%20Black-1.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'EpRR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/u318jvvdbtk5pqs/EpRR%20-%20Brown%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'Eprr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2bue3iocql8adh2/Eprr%20-%20Brown%20Black.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'hhRR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/shy2em6t2zvdkva/hhRR%20-%20Dirty%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'hhRr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/dcox6gnlmii4iig/hhRr%20-%20Dirty%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'hhrr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/hsc63w47iabd26a/hhrr%20-%20Strawberry%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'hpRR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/340ah364t3qfayn/hpRR%20-%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'hpRr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/18vj3b402kelk4m/hpRr%20-%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'hprr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5wt2o6l8atxc76v/hprr%20-%20Ginger%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'mhRr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/mx1fzxpbxsqb8pi/mhRr%20-%20Dark%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'mhRR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/9elzzin7vy23l4i/mhRR%20-%20Dark%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'mhrr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/odrqmw38outlwp6/mhrr%20-%20Dark%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'mmRr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/dphy3c8eevkgplq/mmRr%20-%20Black%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'mmRR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ohbfu3anwgkpdpj/mmRR%20-%20Black%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'mmrr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/kgf11ujellqouas/mmrr%20-%20Black%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'moRr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/mkx74srlibprhf5/moRr%20-%20Deep%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'moRR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tfukwdj1js0rmla/moRR%20-%20Deep%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'morr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ex5v1zvqxmyy3eo/morr%20-%20Deep%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'mpRr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/votdprpjiowwu4q/mpRr%20-%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'mpRR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/k5mx75m10wikvqb/mpRR%20-%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'mprr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/106qbhiuykqg6v3/mprr%20-%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'ohRr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/r0h426huxbacmll/ohRr%20-%20Mousy%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'ohRR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ibonqqqmsul58r6/ohRR%20-%20Mousy%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'ohrr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/bfhz1mw6ogzzmz0/ohrr%20-%20Mousy%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'ooRr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/n96ujt68wi7pssz/ooRr%20-%20Faded%20Brown-1.png' width='87.75' height='41.75'>";
  } else if (child3_hair1 + child3_hair2 === 'ooRR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/1cbb5158bng1x9j/ooRR%20-%20Faded%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'oorr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/eq2owz5shtyvnuy/oorr%20-%20Faded%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'opRr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/xpz8ikel1p96e93/opRr%20-%20Brown%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'opRR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/twsby1eml0kf02m/opRR%20-%20Brown%20Blonde-2.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'oprr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/jxi01797trnbmbo/oprr%20-%20Brown%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'ppRR') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/0afbba0gizj01m2/ppRR%20-%20Platinum%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'ppRr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/sd4m7v9iunimuuo/ppRr%20-%20Platinum%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child3_hair1 + child3_hair2 === 'pprr') {
  document.getElementById("child3 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5vs1rxqb14032es/pprr%20-%20Red.png' width='87.75' height='41.75'>"; 
  } else {
  document.getElementById("child3 hair image").innerHTML = `<div class='result'>${child1_hair1 + child1_hair2}</div>`
  }
  

// calculate child 4's genomes

  var child4_eye1 = mothers_eye_genome2[randomIntFromInterval(0,1)] + fathers_eye_genome2[randomIntFromInterval(0,1)]
  var child4_eye2 = mothers_eye_genome2[randomIntFromInterval(2,3)] + fathers_eye_genome2[randomIntFromInterval(2,3)]

  var child4_hair1 = mothers_hair_genome2[randomIntFromInterval(0,1)] + fathers_hair_genome2[randomIntFromInterval(0,1)]
  var child4_hair2 = mothers_hair_genome2[randomIntFromInterval(2,3)] + fathers_hair_genome2[randomIntFromInterval(2,3)]

// child eye hierarchy

  if (child4_eye1 === 'aA') {
    child4_eye1 = 'Aa';
  }
  if (child4_eye2 === 'bB') {
    child4_eye2 = 'Bb';
  }
 
  // child eye conditionals

	
  if (child4_eye1 + child4_eye2 === 'aabb') {
  document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c3uq9z37jug421r/aabb-A10.png' width='87.75' height='41.75'>";
  } else if (child4_eye1 + child4_eye2 === 'Aabb') {
  var dice_value = randomIntFromInterval(1,9)
    if (dice_value === 1) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/oz7xck0tp9gv035/Aabb-A17.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/3ly514bf967l92c/Aabb-A20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/8xh1gskwqkd5zzl/Aabb-A30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/cpz34m72kdddaif/Aabb-A40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 5) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/8dbvlmlmecx62d7/Aabb-A50.png' width='87.75' height='41.75'>";
    } else if (dice_value === 6) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5u4f77eclv8tu6f/Aabb-C20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 7) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/o1i54kp7ph999rd/Aabb-C30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 8) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c1vzwf74yqzbauh/Aabb-C40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 9) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/wjmiu4w7z18e7gu/Aabb-A60.png' width='87.75' height='41.75'>";
    }
  } else if (child4_eye1 + child4_eye2 === 'aaBb') {
    var dice_value = randomIntFromInterval(1,4)
    if (dice_value === 1) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/9g8lijmlaeka3kk/aaBb-D10.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ncd0ekh0huk2o72/aaBb-D20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/x04g6mo9rdld01h/aaBb-D30.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/v9dwclvomn4zgrw/aaBb-D34.png' width='87.75' height='41.75'>";
    }
  } else if (child4_eye1 + child4_eye2 === 'AaBb') {
    var dice_value = randomIntFromInterval(1,4)
    if (dice_value === 1) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/unluuf2zecmzn5o/AaBb-D37.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tmwatdt4yq29i8c/AaBb-D40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 3) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2tmjd9xbc8x3y0p/AaBb-D50.png' width='87.75' height='41.75'>";
    } else if (dice_value === 4) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/kimpy061e9sfs1u/AaBb-D60.png' width='87.75' height='41.75'>";
    }
  } else if (child4_eye1 + child4_eye2 === 'AAbb') {
    document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tr6l01sol5fwyvp/AAbb-Lethal.png' width='87.75' height='41.75'>";
  } else if (child4_eye1 + child4_eye2 === 'aaBB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/vol8vad7yl8h6ur/aaBB-T07.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/7yr0wsip6xztqqt/aaBB-T10.png' width='87.75' height='41.75'>";
    }
  } else if (child4_eye1 + child4_eye2 === 'AaBB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/b4skd8b6ctotzmu/AaBB-T15.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/wjhbqv2de9vo4r5/AaBB-T17.png' width='87.75' height='41.75'>";
    }
  } else if (child4_eye1 + child4_eye2 === 'AABb') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/p4gyrj8kqbx1glj/AABb-T20.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/gi00c04bvvd3d5u/AABb-T30.png' width='87.75' height='41.75'>";
    }
  } else if (child4_eye1 + child4_eye2 === 'AABB') {
    var dice_value = randomIntFromInterval(1,2)
    if (dice_value === 1) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/nwt0uyjn7hp302z/AABB-T40.png' width='87.75' height='41.75'>";
    } else if (dice_value === 2) {
      document.getElementById("child4 eye image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/993ymz2i1jgdbmz/AABB-T50.png' width='87.75' height='41.75'>";
    }
  }
  
// child hair conditionals
// letter hierarchy
  
  if (child4_hair2 === 'rR') {
    child4_hair2 = 'Rr';
  }
  if (child4_hair1 === 'mE') {
    child4_hair1 = 'Em';
  }
  if (child4_hair1 === 'oE') {
    child4_hair1 = 'Eo';
  }
  if (child4_hair1 === 'hE') {
    child4_hair1 = 'Eh';
  }
  if (child4_hair1 === 'pE') {
    child4_hair1 = 'Ep';
  }
  if (child4_hair1 === 'om') {
    child4_hair1 = 'mo';
  }
  if (child4_hair1 === 'hm') {
    child4_hair1 = 'mh';
  }
  if (child4_hair1 === 'pm') {
    child4_hair1 = 'mp';
  }
  if (child4_hair1 === 'ho') {
    child4_hair1 = 'oh';
  }
  if (child4_hair1 === 'po') {
    child4_hair1 = 'op';
  }
  if (child4_hair1 === 'ph') {
    child4_hair1 = 'hp';
  }
  
// images
  
  if (child4_hair1 + child4_hair2 === 'EERR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/6y7vl2qdj3y5ons/EERR%20-%20Deep%20Black-2.png' width='87.75' height='41.75'>";
  } else if (child4_hair1 + child4_hair2 === 'EERr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/v3w19t9zi6voluu/EERr%20-%20Deep%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (child4_hair1 + child4_hair2 === 'EErr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/se2nialsly0si6c/EErr%20-%20Deep%20Black.png' width='87.75' height='41.75'>";  
  } else if (child4_hair1 + child4_hair2 === 'EhRr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2v346ep690mo0v8/EhRr%20-%20Faded%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (child4_hair1 + child4_hair2 === 'EhRR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/c5pkkx0w5g85kkk/EhRR%20-%20Faded%20Black-2.png' width='87.75' height='41.75'>";  
  } else if (child4_hair1 + child4_hair2 === 'Ehrr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/p7vwzqu4s67lar3/Ehrr%20-%20Faded%20Black.png' width='87.75' height='41.75'>";  
  } else if (child4_hair1 + child4_hair2 === 'EmRr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/n06m9ckcuhizrsq/EmRr%20-%20Dark%20Black-1.png' width='87.75' height='41.75'>";  
  } else if (child4_hair1 + child4_hair2 === 'EmRR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/t37zocvvgtbnd6g/EmRR%20-%20Dark%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'Emrr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/4qz1ey8ofxqifmy/Emrr%20-%20Dark%20Black.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'EoRr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/qipy3k2odvd3pr2/EoRr%20-%20Black-1.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'EoRR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/xfp1sgsosj7y2je/EoRR%20-%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'Eorr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/llx7qcvdk8x56i2/Eorr%20-%20Black.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'EpRr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/95rzr3ksm1zu1mq/EpRr%20-%20Brown%20Black-1.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'EpRR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/u318jvvdbtk5pqs/EpRR%20-%20Brown%20Black-2.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'Eprr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/2bue3iocql8adh2/Eprr%20-%20Brown%20Black.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'hhRR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/shy2em6t2zvdkva/hhRR%20-%20Dirty%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'hhRr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/dcox6gnlmii4iig/hhRr%20-%20Dirty%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'hhrr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/hsc63w47iabd26a/hhrr%20-%20Strawberry%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'hpRR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/340ah364t3qfayn/hpRR%20-%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'hpRr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/18vj3b402kelk4m/hpRr%20-%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'hprr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5wt2o6l8atxc76v/hprr%20-%20Ginger%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'mhRr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/mx1fzxpbxsqb8pi/mhRr%20-%20Dark%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'mhRR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/9elzzin7vy23l4i/mhRR%20-%20Dark%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'mhrr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/odrqmw38outlwp6/mhrr%20-%20Dark%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'mmRr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/dphy3c8eevkgplq/mmRr%20-%20Black%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'mmRR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ohbfu3anwgkpdpj/mmRR%20-%20Black%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'mmrr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/kgf11ujellqouas/mmrr%20-%20Black%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'moRr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/mkx74srlibprhf5/moRr%20-%20Deep%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'moRR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/tfukwdj1js0rmla/moRR%20-%20Deep%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'morr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ex5v1zvqxmyy3eo/morr%20-%20Deep%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'mpRr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/votdprpjiowwu4q/mpRr%20-%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'mpRR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/k5mx75m10wikvqb/mpRR%20-%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'mprr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/106qbhiuykqg6v3/mprr%20-%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'ohRr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/r0h426huxbacmll/ohRr%20-%20Mousy%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'ohRR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/ibonqqqmsul58r6/ohRR%20-%20Mousy%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'ohrr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/bfhz1mw6ogzzmz0/ohrr%20-%20Mousy%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'ooRr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/n96ujt68wi7pssz/ooRr%20-%20Faded%20Brown-1.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'ooRR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/1cbb5158bng1x9j/ooRR%20-%20Faded%20Brown-2.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'oorr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/eq2owz5shtyvnuy/oorr%20-%20Faded%20Brown.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'opRr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/xpz8ikel1p96e93/opRr%20-%20Brown%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'opRR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/twsby1eml0kf02m/opRR%20-%20Brown%20Blonde-2.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'oprr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/jxi01797trnbmbo/oprr%20-%20Brown%20Blonde.png' width='87.75' height='41.75'>";
  } else if (child4_hair1 + child4_hair2 === 'ppRR') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/0afbba0gizj01m2/ppRR%20-%20Platinum%20Blonde-1.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'ppRr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/sd4m7v9iunimuuo/ppRr%20-%20Platinum%20Blonde.png' width='87.75' height='41.75'>"; 
  } else if (child4_hair1 + child4_hair2 === 'pprr') {
  document.getElementById("child4 hair image").innerHTML = "<img src='https://dl.dropboxusercontent.com/s/5vs1rxqb14032es/pprr%20-%20Red.png' width='87.75' height='41.75'>"; 
  } else {
  document.getElementById("child4 hair image").innerHTML = `<div class='result'>${child1_hair1 + child1_hair2}</div>`
  }
}

