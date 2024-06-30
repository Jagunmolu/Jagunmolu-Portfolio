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
      if (confirm('Are you sure you want to select this question?')) {
        displayQuestion(category, questionNumber);
      }
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
          return 50; // Example: 5 questions for testing
        case 'recitation':
          return 10; // Example: 1 question for testing
        case 'fill-in-the-gap':
          return 15; // Example: 2 questions for testing
        case 'true-or-false':
          return 10; // Example: 1 question for testing
        case 'spelling':
          return 10; // Example: 1 question for testing
        default:
          return 0;
      }
    }
  
  
  
    let questions = {}; // Object to store questions by category
    
      // Example arrays of questions and answers
      let genq = [
          'According to Ezra chapter 1:9, what was the inventory of gold dishes, silver dishes and silver pans?',
          'According to Ezra chapter 1:11, how many articles of gold and of silver were recorded?',
          'According to Ezra 3:4, what festival was celebrated by the Israelites?',
          'According to Ezra 6:15, “The temple was completed on what day and what month, according to Ezra 6:15?',
          'How many verses are in chapter 8 of the book of Ezra?',
          'According to Ezra 3:8, What Levites of a certain age were appointed to supervise the building of the house of the Lord?',
          'According to Ezra 6:3, “In the first year of King Cyrus, the king issued a decree concerning the temple of God in Jerusalem to be rebuilt as a place to present sacrifices, and let its foundations be laid.  How many cubits high and how many cubits wide was it to be?',
          'How many chapters are in the book of Ezra?',
          'According to Ezra 1:1, which prophet spoke the word of the Lord that Cyrus King of Persia was to fulfill?',
          'According to Ezra 1:1, whose heart was moved?',
          'How many verses does Ezra chapter 1 have?',
          "According to Ezra 3:12, what sounds couldn't be distinguished and why couldn't the sounds be distinguished?",
          'According to Ezra 3:12, where was the sound of shouts the people made heard from?',
          'According to Ezra 4:1, whose enemies heard that the exiles were building a temple for the Lord?',
          'As recorded in Ezra 4:3, who answered by saying, “You have no part with us in building a temple to our God. We alone will build it for the Lord, the God of Israel, as King Cyrus, the king of Persia, commanded us.”',
          'According to Ezra 4:5, what was done in order to work against and frustrate the building of the temple?',
          'According to Ezra 4:6-24, which King made the work on the house of God come to a standstill?',
          'According to Ezra 5:1, which prophets are the descendants of Iddo?',
          'According to Ezra 5:3, who was the governor of Trans-Euphrates?',
          'How many verses are in Ezra chapter 9?',
          'According to Ezra 8:35, the exiles who had returned from captivity sacrificed burnt offerings to the God of Israel. How many bulls, rams, male lambs and male goats were offered?',
          'According to Ezra 10:4, “Rise up; this matter is in your hands. We will support you, so take courage and do it.” Who said this? And to whom was this statement addressed to?',
          'According to Ezra 10:6, what did Ezra continue to mourn over?',
          'According to Ezra 10:6, When Ezra withdrew to the room of Jehohanan son Eliashib, what did he do while he was there?',
          'According to Ezra 10:18-22, How many descendants of the priests got married to foreign women?',
          'According to Ezra 10:25-43, How many descendants of the other Israelites got married to foreign women?',
          'How many verses does Ezra chapter 6 have?',
          'According to Ezra 1:6, what was it that Cyrus King of Persia said the LORD, the God of heaven had given to him?',
          'According to Ezra 1:1, who moved the heart of Cyrus King of Persia?',
          'According to Ezra 1:7, which King had carried the articles belonging to the temple of the LORD and placed them in the temple of his god?',
          'According to Ezra 1:8, who was Sheshbazzar?',
          'According to Ezra 1:8, who was Mithredath?',
          'According to Ezra 8:18, tell us how Sherebiah was described and from which descendant?',
          'According Ezra 8:21, Where was a fast proclaimed and why?',
          'According to Ezra 7:1, who was Ezra’s father?',
          'According to Ezra 8:17, who is Iddo?',
          'According to Ezra 10:2, who made this statement to Ezra: “We have been unfaithful to our God by marrying foreign women from the peoples around us. But in spite of this, there is still hope for Israel.”',
          'According to Ezra 10:9, why did all the people sit in the square before the house of God?',
          'According to Ezra 10:16, which particular men were selected to investigate the cases of marriage to foreign women.',
          'According to Ezra 10:16, who selected men to investigate the cases of marriage to foreign women?',
          'How many verses are in Ezra chapter 7?',
          'How many verses are in Ezra chapter 5?',
          'In the book of Ezra, which chapter has the most verses and how many verses does it have?',
          'Recite any verse in the book of Ezra and give the chapter and  verse?',
          'According to Ezra 2:58, How many were the servants of Solomon?',
          'According to Ezra 2:60-62, Mention the descendants from among the priests, whose family records  were not found.',
          'According to Ezra 9:3, What did Ezra do when he heard that,the people of Israel and some of the priests and Levites had married and mingled the holy race with peoples around them.',
          'How many verses are in chapter 4 of the book of Ezra?',
          'How many verses are in chapter 3 of the book of Ezra?',
          'Ezra 4:24 says, “Thus the work on the house of God in Jerusalem came to a standstill until the second year of the reign of Darius king of Persia.” Why did the work on the house of God come to a standstill?'
      ];
    
      let gena = [
          ['30, 1000, 29'], ['5,400'], ['Festival of Tabernacles'], ['third day of the month Adar'], ['36 Verses'],
          ['20 years old and older'], ['sixty cubits high and sixty cubits wide'], ['10 Chapters'], ['Prophet Jeremiah'], ['Cyrus King of Persia'],
          [' 11 verses'], ['Sound of the shouts of joy and the sound of weeping; Because the people made so much noise'], ['Far away'], ['Enemies of Judah and Benjamin'], ['Zerubbabel, Joshua and the rest of the heads of the families of Israel'],
          ['Officials were bribed'], ['King Artaxerxes'], ['Prophets Haggai and Zechariah'], ['Tattenai'], ['15 verses'],
          ['12-bulls, 96-rams , 77-male lambs , and 12-male goats'], ['Shecaniah (son of Jehiel), Ezra'], ['The unfaithfulness of the exiles or their marrying foreign women'], ['He ate no food and drank no water'], ['4 descendants'],
          ['11 descendants'], ['22 verses'], ['All the Kingdoms of the earth'], ['The LORD'], ['King Nebuchadnezzar'],
          ['The prince of Judah'], ['The treasurer'], ['A capable man, Descendants of Mahli'], ['Ahava canal, that they might humble themselves before the Lord and ask for safe journey'], ['Seraiah'],
          ['The leader in Kasiphia'], ['Shekaniah son of Jehiel, one of the descendants of Elam'], ['They were Greatly distressed by the occasion and because of the rain'], ['Men who were family heads'], ['Ezra'],
          ['28 verses'], ['17 verses'], ['70 verses'], ['Recitation...'], ['392'],
          ['Hobbai, Hakkoz, Barzillai'], ['He tore his tunic and cloak, pulled hair from his head and beard and sat down appalled'], ['24 verses'], ['13 verses'], ['Because King Artaxerxes’ letter said so ']
      ];
  
      let recq = [
          'Recite Ezra 4:3', 'Recite Ezra 6:15,', 'Recite Ezra 10:12.', 'Recite Ezra 10:44.', 'Recite Ezra 7:10.',
          'Recite Ezra 10:4.', 'Recite Ezra 1:11.', 'Recite Ezra 10:44.', 'Recite Ezra 10:11.', 'Recite Ezra 10:10.'
      ];
  
      let reca = [
          '“But Zerubbabel, Joshua and the rest of the heads of the families of Israel answered, “You have no part with us in building a temple to our God. We alone will build it for the Lord, the God of Israel, as King Cyrus, the king of Persia, commanded us.”',
          '“The temple was completed on the third day of the month Adar, in the sixth year of the reign of King Darius.”',
          '“The whole assembly responded with a loud voice: “You are right! We must do as you say.”',
          '“All these had married foreign women, and some of them had children by these wives.”',
          '“For Ezra had devoted himself to the study and observance of the Law of the Lord, and to teaching its decrees and laws in Israel.”',
          '“Rise up; this matter is in your hands. We will support you, so take courage and do it.”',
          '“In all, there were 5,400 articles of gold and of silver. Sheshbazzar brought all these along with the exiles when they came up from Babylon to Jerusalem.”',
          '“All these had married foreign women, and some of them had children by these wives.”',
          '“Now honor the Lord, the God of your ancestors, and do his will. Separate yourselves from the peoples around you and from your foreign wives.”',
          '“Then Ezra the priest stood up and said to them, “You have been unfaithful; you have married foreign women, adding to Israel’s guilt.”'
      ];
  
      let fillq = [
          'According to Ezra 2:70, fill in the gap: “The __________, the __________, the __________, the __________ and the temple servants settled in their own towns, along with some of the other people, and the rest of the Israelites settled in their towns.”',
          'According Ezra 3:2, fill in the gap: “Then Joshua son of __________ and his fellow priests and __________ son of Shealtiel and his associates began to build the altar of the God of Israel to sacrifice burnt offerings on it, in accordance with what is written in the Law of Moses the man of God.”',
          'According to Ezra 3:6, fill in the gap: “On the __________ day of the __________ month they began to offer burnt offerings to the Lord, though the foundation of the Lord’s temple had not yet been laid.”',
          'According to Ezra 2:1, fill in the gap: “Now these are the people of the province who came up from the captivity of the exiles, whom __________ king of __________ had taken captive to Babylon…”',
          'According to Ezra 5:1, fill in the gap : “Now __________ the prophet and __________ the prophet, a descendant of Iddo, prophesied to the Jews in Judah and Jerusalem in the name of the God of Israel, who was over them.”',
          'According to Ezra 7:8, fill in the gap : “Ezra arrived in Jerusalem in the __________ month of the __________ year of the king.”',
          'According to Ezra 7:10, fill in the gap: “For Ezra had devoted himself to the __________ and __________ of the Law of the Lord, and to __________ its decrees and laws in Israel.”',
          'According to Ezra 8:31, fill in the gap: “On the __________ day of the __________ month we set out from the __________ Canal to go to Jerusalem. The hand of our God was on us, and he protected us from enemies and bandits along the way.”',
          'According to Ezra 8:34, fill in the gap: “Everything was accounted for by __________ and __________ , and the entire weight was recorded at that time.”',
          'According to Ezra 1:6, fill in the gap: “All their neighbors assisted them with articles of  __________ and __________ , with goods and livestock, and with valuable gifts, in addition to all the freewill offerings.”',
          'According to Ezra 10:10, fill in the gap: “Then Ezra the priest stood up and said to them, “You have been __________ ; you have married __________ women, adding to Israel’s guilt.”',
          'According to Ezra 2:63, Fill in the gap: “The governor ordered them not to eat any of the most sacred food until there was a priest ministering with the __________ and __________ .”',
          'According to Ezra 6:15, fill in the gap: “The temple was completed on the __________ day of the month Adar, in the __________ year of the reign of King Darius.”',
          'According to Ezra 10:1, fill in the gap: “While Ezra was __________ and __________ , weeping and throwing himself down before the house of God, a large crowd of Israelites—men, women and children—gathered around him. They too wept bitterly.”',
          'According to Ezra 3:7, fill in the gap: “Then they gave __________ to the masons and carpenters , and gave __________ and __________ and __________ oil to the people of Sidon and Tyre, so that they would bring cedar logs by sea from Lebanon to Joppa, as authorized by Cyrus king of Persia.'
      ];
  
      let filla = [
          '[priests, levites, musicians, gatekeepers]', '[ Jozadak, Zerubbabel]', '[First, Seventh]',
          '[Nebuchadnezzar, Babylon]', '[Haggai, Zechariah]', '[Fifth month, Seventh year]',
          '[Study, Observance, teaching]', '[twelfth, first, Ahava]', '[number, weight]',
          '[Silver, Gold]', '[unfaithful, foreign]', '[Urim, Thummim]',
          '[Third, Sixth]', '[praying, confessing]', '[money, food, drink, olive ]'
      ];
  
      let tfq = [
          'True or False: King Cyrus was a Jewish king who allowed the Israelites to return to Jerusalem.',
          'True or False: Ezra was a priest and scribe.',
          'True or False: The Israelites completed the rebuilding of the temple in one year and 65 days.',
          'True or False: The book of Ezra ends with the dedication of the wall.',
          'True or False: According to Ezra 8:15, No levites were found among the priests and the people.',
          'True or False: According to Ezra 8:20, the 220 temple servants brought to assist the levites  were all not registered.',
          'True or False: According to Ezra 8:20, the 220 temple servants brought to assist the servants was a body that was first instituted by King David and his officials.',
          'True or False: According to Ezra 1:6, against the King’s word, some of the neighbors refused to  assist with articles of silver and gold because they were jealous?',
          'True or False: According to Ezra 6:19, On the fourteenth day of the first month, the exiles celebrated the Passover with some of the Kings of Persia.”',
          'True or False: “None of the descendants of the priests married foreign women.”'
      ];
  
      let tfa = [
          'False', 'True', 'False', 'False', 'True',
          'False', 'True', 'False', 'False', 'False'
      ];
  
      let spellq = [
          "Spell the word", "Spell the word",
          "Spell the word", "Spell the word",
          "Spell the word", "Spell the word",
          "Spell the word", "Spell the word",
          "Spell the word", "Spell the word"
      ];
  
      let spella = [
          'A-R-T-A-X-E-R-X-E-S', 'S-H-I-M-S-H-A-I', 'Z-E-R-U-B-B-A-B-E-L', 'B-A-R-Z-I-L-L-A-I', 'S-H-E-S-H-B-A-Z-Z-A-R',
          'M-I-T-H-R-E-D-A-T-H', 'N-E-B-U-C-H-A-D-N-E-Z-Z-A-R', 'M-A-N-A-S-S-E-H', 'E-U-P-H-R-A-T-E-S', 'S-H-E-A-L-T-I-E-L'
      ];
    
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
      // questionTitle.textContent = selectedQuestion.question;
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
        box.classList.toggle('selected');
        toggleSelectedQuestion(category, index);
      }
    });
  
    // Function to toggle selected question in the selectedQuestions object
    function toggleSelectedQuestion(category, questionNumber) {
      const index = selectedQuestions[category].indexOf(questionNumber);
      if (index === -1) {
        selectedQuestions[category].push(questionNumber);
      } else {
        selectedQuestions[category].splice(index, 1);
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
  