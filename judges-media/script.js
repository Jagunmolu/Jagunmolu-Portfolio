document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('category-select');
    const questionBoxesContainer = document.getElementById('question-boxes');
    const questionViewContainer = document.getElementById('question-view');
    let selectedQuestions = {}; // Object to store selected questions by category
  
    // Initialize selectedQuestions object
    selectedQuestions.general = [];
    selectedQuestions.recitation = [];
    selectedQuestions['fill-in-the-gap'] = [];
    selectedQuestions['true-or-false'] = [];
    selectedQuestions.spelling = [];
  
    // Event listener for category select change
    categorySelect.addEventListener('change', function() {
      const selectedCategory = categorySelect.value;
      const numberOfQuestions = getNumberOfQuestions(selectedCategory);
      populateQuestionBoxes(selectedCategory, numberOfQuestions);
    });
  
    // Function to populate question boxes based on selected category
    function populateQuestionBoxes(category, numberOfQuestions) {
      questionBoxesContainer.innerHTML = '';
      for (let i = 1; i <= numberOfQuestions; i++) {
        const box = document.createElement('div');
        box.classList.add('question-box');
        box.textContent = i;
        box.dataset.category = category;
        box.dataset.index = i - 1; // Index starts from 0
        // Check if question is already selected and update style accordingly
        if (selectedQuestions[category].includes(i)) {
          box.classList.add('selected');
        }
        box.addEventListener('click', function() {
          confirmSelection(category, i);
        });
        questionBoxesContainer.appendChild(box);
      }
    }
  
    // Confirm selection before displaying question
    function confirmSelection(category, questionNumber) {
        let checked = false;
      if(confirm('Are you sure you want to select this question?')) {
        checked = true;
        displayQuestion(category, questionNumber);
      }
      return checked
    //   else {

    //     const isAlreadySelected = selectedQuestions[category].includes(index);

    //     if (!isAlreadySelected) {
    //         // Add the selected class and update selected questions
    //         box.classList.toggle('selected');
    //         toggleSelectedQuestion(category, index);
    //     }

    //         selectedQuestions[category].splice(questionNumber - 1, 1);
    //     }
    }
  
    // Display selected question
    function displayQuestion(category, questionNumber) {
      const question = getCategoryQuestion(category, questionNumber);
      const answer = getCategoryAnswer(category, questionNumber);
  
      // Hide question boxes
      questionBoxesContainer.style.display = 'none';
  
      // Display question in the view area
      questionViewContainer.innerHTML = `
        <div class="question-text">${question}</div>
        <br><hr><br>
        <div class="answer-text" style="display: none;">${answer}</div>
        <div class="button-container">
          <button class="button" id="view-answer-btn">View Answer</button>
          <button class="button" id="go-to-questions-btn">Go to Questions</button>
        </div>
      `;
  
      // Event listener for view answer button
      const viewAnswerBtn = document.getElementById('view-answer-btn');
      viewAnswerBtn.addEventListener('click', function() {
        displayAnswer();
      });
  
      // Event listener for go to questions button
      const goToQuestionsBtn = document.getElementById('go-to-questions-btn');
      goToQuestionsBtn.addEventListener('click', function() {
        questionViewContainer.innerHTML = ''; // Clear question view area
        questionBoxesContainer.style.display = 'block'; // Show question boxes
      });
    }
  
    // Display answer in the view area
    function displayAnswer() {
      const answerText = questionViewContainer.querySelector('.answer-text');
      answerText.style.display = 'block'; // Display answer text
    }
  
    // Get number of questions for each category
    function getNumberOfQuestions(category) {
      switch (category) {
        case 'general':
          return 36; // Example: 5 questions for testing
        case 'recitation':
          return 7; // Example: 1 question for testing
        case 'fill-in-the-gap':
          return 7; // Example: 2 questions for testing
        case 'true-or-false':
          return 7; // Example: 1 question for testing
        case 'spelling':
          return 7; // Example: 1 question for testing
        default:
          return 0;
      }
    }
  
  
  
    let questions = {}; // Object to store questions by category
    
      // Example arrays of questions and answers
      let genq = ['How many verses has Judges chapter 1?', 'According to Judges chapter 1 verse 4, how many men were struck down at Bezek?', 'According to Judges chapter 1 verse 13, who did Caleb give his daughter Aksah to in marriage?', 'Who was the first Judge and for how long did Israel have peace?', 'According to Judges 4:4, who was Deborah?', 'According to Judges 4:17, whose tent did Sisera flee to? ', 'How many verses does Judges chapter 21 have? ', 'According to Judges 20:46, how many Benjamite swordsmen fell? ', 'According to Judges 20:47, how many Benjamites fled to the Rock of Rimmon?', 'According to Judges 19:1, who lived in a remote area in the hill country of Ephraim and where did he take a concubine from?', 'According to Judges 19:29, into how many parts was the concubine cut into and how?', 'According to Judges 18:14, how many men spied out the land of Laish?', 'According Judges 16:1, who went to Gaza and saw a prostitute there?', 'According to Judges 16:4, who did Samson fall in love with, and where?', 'According to Judges 16:31, who went to get Samson’s body?', "According to Judges 16:31, where was Samson's body buried? ", 'According to Judges 16:31, how many years did Samson lead Israel?', 'According to Judges 4:19, who asked for water and what was given ?', 'According to Judges 4:21, who was Jael’s husband?', 'According to Judges chapters 6&7, who did the Lord send them when they cried unto Him because of the Midian?', 'According to Judges 6:12, what did the angel of the Lord say when he appeared to Gideon?', 'According to Judges 6:29, who was Gideon’s Father?', 'According to Judges 6:32, what name was given to Gideon, and why?', 'According to Judges 7:1-3, how many men left Gideon and how many men were left the first time God said he has too many men? ', 'According to Judges 7:16, into how many companies were the men who were going to defeat the Midianites divided into?', 'According to Judges 7 :1, how many men were with Gideon when they reached the edge of the camp at the beginning of the middle watch?', 'According to Judges 7:25,   what were the names of the two Midianite leaders captured?', 'According to Judges 7:25, where was Oreb, one of the leaders of the Midianites killed?', 'According to Judges 7:25, where was Zeeb, one of the leaders of the Midianites killed?', 'According to Judges 7:25, where was Gideon when the heads of the two Midianite leaders were brought to him? ', 'In Judges chapters 19 and 20 is the story of the levite and his concubine. Into how many parts did he cut her body into and to whom did he send them? ', 'According to Judges 19:20, who said, “You are welcome at my house..let me supply whatever you need.”', 'According to Judges 15:8, Samson went and stayed in after the Philistines burned his wife and her father to death? ', 'According to Judges 15:15, How many men did Samson strike down and what did he use?', 'If the people from Canaan  were called Canaanites, what were the people from Timnah called?', 'According to Judges 16:4, where and who did Samson fall in love with?'];
    
      let gena = ['36 verses', 'Ten Thousand men', 'Othniel son of Kenaz', 'Othniel, 40 years', 'A prophet, the wife of Lappidoth, was leading Israel at that time', 'Tent of Jael', '25 verses', '25,000', '600', 'A Levite', '12 parts, limb by limb', '5', 'Samson', 'Delilah, Valley of Sorek', "His brothers and his Father's whole family", 'Between Zorah and Eshtaol in the tomb of Manoah his father', '20 Years', 'Sisera, milk', 'Heber', 'A Prophet', '“The Lord is with you, mighty warrior.”', 'Joash', 'Jerub-Baal, Because Gideon broke down baal’s altar', '20,000 men left, 10,000 men remained', '3 companies', '100 men', 'Oreb and Zeeb', 'Rock of Oreb', 'Winepress of Zeeb', 'By Jordan', '12 parts, to the 12 tribes of Israel', 'An old man from the hill country of Ephraim', 'A cave in the rock of Etam', 'A thousand men, Jawbone', 'Timnites', 'Valley of Sorek, Delilah'];
  
      let recq = ['Recite Judges chapter 1 verse 1.', 'Recite Judges chapter 2:16.', 'Recite Judges 21:25.', 'Recite Judges 16:28.', 'Recite Judges 21:1.', 'Recite Judges 16:1.', 'Recite Judges 15:16.'];
  
      let reca = ['“After the death of Joshua, the Israelites asked the Lord, “Who of us is to go up first to fight against the Canaanites?””', '“Then the Lord raised up judges, who saved them out of the hands of these raiders.”', '“In those days Israel had no king; everyone did as they saw fit.”', '“Then Samson prayed to the Lord, “Sovereign Lord, remember me. Please, God, strengthen me just once more, and let me with one blow get revenge on the Philistines for my two eyes.””', '“The men of Israel had taken an oath at Mizpah: “Not one of us will give his daughter in marriage to a Benjamite.””', '“One day Samson went to Gaza, where he saw a prostitute. He went in to spend the night with her.”', '“Then Samson said, “With a donkey’s jawbone I have made donkeys of them. With a donkey’s jawbone I have killed a thousand men.””'];
  
      let fillq = ["“__________ said to her, “If you  __________  with me, I will __________; but if you don't __________ with me, I won’t  __________.” Judges 4:8", '“__________  went out to meet __________ and said to him, “Come, my Lord, come right in. Don’t be afraid.” So he entered her tent, and she covered him with a.” Judges 4:18', '“Then Samson said, “With a donkey’s __________ I have made donkeys of them. With a __________ jawbone I have killed a thousand men.”” Judges 15:16 ', '“The Lord turned to him and said, “Go in the  __________  you have and save _  out of Midian’s hand. Am I not sending you?”” Judges 6:14', '“Some time later, he fell in love with a woman in the Valley of __________ whose name was __________ .” Judges 16:4', '“Samson went down to __________ and saw a young __________.” Judges 14:1', 'Samson led Israel for __________ years in the days of the __________. Judges 15:20'];
  
      let filla = ['Barak, go, go, go, go', 'Jael, Sisera, blanket', 'jawbone, donkey’s', 'strength, Israel', 'Sorek, Delilah', 'Timnah, Philistine woman', '20, Philistines'];
  
      let tfq = ['True or False: Samson killed more when he died than while he lived.', 'True or False: Samson killed a big snake.', 'True or False: Jephthah was a male prostitute.', 'True or False: Zebah and Zalmunna were one of the Judges of Israel.', 'True or False: Lapidoth was the wife of Deborah.', 'True or False: The Simeonites accepted to go with Judah to fight against the Canaanites.', 'True or False: Caleb and Othniel were husband and wife.'];
  
      let tfa = ['True', 'False', 'False', 'False', 'False', 'True', 'False'];
  
      let spellq = ['Spell the word.', 'Spell the word. Judges 14:19 - Where Samson struck down thirty men.', 'Spell the word.', 'Spell the word. Judges 3:8 - God sold the Israelites to him when God’s anger burned against them. ', 'Spell the word. Son of Kenaz, Caleb’s younger brother.', 'Spell the word. He sacrificed his daughter to fulfil his vow to God.', 'Spell the word. Judges 2:12-13 - The Israelites aroused God’s anger by serving Baal and __________.'];
  
      let spella = ['C-A-N-A-A-N-I-T-E', 'A-S-H-K-E-L-O-N', 'M-A-N-A-S-S-E-H', 'C-U-S-H-A-N---R-I-S-H-A-T-H-A-I-M', 'O-T-H-N-I-E-L', 'J-E-P-H-T-H-A-H', 'A-S-H-T-O-R-E-T-H-S'];
    
      // Initialize questions object for each category
      questions.general = genq.map((question, index) => ({
        question: question,
        answer: gena[index],
        selected: false
      }));
    
      questions.recitation = recq.map((question, index) => ({
        question: question,
        answer: reca[index],
        selected: false
      }));
    
      questions['fill-in-the-gap'] = fillq.map((question, index) => ({
        question: question,
        answer: filla[index],
        selected: false
      }));
    
      questions['true-or-false'] = tfq.map((question, index) => ({
        question: question,
        answer: tfa[index],
        selected: false
      }));
    
      questions.spelling = spellq.map((question, index) => ({
        question: question,
        answer: spella[index],
        selected: false
      }));
  
  
  
  
  
  
  
    // Dummy functions for getting question and answer based on category and question number
    function getCategoryQuestion(category, questionNumber) {
      // Dummy implementation - Replace with actual logic to fetch questions
      const selectedQuestion = questions[category][questionNumber - 1];
    //   questionTitle.textContent = selectedQuestion.question;
      return `Question ${questionNumber}:<br>${selectedQuestion.question}`;
    }
  
    function getCategoryAnswer(category, questionNumber) {
      // Dummy implementation - Replace with actual logic to fetch answers
      const selectedQuestion = questions[category][questionNumber - 1];
      return `Answer:<br>${selectedQuestion.answer}`;
    }
  
    // Update selected question box style upon click
    questionBoxesContainer.addEventListener('click', function(event) {
      const box = event.target;
      if (box.classList.contains('question-box')) {
        const category = box.dataset.category;
        const index = parseInt(box.dataset.index) + 1; // Convert index to number

        // Check if the question is already selected
        const isAlreadySelected = selectedQuestions[category].includes(index);

        if (!isAlreadySelected) {
            // Add the selected class and update selected questions
            box.classList.toggle('selected');
            toggleSelectedQuestion(category, index);
        }

        // box.classList.toggle('selected');
        // toggleSelectedQuestion(category, index);
      }
    });
  
    // Function to toggle selected question in the selectedQuestions object
    function toggleSelectedQuestion(category, questionNumber) {
      const index = selectedQuestions[category].indexOf(questionNumber);
      if (index === -1) {
        selectedQuestions[category].push(questionNumber);
    //   } else {
    //     selectedQuestions[category].splice(index, 1);
      }
    }
  
    // Prompt confirmation before leaving or refreshing the page
    window.addEventListener('beforeunload', function(event) {
      event.preventDefault();
      event.returnValue = '';
    });
  
    // Initial population of question boxes based on default selected category
    const initialCategory = categorySelect.value;
    const initialNumberOfQuestions = getNumberOfQuestions(initialCategory);
    populateQuestionBoxes(initialCategory, initialNumberOfQuestions);
  
  
  });
  