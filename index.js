//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "When first proposed, Darwin's theory of natural selection did not fully explain how evolution Could occur. This was due to:",
    answer: "Darwin's failure to recognize the tendency fo organisms to over-reproduce",
    options: [
      "Darwin's failure to recognize the tendency fo organisms to over-reproduce",
      "Darwin's initial overemphasis of the significance of genetic drift",
      "The fact that accurate mechanisms explaining genetic inheritance were not widely known",
      "The absence of accurate descriptions of the embryological development of most plants and annimals",
    ],
  },
  {
    numb: 2,
    question: "Hereditary materials (genes) are carried on",
    answer: "The chromosome",
    options: [
      "The cytoplasm",
      "The nucleus",
      "The chromosome",
      "Mitochondrion",
    ],
  },
  {
    numb: 3,
    question: "A male with genotype AaBb is crossed to a female of genotype AAbb. How many different phenotypes are possible for the offspring if there is complete dominance for each gene?",
    answer: "2", 
    options: [
      "2",
      "1",
      "3",
      "8",
    ],
  },
  {
    numb: 4,
    question: "Which of the following statements regarding mitosis and meiosis is true?",
    answer: "Sister chromatids separate during anaphase of mitosis and anaphase II of meiosis",
    options: [
      "Mitosis takes place in the gametes, but meiosis takes place in somatic cells Opposite ",
      "In metaphase of mitosis and metaphase I of meiosis, homologous chromosomes separate.",
      "Sister chromatids separate during anaphase of mitosis and anaphase II of meiosis",
      "Independent orientation occurs during metaphase of mitosis and metaphase II of meiosis Occurs in metaphase I of meiosis",
    ],
  },
  {
    numb: 5,
    question: "Which of the following terms represent a pair of contrasting characters ",
    answer: "allelomorphs",
    options: [
      "codominant genes",
      "allelomorphs",
      "homozygous",
      "heterozygous",
    ],
  },
  {
    numb: 6,
    question: "Each gametes carry",
    answer: "Only one of the alleles ",
    options: [
      "only recessive allele",
      "only dominant allele",
      "Only one of the alleles ",
      "all of these",
    ],
  },
   {
    numb: 7,
    question: "The crossing of F1 to homozygous recessive parent is called",
    answer: "test cross",
    options: [
      "back cross ",
      "test cross",
      "F1 cross",
      "all of these",
    ],
  },
   {
    numb: 8,
    question: "Which of the following is not a property of the genetic code? ?",
    answer: "Four stop codons",
    options: [
      "Non overlapping",
      "Redundant",
      "Four stop codons",
      "Almost Universal",
    ],
  },
   {
    numb: 9,
    question: "Viruses are ",
    answer: "obligate parasites",
    options: [
      "obligate parasites",
      "free living",
      "both free living and parasitic",
      "none of these",
    ],
  },
   {
    numb: 10,
    question: " The group of similar plants which breed freely among themselves constitute a",
    answer: "Species",
    options: [
      "Species",
      "Genus",
      "Order",
      "Family",
    ],
  },
   {
    numb: 11,
    question: "Which of the following definitions covers a greater number of organisms",
    answer: "Family",
    options: [
      "Class",
      "Genus",
      "Order",
      "Family",
    ],
  },
  {
    numb: 12,
    question: 'Basic taxonomy unit is',
    answer: "Species",
    options: [
      "Genus",
      "Order",
      "Species",
      "Kingdom",
    ],
  },
{
    numb: 13,
    question: 'The correct sequence from the most to the least comprehensive, of the taxonomic levels listed here is',
    answer: "Kingdom, phylum, class, order, family, genus, and species",
    options: [
      "Kingdom, phylum, order, class, family, genus, and species",
      "Kingdom, phylum, class, order, family, genus, and species",
      "Family, phylum, class, kingdom, order, species, and genus",
      "Phylum, family, class, order, kingdom, genus, and species",
    ],
  },
  {
    numb: 14,
    question: 'A species is defined as',
    answer: "a population of organisms that are able to interbreed",
    options: [
      "a population of organisms similar in size, shape, and color",
      "a population of organisms that are able to interbreed",
      "a group of organisms that live in the same habitat",
      "a population of organisms with a common ancestor",
    ],
  },
  {
    numb: 15,
    question: 'What is the basic structural and functional unit of all living organisms?',
    answer: "Cell",
    options: [
      "Cell",
      "Molecule",
      "Atom",
      "Organ",
    ],
  },
  {
    numb: 16,
    question: 'Which organelle is responsible for converting glucose into energy through cellular respiration?',
    answer: "Mitochondrion",
    options: [
      "Nucleus",
      "Chloroplast",
      "Mitochondrion",
      "Endoplasmic reticulum",
    ],
  },
  {
    numb: 17,
    question: 'Which type of cells lack a defined nucleus and other membrane-bound organelles?',
    answer: "Prokaryotic cells",
    options: [
      "Eukaryotic cells",
      "Prokaryotic cells",
      "Plant cells",
      "Animal cells",
    ],
  },
  {
    numb: 18,
    question: 'What is the main function of the cell membrane?',
    answer: "Cellular communication",
    options: [
      "Energy production",
      "Cellular communication",
      "DNA storage",
      "Photosynthesis",
    ],
  },
  {
    numb: 19,
    question: ' Which organelle contains enzymes that break down cellular waste and foreign materials?',
    answer: "Lysosom",
    options: [
      "Lysosom",
      "Vacuole",
      "Peroxisome",
      "Nucleus"
    ],
  },
  {
    numb: 20,
    question: ' Which type of cells contain a cell wall, chloroplasts, and a large central vacuole?',
    answer: "Eukaryotic plant cells",
    options: [
      "Bacterial cells",
      "Eukaryotic plant cells",
      "Animal cells",
      "Bacterial cells",
    ],
  },
  {
    numb: 21,
    question: ' What is the term for a group of organisms of the same species living in the same area and interacting with each other?',
    answer:"Population",
    options: [
      "Population",
      "Ecosystem",
      "Community",
      "Habitat",
    ],
  },
  
    {
      numb: 22,
      question: 'Which of the following is not a type of ecological interaction?',
      answer: "None of the above",
      options: [
        "Mutualism",
        "Commensalism",
        "Parasitism",
        "None of the above",
      ],
    },
    {
      numb: 23,
      question: 'What term is used to describe the gradual change in species composition in an area over time?',
      answer: 'Ecological succession',
      options: [
        "Biodiversity",
        "Symbiosis",
        "Ecological succession",
        "Adaptation",
      ],
    },
    {
      numb: 24,
      question: 'Which of the following is a major biogeochemical cycle that involves the movement of carbon through different reservoirs?',
      answer: "Carbon cycle",
      options: [
        "Nitrogen cycle",
        "Water cycle",
        "Carbon cycle",
        "Phosphorus cycle",
      ],
    },
    {
      numb: 25,
      question: 'Which of the following terms describes the variety of life forms within a particular habitat or ecosystem?',
      answer: "Biodiversity",
      options: [
        "Habitat diversity",
        "Ecosystem diversity",
        "Genetic diversity",
        "Biodiversity",
      ],
    },
    {
      numb: 26,
      question: 'What is the relationship between two species in which one benefits while the other is harmed?',
      answer: "Parasitism",
      options: [
        "Mutualism",
        "Commensalism",
        "Predation",
        "Parasitism",
      ],
    },
    {
      numb: 27,
      question: 'Which term refers to the hereditary differences among individuals of the same species?',
      answer: "Genetic variation",
      options: [
        "Phenotypic variation",
        "Environmental variation",
        "Genetic variation",
        "Species variation",
      ],
    },
    {
      numb: 28,
      question: 'What is the process of random changes in the genetic makeup of a population over time?',
      answer: 'Genetic drift',
      options: [
        "Natural selection",
        "Mutation",
        "Gene flow",
        "Genetic drift",
      ],
    },
    {
      numb: 29,
      question: 'Which of the following is a source of genetic variation?',
      answer: "Mutation",
      options: [
        "Gene flow",
        "Genetic drift",
        "Mutation",
        "Bottleneck effect",
      ],
    },
    {
      numb: 30,
      question: 'In which type of natural selection does the intermediate phenotype have the highest fitness?',
      answer: "Stabilizing selection",
      options: [
        "Directional selection",
        "Disruptive selection",
        "Stabilizing selection",
        "Balancing selection",
      ],
    },
    {
      numb: 31,
      question: 'Which of the following is a type of reproductive isolation that occurs due to differences in mating behaviors or rituals?',
      answer: "Behavioral isolation",
      options: [
        "Geographic isolation",
        "Temporal isolation",
        "Behavioral isolation",
        "Mechanical isolation",
      ],
    },
    {
      numb: 32,
      question: 'The process by which unrelated organisms independently evolve similar traits due to similar environments is called:',
      answer: "Convergent evolution",
      options: [
        "Divergent evolution",
        "Parallel evolution",
        "Convergent evolution",
        "Adaptive radiation",
      ],
    },
    {
      numb: 33,
      question: 'What is a measure of the proportion of the total genetic variability that is due to differences between individuals?',
      answer: "Heritability",
      options: [
        "Phenotypic variation",
        "Genetic variation",
        "Heritability",
        "Environmental variation",
      ],
    },
    {
      numb: 34,
      question: 'Which of the following is an example of a prezygotic barrier to reproduction?',
      answer: "Temporal isolation",
      options: [
        "Hybrid inviability",
        "Hybrid sterility",
        "Temporal isolation",
        "Hybrid breakdown",
      ],
    },
    {
      numb: 35,
      question: 'The phenomenon where a single phenotype is associated with multiple genotypes is called:',
      answer: "Pleiotropy",
      options: [
        "Polygenic inheritance",
        "Epistasis",
        "Pleiotropy",
        "Codominance",
      ],
    },
];

// if startQuiz button clicked
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); //show info box
};

// if exitQuiz button clicked
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
};

// if continueQuiz button clicked
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.add("activeQuiz"); //show quiz box
  showQuetions(0); //calling showQestions function
  queCounter(1); //passing 1 parameter to queCounter
  startTimer(25); //calling startTimer function
  startTimerLine(0); //calling startTimerLine function
};

let timeValue = 25;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz"); //show quiz box
  result_box.classList.remove("activeResult"); //hide result box
  timeValue = 25;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuetions(que_count); //calling showQestions function
  queCounter(que_numb); //passing que_numb value to queCounter
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  startTimer(timeValue); //calling startTimer function
  startTimerLine(widthValue); //calling startTimerLine function
  timeText.textContent = "Time Left"; //change the text of timeText to Time Left
  next_btn.classList.remove("show"); //hide the next button
};

// if quitQuiz button clicked
quit_quiz.onclick = () => {
  window.location.reload(); //reload the current window
};

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    //if question count is less than total question length
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
  } else {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    showResult(); //calling showResult function
  }
};

// getting questions and options from array
function showQuetions(index) {
  const que_text = document.querySelector(".que_text");

  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag

  const option = option_list.querySelectorAll(".option");

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  let userAns = answer.textContent; //getting user selected option
  let correcAns = questions[que_count].answer; //getting correct answer from array
  const allOptions = option_list.children.length; //getting all option items

  if (userAns == correcAns) {
    //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    answer.classList.add("incorrect"); //adding red color to correct selected option
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    console.log("Wrong Answer");

    for (i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correcAns) {
        //if there is an option which is matched to an array answer
        option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
        console.log("Auto selected correct answer.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
  }
  next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.remove("activeQuiz"); //hide quiz box
  result_box.classList.add("activeResult"); //show result box
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 3) {
    // if user scored more than 3
    //creating a new span tag and passing the user score number and total question number
    let scoreTag =
      "<span>and congrats! , You got <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
  } else if (userScore > 1) {
    // if user scored more than 1
    let scoreTag =
      "<span>and nice , You got <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p>and don't forget to vote Action for FUTASU 004(AGS)</span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // if user scored less than 1
    let scoreTag =
      "<span>and sorry , You got only <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p>and don't forget to vote Action for FUTASU 004(AGS)</span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; //changing the value of timeCount with time value
    time--; //decrement the time value
    if (time < 9) {
      //if timer is less than 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; //add a 0 before time value
    }
    if (time < 0) {
      //if timer is less than 0
      clearInterval(counter); //clear counter
      timeText.textContent = "Time Off"; //change the time text to time off
      const allOptions = option_list.children.length; //getting all option items
      let correcAns = questions[que_count].answer; //getting correct answer from array
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          //if there is an option which is matched to an array answer
          option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
      }
      next_btn.classList.add("show"); //show the next button if user selected any option
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1; //upgrading time value with 1
    time_line.style.width = time + "px"; //increasing width of time_line with px by time value
    if (time > 549) {
      //if time value is greater than 549
      clearInterval(counterLine); //clear counterLine
    }
  }
}

function queCounter(index) {
  //creating a new span tag and passing the question number and total question
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    questions.length +
    "</p> Questions</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
}
