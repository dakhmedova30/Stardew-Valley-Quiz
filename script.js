/*Add your JavaScript here*/
var numQuestions = 0;
var nums = new Array(12);
var result = document.getElementById("result");
var rand = 0;
var additions = "";

var alex = 0;
var elliott = 0;
var harvey = 0;
var sam = 0;
var sebastian = 0;
var shane = 0;
var abigail = 0;
var emily = 0;
var haley = 0;
var leah = 0;
var maru = 0;
var penny = 0;

function returnVals() {
  console.log("alex: " + alex);
  console.log("elliott: " + elliott);
  console.log("harvey: " + harvey);
  console.log("sam: " + sam);
  console.log("sebastian: " + sebastian);
  console.log("shane: " + shane);
  console.log("abigail: " + abigail);
  console.log("emily: " + emily);
  console.log("haley: " + haley);
  console.log("leah: " + leah);
  console.log("maru: " + maru);
  console.log("penny: " + penny);
  console.log("\n");
}

function _alex() {
  alex += 10;
  returnVals();
}
function _elliott() {
  elliott += 10;
  returnVals();
}
function _harvey() {
  harvey += 10;
  returnVals();
}
function _sam() {
  sam += 10;
  returnVals();
}
function _sebastian() {
  sebastian += 10;
  returnVals();
}
function _shane() {
  shane += 10;
  returnVals();
}
function _abigail() {
  abigail += 10;
  returnVals();
}
function _emily() {
  emily += 10;
  returnVals();
}
function _haley() {
  haley += 10;
  returnVals();
}
function _leah() {
  leah += 10;
  returnVals();
}
function _maru() {
  maru += 10;
  returnVals();
}
function _penny() {
  penny += 10;
  returnVals();
}
function _all() {
  alex += 10;
  elliott += 10;
  harvey += 10;
  sam += 10;
  sebastian += 10;
  shane += 10;
  abigail += 10;
  emily += 10;
  haley += 10;
  leah += 10;
  maru += 10;
  penny += 10;
  returnVals();
}

function alexF() {
  alex -= 5;
  returnVals();
}
function elliottF() {
  elliott -= 5;
  returnVals();
}
function harveyF() {
  harvey -= 5;
  returnVals();
}
function samF() {
  sam -= 5;
  returnVals();
}
function sebastianF() {
  sebastian -= 5;
  returnVals();
}
function shaneF() {
  shane -= 5;
  returnVals();
}
function abigailF() {
  abigail -= 5;
  returnVals();
}
function emilyF() {
  emily -= 5;
  returnVals();
}
function haleyF() {
  haley -= 5;
  returnVals();
}
function leahF() {
  leah -= 5;
  returnVals();
}
function maruF() {
  maru -= 5;
  returnVals();
}
function pennyF() {
  penny -= 5;
  returnVals();
}

function enable_all() {
  document.getElementById("red").disabled = false;
  document.getElementById("orange").disabled = false;
  document.getElementById("yellow").disabled = false;
  document.getElementById("green").disabled = false;
  document.getElementById("blue").disabled = false;
  document.getElementById("purple").disabled = false;
  document.getElementById("pink").disabled = false;
  document.getElementById("black").disabled = false;
  document.getElementById("classical").disabled = false;
  document.getElementById("pop").disabled = false;
  document.getElementById("jazz").disabled = false;
  document.getElementById("rock").disabled = false;
  document.getElementById("heavymetal").disabled = false;
  document.getElementById("edm").disabled = false;
  document.getElementById("indie").disabled = false;
  document.getElementById("workout").disabled = false;
  document.getElementById("sports").disabled = false;
  document.getElementById("instrument").disabled = false;
  document.getElementById("music").disabled = false;
  document.getElementById("videogames").disabled = false;
  document.getElementById("writing").disabled = false;
  document.getElementById("pet").disabled = false;
  document.getElementById("outside").disabled = false;
  document.getElementById("drawing").disabled = false;
  document.getElementById("photography").disabled = false;
  document.getElementById("sewing").disabled = false;
  document.getElementById("learn").disabled = false;
  document.getElementById("communityservice").disabled = false;
  document.getElementById("coffee").disabled = false;
  document.getElementById("tea").disabled = false;
  document.getElementById("milk").disabled = false;
  document.getElementById("alcohol").disabled = false;
  document.getElementById("soda").disabled = false;
  document.getElementById("energy").disabled = false;
  document.getElementById("pizza").disabled = false;
  document.getElementById("burger").disabled = false;
  document.getElementById("salad").disabled = false;
  document.getElementById("seafood").disabled = false;
  document.getElementById("spicyfood").disabled = false;
  document.getElementById("cake").disabled = false;
  document.getElementById("muffin").disabled = false;
  document.getElementById("doughnuts").disabled = false;
  document.getElementById("lollipop").disabled = false;
  document.getElementById("rockcandy").disabled = false;
  document.getElementById("cottagecore").disabled = false;
  document.getElementById("royalcore").disabled = false;
  document.getElementById("lightacademia").disabled = false;
  document.getElementById("darkacademia").disabled = false;
  document.getElementById("grunge").disabled = false;
  document.getElementById("streetwear").disabled = false;
  document.getElementById("indiee").disabled = false;
  document.getElementById("introvert").disabled = false;
  document.getElementById("extrovert").disabled = false;
  document.getElementById("ambivert").disabled = false;
  document.getElementById("spring").disabled = false;
  document.getElementById("summer").disabled = false;
  document.getElementById("fall").disabled = false;
  document.getElementById("winter").disabled = false;
  document.getElementById("alex").disabled = false;
  document.getElementById("elliott").disabled = false;
  document.getElementById("harvey").disabled = false;
  document.getElementById("sam").disabled = false;
  document.getElementById("sebastian").disabled = false;
  document.getElementById("shane").disabled = false;
  document.getElementById("abigail").disabled = false;
  document.getElementById("emily").disabled = false;
  document.getElementById("haley").disabled = false;
  document.getElementById("leah").disabled = false;
  document.getElementById("maru").disabled = false;
  document.getElementById("penny").disabled = false;
  document.getElementById("idontknow").disabled = false;
}

function one_disable() {
  document.getElementById("red").disabled = true;
  document.getElementById("orange").disabled = true;
  document.getElementById("yellow").disabled = true;
  document.getElementById("green").disabled = true;
  document.getElementById("blue").disabled = true;
  document.getElementById("purple").disabled = true;
  document.getElementById("pink").disabled = true;
  document.getElementById("black").disabled = true;
  numQuestions += 1;
  console.log(numQuestions);
  twoB.scrollIntoView();
  //scrollTo(0, 1800);
  if (numQuestions == 10) {
    displayResult();
  }
}
function two_disable() {
  document.getElementById("classical").disabled = true;
  document.getElementById("pop").disabled = true;
  document.getElementById("jazz").disabled = true;
  document.getElementById("rock").disabled = true;
  document.getElementById("heavymetal").disabled = true;
  document.getElementById("edm").disabled = true;
  document.getElementById("indie").disabled = true;
  document.getElementById("workout").disabled = true;
  numQuestions += 1;
  console.log(numQuestions);
  threeB.scrollIntoView();
  //scrollTo(0, 3030);
  if (numQuestions == 10) {
    displayResult();
  }
}
function three_disable() {
  document.getElementById("sports").disabled = true;
  document.getElementById("instrument").disabled = true;
  document.getElementById("music").disabled = true;
  document.getElementById("videogames").disabled = true;
  document.getElementById("writing").disabled = true;
  document.getElementById("pet").disabled = true;
  document.getElementById("outside").disabled = true;
  document.getElementById("drawing").disabled = true;
  document.getElementById("photography").disabled = true;
  document.getElementById("sewing").disabled = true;
  document.getElementById("learn").disabled = true;
  document.getElementById("communityservice").disabled = true;
  numQuestions += 1;
  console.log(numQuestions);
  fourB.scrollIntoView();
  //scrollTo(0, 4570);
  if (numQuestions == 10) {
    displayResult();
  }
}
function four_disable() {
  document.getElementById("coffee").disabled = true;
  document.getElementById("tea").disabled = true;
  document.getElementById("milk").disabled = true;
  document.getElementById("alcohol").disabled = true;
  document.getElementById("soda").disabled = true;
  document.getElementById("energy").disabled = true;
  numQuestions += 1;
  console.log(numQuestions);
  fiveB.scrollIntoView();
  //scrollTo(0, 5505);
  if (numQuestions == 10) {
    displayResult();
  }
}
function five_disable() {
  document.getElementById("pizza").disabled = true;
  document.getElementById("burger").disabled = true;
  document.getElementById("salad").disabled = true;
  document.getElementById("seafood").disabled = true;
  document.getElementById("spicyfood").disabled = true;
  numQuestions += 1;
  console.log(numQuestions);
  sixB.scrollIntoView();
  //scrollTo(0, 6380);
  if (numQuestions == 10) {
    displayResult();
  }
}
function six_disable() {
  document.getElementById("cake").disabled = true;
  document.getElementById("muffin").disabled = true;
  document.getElementById("doughnuts").disabled = true;
  document.getElementById("lollipop").disabled = true;
  document.getElementById("rockcandy").disabled = true;
  numQuestions += 1;
  console.log(numQuestions);
  sevenB.scrollIntoView();
  //scrollTo(0, 7100);
  if (numQuestions == 10) {
    displayResult();
  }
}
function seven_disable() {
  document.getElementById("cottagecore").disabled = true;
  document.getElementById("royalcore").disabled = true;
  document.getElementById("lightacademia").disabled = true;
  document.getElementById("darkacademia").disabled = true;
  document.getElementById("grunge").disabled = true;
  document.getElementById("streetwear").disabled = true;
  document.getElementById("indiee").disabled = true;
  numQuestions += 1;
  console.log(numQuestions);
  eightB.scrollIntoView();
  //scrollTo(0, 8005);
  if (numQuestions == 10) {
    displayResult();
  }
}
function eight_disable() {
  document.getElementById("introvert").disabled = true;
  document.getElementById("extrovert").disabled = true;
  document.getElementById("ambivert").disabled = true;
  numQuestions += 1;
  console.log(numQuestions);
  nineB.scrollIntoView();
  //scrollTo(0, 8700);
  if (numQuestions == 10) {
    displayResult();
  }
}
function nine_disable() {
  document.getElementById("spring").disabled = true;
  document.getElementById("summer").disabled = true;
  document.getElementById("fall").disabled = true;
  document.getElementById("winter").disabled = true;
  numQuestions += 1;
  console.log(numQuestions);
  tenB.scrollIntoView();
  //scrollTo(0, 9420);
  if (numQuestions == 10) {
    displayResult();
  }
}
function ten_disable() {
  document.getElementById("alex").disabled = true;
  document.getElementById("elliott").disabled = true;
  document.getElementById("harvey").disabled = true;
  document.getElementById("sam").disabled = true;
  document.getElementById("sebastian").disabled = true;
  document.getElementById("shane").disabled = true;
  document.getElementById("abigail").disabled = true;
  document.getElementById("emily").disabled = true;
  document.getElementById("haley").disabled = true;
  document.getElementById("leah").disabled = true;
  document.getElementById("maru").disabled = true;
  document.getElementById("penny").disabled = true;
  document.getElementById("idontknow").disabled = true;
  numQuestions += 1;
  console.log(numQuestions);
  displayB.scrollIntoView();
  //scrollTo(0, 11000);
  if (numQuestions == 10) {
    displayResult();
  }
}

var oneB = document.getElementById("question_one");
var twoB = document.getElementById("question_two");
var threeB = document.getElementById("question_three");
var fourB = document.getElementById("question_four");
var fiveB = document.getElementById("question_five");
var sixB = document.getElementById("question_six");
var sevenB = document.getElementById("question_seven");
var eightB = document.getElementById("question_eight");
var nineB = document.getElementById("question_nine");
var tenB = document.getElementById("question_ten");
var displayB = document.getElementById("display_results");


var submitB = document.getElementById("submit");

function submit_disable() {
  document.getElementById("submit").disabled = true;
}

function displayResult() {
  submitB.addEventListener('click', endGame);
}


function endGame() {
  if (numQuestions == 10) {
    console.log("donezo");
    nums[0] = alex;
    nums[1] = elliott;
    nums[2] = harvey;
    nums[3] = sam;
    nums[4] = sebastian;
    nums[5] = shane;
    nums[6] = abigail;
    nums[7] = emily;
    nums[8] = haley;
    nums[9] = leah;
    nums[10] = maru;
    nums[11] = penny;

    var max = -Infinity;
    var maxIndices = [];
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] == max) {
        maxIndices.push(i);
      } else if (nums[i] > max) {
        maxIndices = [i];
        max = nums[i];
      }
    }
    
    console.log(maxIndices);
    console.log(maxIndices[0]);
    console.log(maxIndices[1]);
    console.log(maxIndices[2]);
    if (maxIndices.length > 1) {
      var temp = Math.round(Math.random() * maxIndices.length);
      rand = maxIndices[temp];
      console.log("random:" + rand);
      maxIndices.splice(temp, 1);
      additions = "You also share similarities with ";
      var total = maxIndices.length;
      for (var i = 0; i <= maxIndices.length; i++) {
        if (maxIndices[0] == 0) {
          additions += "Alex";
        }
        if (maxIndices[0] == 1) {
          additions += "Elliott";
        }
        if (maxIndices[0] == 2) {
          additions += "Harvey";
        }
        if (maxIndices[0] == 3) {
          additions += "Sam";
        }
        if (maxIndices[0] == 4) {
          additions += "Sebastian";
        }
        if (maxIndices[0] == 5) {
          additions += "Shane";
        }
        if (maxIndices[0] == 6) {
          additions += "Abigail";
        }
        if (maxIndices[0] == 7) {
          additions += "Emily";
        }
        if (maxIndices[0] == 8) {
          additions += "Haley";
        }
        if (maxIndices[0] == 9) {
          additions += "Leah";
        }
        if (maxIndices[0] == 10) {
          additions += "Maru";
        }
        if (maxIndices[0] == 11) {
          additions += "Penny";
        }
        console.log(maxIndices.length);
        if (maxIndices.length == 1) {
          additions += ".";
          console.log("a:" + maxIndices.length);
          break;
        }
        else if (maxIndices.length == 2 && total > 1) {
          additions += " and ";
          console.log("b:" + maxIndices.length);
        }
        else {
          additions += ", ";
          console.log("c:" + maxIndices.length);
        }
        maxIndices.splice(i, 1);
        console.log(maxIndices.length);
      }
    } else { rand = maxIndices[0]; }
    
    if (rand == 0) {
      result.innerHTML = "You are Alex!";
      pic.src="10-Character/Alex.png";
      pic.alt="A male with short brown hair and a green jacket with a yellow collar.";
      description.innerHTML = "Alex loves sports and hanging out at the beach. He is quite arrogant and brags to everyone that he is going to be a professional athlete. Is his cockiness just a facade to mask his crushing self-doubt? Is he using his sports dream to fill the void left by the disappearance of his parents? Or is he just a brazen youth trying to 'look cool?";
    }
    else if (rand == 1) {
      result.innerHTML = "You are Elliott!";
      pic.src="10-Character/Elliott.png";
      pic.alt="A male with long orange hair and a red suit with a green tie.";
      description.innerHTML = "Elliott lives alone in a cabin on the beach. He is a writer who dreams of one day writing a magnificent novel. He is a sentimental “romantic” with a tendency to go off onto flowery, poetic tangents. When he can afford it, he enjoys a strong beverage at the Stardrop Saloon. Could a humble farmer such as yourself be the inspiration Elliott is looking for? There’s only one way to find out...";
    }
    else if (rand == 2) {
      result.innerHTML = "You are Harvey!";
      pic.src="10-Character/Harvey.png";
      pic.alt="A male with short brown hair, a mustache, black glasses, and a green suit with a red tie.";
      description.innerHTML = "Harvey is the town doctor. He’s a little old for a bachelor, but he has a kind heart and a respected position in the community. He lives in a small apartment above the medical clinic, but spends most of his time working. You can sense a sadness about him, as if there’s something he’s not telling you...";
    }
    else if (rand == 3) {
      result.innerHTML = "You are Sam!";
      pic.src="10-Character/Sam.png";
      pic.alt="A male with medium length blond hair and green headphones with a blue jacket.";
      description.innerHTML = "Sam is an outgoing, friendly guy who is brimming with youthful energy. He plays guitar and drums, and wants to start a band with Sebastian as soon as he has enough songs together. However, he does have a habit of starting ambitious projects and not finishing them. Sam is a little stressed about the impending return of his father, who has been away for years due to his line of work.";
    }
    else if (rand == 4) {
      result.innerHTML = "You are Sebastian!";
      pic.src="10-Character/Sebastian.png";
      pic.alt="A male with medium length black hair and a black hoodie.";
      description.innerHTML = "Sebastian is a rebellious loner who lives in his parents’ basement. He is Maru’s older half-brother, and feels like his sister gets all the attention and adoration, while he is left to rot in the dark. He tends to get deeply absorbed in his work, computer games, comic books, sci-fi novels, and will sometimes spend great lengths of time pursuing these hobbies alone in his room. He can be a bit unfriendly to people he doesn’t know. Could a charming new farmer cultivate the wasteland of his heart? Who knows?";
    }
    else if (rand == 5) {
      result.innerHTML = "You are Shane!";
      pic.src="10-Character/Shane.png";
      pic.alt="A male with short black hair, a stubble, and a blue sweater over a green shirt.";
      description.innerHTML = "Shane lives at his aunt Marnie's ranch with his goddaughter Jas. He works at JojaMart and frequently spends his evenings in The Stardrop Saloon. “I'm renting my room from Marnie at a really good price. It's small but I can't complain. If I could reset my life maybe I'd start a chicken farm. Only free-range eggs of course.” Shane also is often rude and unhappy, and suffers from depression and alcohol dependence. However, his attitude might start to change if you choose to befriend him...";
    }
    else if (rand == 6) {
      result.innerHTML = "You are Abigail!";
      pic.src="10-Character/Abigail.png";
      pic.alt="A female with medium length purple hair, a black collar, and a blue jacket over a gray shirt.";
      description.innerHTML = "Abigail lives at the general store with her parents. She sometimes fights with her mom, who worries about Abigail’s “alternative lifestyle”. Her mom has the following to say: “I wish Abby would dress more appropriately and stop dyeing her hair blue. She has such a wonderful natural hair color, just like her grandmother did. Oh, and I wish she’d find some wholesome interests instead of this occult nonsense she’s into.” You might find Abigail alone in the graveyard, or maybe out in a rainstorm looking for frogs.";
    }
    else if (rand == 7) {
      result.innerHTML = "You are Emily!";
      pic.src="10-Character/Emily.png";
      pic.alt="A female with short blue hair and a red dress shirt.";
      description.innerHTML = "Emily lives with her sister Haley, and together they care for their parents' home, who have been traveling the world for the past two years. She works with Gus, who employs her part-time at the saloon. “I'm just working at Gus' to make ends meet... but my real passion is tailoring. I made these clothes from scratch.” Emily loves to make her own clothing, but fabric can be difficult to come by in town. Maybe gifting her some wool or cloth wouldn't hurt...";
    }
    else if (rand == 8) {
      result.innerHTML = "You are Haley!";
      pic.src="10-Character/Haley.png";
      pic.alt="A female with long blond hair, colorful bracelets, a blue necklace, and a light blue shirt.";
      description.innerHTML = "Being wealthy and popular throughout high school has made Haley a little conceited and self-centered. She has a tendency to judge people for superficial reasons. But is it too late for her to discover a deeper meaning to life? Is there a fun, open-minded young woman hidden within that candy-coated shell?";
    }
    else if (rand == 9) {
      result.innerHTML = "You are Leah!";
      pic.src="10-Character/Leah.png";
      pic.alt="A female with long orange hair in a braid, freckles, and a green jacket over a purple shirt.";
      description.innerHTML = "Leah lives alone in a small cabin just outside of town. She loves to spend time outside, foraging for a wild meal or simply enjoying the gifts of the season. She’s a talented artist with a large portfolio of work... yet she’s too nervous to display it to the public. Maybe you can give her a little confidence boost?";
    }
    else if (rand == 10) {
      result.innerHTML = "You are Maru!";
      pic.src="10-Character/Maru.png";
      pic.alt="A female with short brown hair, black glasses, and light blue overalls over a purple shirt.";
      description.innerHTML = "Growing up with a carpenter and a scientist for parents, Maru acquired a passion for creating gadgets at a young age. When she isn’t in her room, fiddling with tools and machinery, she sometimes does odd jobs at the local clinic. Friendly, outgoing, and ambitious, Maru would be quite a lucky match for a lowly newcomer such as yourself... Can you win her heart, or will she slip through your fingers and disappear from your life forever?";
    }
    else if (rand == 11) {
      result.innerHTML = "You are Penny!";
      pic.src="10-Character/Penny.png";
      pic.alt="A female with medium length orange hair in two buns and a yellow dress shirt.";
      description.innerHTML = "Penny lives with her mom, Pam, in a little trailer by the river. While Pam is out carousing at the saloon, Penny quietly tends to her chores in the dim, stuffy room she is forced to call home. She is shy and modest, without any grand ambitions for life other than settling in and starting a family. She likes to cook (although her skills are questionable) and read books from the local library.";
    }
    adding.innerHTML = additions;
    result.scrollIntoView();
    //scrollTo(0, 11250);
  }
}

var adding = document.getElementById("adding");

var restartB = document.getElementById("restart");
restartB.addEventListener('click', reset);

function reset() {
  numQuestions = 0;
  nums = new Array(12);
  rand = 0;
  
  alex = 0;
  elliott = 0;
  harvey = 0;
  sam = 0;
  sebastian = 0;
  shane = 0;
  abigail = 0;
  emily = 0;
  haley = 0;
  leah = 0;
  maru = 0;
  penny = 0;

  result.innerHTML = "";
  pic.src = "";
  pic.alt = "";
  description.innerHTML = "";

  enable_all();

  oneB.scrollIntoView();
  //scrollTo(0,0);
}


var redB = document.getElementById("red");
var orangeB = document.getElementById("orange");
var yellowB = document.getElementById("yellow");
var greenB = document.getElementById("green");
var blueB = document.getElementById("blue");
var purpleB = document.getElementById("purple");
var pinkB = document.getElementById("pink");
var blackB = document.getElementById("black");

redB.addEventListener('click', _elliott);
orangeB.addEventListener('click', returnVals);
yellowB.addEventListener('click', _sam);
yellowB.addEventListener('click', _penny);
greenB.addEventListener('click', _harvey);
greenB.addEventListener('click', _leah);
blueB.addEventListener('click', _alex);
blueB.addEventListener('click', _shane);
blueB.addEventListener('click', _emily);
purpleB.addEventListener('click', _abigail);
purpleB.addEventListener('click', _maru);
pinkB.addEventListener('click', _haley);
blackB.addEventListener('click', _sebastian);


var classicalB = document.getElementById("classical");
var popB = document.getElementById("pop");
var jazzB = document.getElementById("jazz");
var rockB = document.getElementById("rock");
var heavymetalB = document.getElementById("heavymetal");
var edmB = document.getElementById("edm");
var indieB = document.getElementById("indie");
var workoutB = document.getElementById("workout");

classicalB.addEventListener('click', _elliott);
popB.addEventListener('click', _haley);
popB.addEventListener('click', _penny);
jazzB.addEventListener('click', _harvey);
rockB.addEventListener('click', _sam);
rockB.addEventListener('click', _shane);
rockB.addEventListener('click', _emily);
heavymetalB.addEventListener('click', _sebastian);
edmB.addEventListener('click', _maru);
indieB.addEventListener('click', _abigail);
indieB.addEventListener('click', _leah);
workoutB.addEventListener('click', _alex);


var sportsB = document.getElementById("sports");
var instrumentB = document.getElementById("instrument");
var musicB = document.getElementById("music");
var videogamesB = document.getElementById("videogames");
var writingB = document.getElementById("writing");
var petB = document.getElementById("pet");
var outsideB = document.getElementById("outside");
var drawingB = document.getElementById("drawing");
var photographyB = document.getElementById("photography");
var sewingB = document.getElementById("sewing");
var learnB = document.getElementById("learn");
var communityserviceB = document.getElementById("communityservice");

sportsB.addEventListener('click', _alex);
instrumentB.addEventListener('click', _sam);
musicB.addEventListener('click', _harvey);
videogamesB.addEventListener('click', _sebastian);
writingB.addEventListener('click', _elliott);
petB.addEventListener('click', _shane);
outsideB.addEventListener('click', _abigail);
drawingB.addEventListener('click', _leah);
photographyB.addEventListener('click', _haley);
sewingB.addEventListener('click', _emily);
learnB.addEventListener('click', _maru);
communityserviceB.addEventListener('click', _penny);


var coffeeB = document.getElementById("coffee");
var teaB = document.getElementById("tea");
var milkB = document.getElementById("milk");
var alcoholB = document.getElementById("alcohol");
var sodaB = document.getElementById("soda");
var energyB = document.getElementById("energy");

coffeeB.addEventListener('click', _elliott);
coffeeB.addEventListener('click', _harvey);
coffeeB.addEventListener('click', _haley);
teaB.addEventListener('click', _emily);
teaB.addEventListener('click', _maru);
milkB.addEventListener('click', _sebastian);
milkB.addEventListener('click', _abigail);
milkB.addEventListener('click', _penny);
milkB.addEventListener('click', elliottF);
milkB.addEventListener('click', haleyF);
alcoholB.addEventListener('click', _shane);
alcoholB.addEventListener('click', _leah);
alcoholB.addEventListener('click', pennyF);
sodaB.addEventListener('click', _sam);
energyB.addEventListener('click', _alex);


var pizzaB = document.getElementById("pizza");
var burgerB = document.getElementById("burger");
var saladB = document.getElementById("salad");
var seafoodB = document.getElementById("seafood");
var spicyfoodB = document.getElementById("spicyfood");

pizzaB.addEventListener('click', _sam);
pizzaB.addEventListener('click', elliottF);
pizzaB.addEventListener('click', harveyF);
pizzaB.addEventListener('click', leahF);
burgerB.addEventListener('click', _emily);
burgerB.addEventListener('click', leahF);
saladB.addEventListener('click', _harvey);
saladB.addEventListener('click', _haley);
saladB.addEventListener('click', _leah);
saladB.addEventListener('click', _penny);
saladB.addEventListener('click', samF);
saladB.addEventListener('click', sebastianF);
saladB.addEventListener('click', abigailF);
saladB.addEventListener('click', haleyF);
seafoodB.addEventListener('click', _alex);
seafoodB.addEventListener('click', _elliott);
seafoodB.addEventListener('click', _sebastian);
seafoodB.addEventListener('click', _abigail);
seafoodB.addEventListener('click', emilyF);
seafoodB.addEventListener('click', leahF);
seafoodB.addEventListener('click', haleyF);
spicyfoodB.addEventListener('click', _shane);
spicyfoodB.addEventListener('click', _maru);
spicyfoodB.addEventListener('click', emilyF);
spicyfoodB.addEventListener('click', haleyF);


var cakeB = document.getElementById("cake");
var muffinB = document.getElementById("muffin");
var doughnutsB = document.getElementById("doughnuts");
var lollipopB = document.getElementById("lollipop");
var rockcandyB = document.getElementById("rockcandy");

cakeB.addEventListener('click', _haley);
cakeB.addEventListener('click', _abigail);
cakeB.addEventListener('click', _elliott);
cakeB.addEventListener('click', harveyF);
cakeB.addEventListener('click', leahF);
muffinB.addEventListener('click', _penny);
muffinB.addEventListener('click', _leah);
doughnutsB.addEventListener('click', _sam);
lollipopB.addEventListener('click', _maru);
rockcandyB.addEventListener('click', _all);


var cottagecoreB = document.getElementById("cottagecore");
var royalcoreB = document.getElementById("royalcore");
var lightacademiaB = document.getElementById("lightacademia");
var darkacademiaB = document.getElementById("darkacademia");
var grungeB = document.getElementById("grunge");
var streetwearB = document.getElementById("streetwear");
var indieB = document.getElementById("indiee");

cottagecoreB.addEventListener('click', _leah);
cottagecoreB.addEventListener('click', _penny);
royalcoreB.addEventListener('click', _haley);
lightacademiaB.addEventListener('click', _harvey);
darkacademiaB.addEventListener('click', _elliott);
grungeB.addEventListener('click', _sebastian);
grungeB.addEventListener('click', _shane);
grungeB.addEventListener('click', _abigail);
streetwearB.addEventListener('click', _sam);
streetwearB.addEventListener('click', _alex);
indieB.addEventListener('click', _emily);
indieB.addEventListener('click', _maru);


var introvertB = document.getElementById("introvert");
var extrovertB = document.getElementById("extrovert");
var ambivertB = document.getElementById("ambivert");

introvertB.addEventListener('click', _elliott);
introvertB.addEventListener('click', _harvey);
introvertB.addEventListener('click', _sebastian);
introvertB.addEventListener('click', _shane);
introvertB.addEventListener('click', _leah);
extrovertB.addEventListener('click', _alex);
extrovertB.addEventListener('click', _emily);
extrovertB.addEventListener('click', _abigail);
ambivertB.addEventListener('click', _sam);
ambivertB.addEventListener('click', _haley);
ambivertB.addEventListener('click', _maru);
ambivertB.addEventListener('click', _penny);


var springB = document.getElementById("spring");
var summerB = document.getElementById("summer");
var fallB = document.getElementById("fall");
var winterB = document.getElementById("winter");

springB.addEventListener('click', _haley);
springB.addEventListener('click', _shane);
springB.addEventListener('click', _emily);
summerB.addEventListener('click', _maru);
summerB.addEventListener('click', _alex);
summerB.addEventListener('click', _sam);
fallB.addEventListener('click', _penny);
fallB.addEventListener('click', _elliott);
fallB.addEventListener('click', _abigail);
winterB.addEventListener('click', _sebastian);
winterB.addEventListener('click', _harvey);
winterB.addEventListener('click', _leah);


var alexB = document.getElementById("alex");
var elliottB = document.getElementById("elliott");
var harveyB = document.getElementById("harvey");
var samB = document.getElementById("sam");
var sebastianB = document.getElementById("sebastian");
var shaneB = document.getElementById("shane");
var abigailB = document.getElementById("abigail");
var emilyB = document.getElementById("emily");
var haleyB = document.getElementById("haley");
var leahB = document.getElementById("leah");
var maruB = document.getElementById("maru");
var pennyB = document.getElementById("penny");
var idontknowB = document.getElementById("idontknow");

alexB.addEventListener('click', alexF);
elliottB.addEventListener('click', elliottF);
harveyB.addEventListener('click', harveyF);
samB.addEventListener('click', samF);
sebastianB.addEventListener('click', sebastianF);
shaneB.addEventListener('click', shaneF);
abigailB.addEventListener('click', abigailF);
emilyB.addEventListener('click', emilyF);
haleyB.addEventListener('click', haleyF);
leahB.addEventListener('click', leahF);
maruB.addEventListener('click', maruF);
pennyB.addEventListener('click', pennyF);
idontknowB.addEventListener('click', returnVals);


/*
QUESTION 1 :: What is your favorite color?
Blue :: Alex, Shane, Emily
Red :: Elliott
Green :: Harvey, Leah
Yellow :: Sam, Penny
Black :: Sebastian
Purple :: Abigail, Maru
Pink :: Haley

QUESTION 2 :: What type of music do you listen to?
Workout :: Alex
Classical :: Elliott
Jazz :: Harvey
Rock :: Sam, Shane, Emily
Pop :: Haley, Penny
Indie/Alternative :: Abigail, Leah
Heavy Metal :: Sebastian
EDM :: Maru

QUESTION 3 :: What do you do in your free time?
Play Sports :: Alex
Write Stories :: Elliott
Listen to Music :: Harvey
Play an Instrument :: Sam
Play Video Games :: Sebastian
Spend Time With A Pet :: Shane
Go Outside :: Abigail
Sewing :: Emily
Photography :: Haley
Drawing :: Leah
Learn Something New :: Maru
Community Service :: Penny

QUESTION 4 :: What do you like drinking the most?
Energy Drink :: Alex
Coffee :: Elliott, Harvey, Haley
Soda :: Sam
Milk :: Sebastian, Abigail, Penny
Alcohol :: Shane, Leah
Tea :: Emily, Maru

QUESTION 5 :: What is your most preferred meal?
Seafood :: Alex, Elliott, Sebastian, Abigail
Spicy Food :: Shane, Maru
Salad :: Harvey, Haley, Leah, Penny
Pizza :: Sam
Burger :: Emily

QUESTION 6 :: Which is your favorite sweet/dessert?
Muffins :: Penny, Leah
Lollipop :: Maru
Cake :: Haley, Abigail, Elliott
Doughnuts :: Sam
Rock Candy :: Harvey, Alex, Sebastian, Shane, Emily

QUESTION 7 :: What is your aesthetic?
Cottagecore :: Leah, Penny
Grunge :: Sebastian, Shane, Abigail
Streetwear :: Sam, Alex
Dark Academia :: Elliott
Light Academia :: Harvey
Indie :: Emily, Maru
Royalcore :: Haley

QUESTION 8 :: Are you an introvert, extrovert, or ambivert?
Introvert :: Elliott, Harvey, Sebastian, Shane, Leah
Ambivert :: Sam, Haley, Maru, Penny
Extrovert :: Alex, Emily, Abigail

QUESTION 9 :: Which season is your birthday in?
Spring :: Haley, Shane, Emily
Summer :: Maru, Alex, Sam
Fall :: Penny, Elliott, Abigail
Winter :: Sebastian, Harvey, Leah

QUESTION 10 :: Which bachelor/bachelorette do you think you got? (This won't affect your outcome.)
Alex
Elliott
Harvey
Sam
Sebastian
Shane
Abigail
Emily
Haley
Leah
Maru
Penny
I don't know
*/