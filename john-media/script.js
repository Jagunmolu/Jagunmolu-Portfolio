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
          return 50; // Example: 5 questions for testing
        case 'recitation':
          return 15; // Example: 1 question for testing
        case 'fill-in-the-gap':
          return 10; // Example: 2 questions for testing
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
      let genq = ['According to John 4:3-4, where did Jesus go through on his way from Judea to Galilee?', 'According to John 3:23, what were the two reasons why John was baptizing at Aenon near Salim?', 'According to John 3:2, what was the basis for Nicodemus to claim that Jesus was the teacher who has come from God?', 'According to John 1:47, what did Jesus say of Nathanael when he saw him approaching?', 'According to John 1:29, what did John say when he saw Jesus coming toward him?', 'What was the name of the pool that Jesus told the man who was born blind to wash in?', 'According to John 4:6, why was Jesus tired?', 'Where was Philip, Andrew and Peter from?', 'When the Samaritans urged Jesus to stay with them, how long did he stay and where did he go thereafter?', 'According to John 2:19, how long did it take to build the temple?', ' The Sea of Galilee is also known as what?', 'According to John 3:5, no one can enter the kingdom of God unless __________.', 'According to John 1:49, what was Nathanael’s confession?', 'According to John 1:23, in whose voice did John reply those who were asking for his identity, and what was his response?', 'According to John 7:1, why did Jesus not want to go about in Judea?', 'John 6:70 reads ‘Then Jesus replied, “Have I not chosen you, the Twelve? Yet one of you is a devil!”’ Who was he referring to as ‘devil’ as mentioned in John 6:71?', 'According to John 1:46, what was Nathanael’s response to Philip after Philip claimed they had found the one Moses wrote about?', 'According to John 3:25, what was the argument that developed between some of John’s disciples and a Jew about?', 'When Jesus knew that they intended to make him king by force, what did he do?', 'According to John 1:18, how many people have seen God besides the one and only Son?', 'In John 8:6, what was Jesus writing on the ground with?', 'According to John 3:1, how was Nicodemus described?', 'In the miracle of feeding the five thousand in chapter 6, what did the boy Andrew spoke about have?', 'Which festival happened at Jerusalem in the winter where Jesus was in the temple courts walking in Solomon’sColonnade? JOHN 10:22-23', 'According to John 7:30 why did no one lay a hand on him (Jesus)?', 'The man at the pool of Bethesda has been an invalid for how many years?', 'According to John 4:12, who gave the well and who are those mentioned to have drunk from it (in the verse)?', 'According to John 3:3, no one can see the kingdom of God unless __________.', 'According to John 3:13, no one has ever gone into heaven except the one who came from heaven, who is the one who came from heaven?', 'In the beginning of John chapter 8 (John 8:1), where did Jesus go?', 'What had the Jewish leaders decided to do to anyone who acknowledged that Jesus was the Messiah?', 'When the disciples saw Jesus approaching the boat, walking on water, what was their reaction?', 'According to John 6:2, after Jesus crossed to the far shore of the Sea of Galilee, why did the great crown follow him?', 'According to John 8:10-11, what was Jesus’ question to the adulterous woman and what was the woman’s response?', 'According to John 2:5, what did Jesus’ mother say to the servants at the wedding?', 'When Jesus heard that Lazarus was sick, what was his response and how many more days did he stay where he was?', 'According to John 10:4, why will the shepherd’s sheep follow him?', 'According to John 1:20, what did John confess freely?', 'What was Jesus’ first statement/question to the Samaritan woman?', 'What was Jesus’ response when the people asked him “What must we do to do the works God requires?”', 'According to John 1:35, what did John say when he saw Jesus passing by?', 'What did Jesus do after he took the loaves, before distributing to those who were seated?', 'According to John 1:39, around what time of the day were they in?', 'According to John 1:46, what did Jesus say to Philip', 'After the events at Cana of Galilee, where did Jesus go to, with whom did He go and how long did they stay? According to John 2:12.', 'According to John 2:19, what was Jesus’ answer to the Jews who responded to Him by saying: “What sign can you show us to prove your authority to do all this?”', 'According to John 2:23, why would Jesus not entrust himself to the people?', 'According to John 1:19, who sent people to ask John who he was and who were the people sent?', 'According to John 1:42, when Andrew brought his brother Simon to Jesus, what did Jesus say?', 'According to John 7:7, why did the world hate him?'];
    
      let gena = ['Samaria', 'because there was plenty of water, and people were coming and being baptized.', '…no one could perform the signs you are doing if God were not with him.”', '“Here truly is an Israelite in whom there is no deceit.”', '“Look, the Lamb of God, who takes away the sin of the world!”', 'the Pool of Siloam', '…and Jesus, tired as he was from the journey…', 'Bethsaida', 'two days; Galilee', 'forty-six years', 'John 6:1 - the Sea of Tiberias', 'unless they are born of water and the Spirit.', '“Rabbi, you are the Son of God; you are the king of Israel.”', 'Isaiah; “I am the voice of one calling in the wilderness, ‘Make straight the way for the Lord.’”', 'because the Jewish leaders there were looking for a way to kill him.', '(He meant Judas, the son of Simon Iscariot, who, though one of the Twelve, was later to betray him.)', '“Nazareth! Can anything good come from there?” Nathanael asked.', 'ceremonial washing', 'JOHN 6:15 – he withdrew (again) to a mountain (by himself)', 'no one', 'his finger', '…a Pharisee…who was a member of the Jewish ruling council.', 'JOHN 6:5 - five small barley loaves and two small fish', 'the Festival of Dedication', 'because his hour had not yet come.', 'five years – John 5:5', 'Jacob; himself(Jacob), his sons and his livestocks', 'unless they are born again.', 'the Son of Man.', 'Mount of Olives', 'they would be put out of the synagogue.', 'JOHN 6:19 – they were frightened', 'because they saw the signs he had performed by healing the sick.', '“Woman, where are they? Has no one condemned you?”; “No one, sir”', 'His mother said to the servants, “Do whatever he tells you.”', '“This sickness will not end in death. No, it is for God’s glory so that God’s Son may be glorified through it.”; two more days', 'because they know his voice', '“I am not the Messiah.”', '“Will you give me a drink?”', 'JOHN 6:29 - “The work of God is this: to believe in the one he has sent.”', '“Look, the Lamb of God!”', 'JOHN 6:11 – he gave thanks', 'about four in the afternoon', '[The next day Jesus decided to leave for Galilee. Finding Philip, he said to him, “Follow me.”', 'Capernaum; his mother and brothers and his disciples; a few days', '“Destroy this temple, and I will raise it again in three days.”', 'He knew all people', 'the Jewish leaders in Jerusalem; priests and Levites', 'And he brought him to Jesus. Jesus looked at him and said, “You are Simon son of John. You will be called Cephas” (which, when translated, is Peter)]', '“because I testify that its works are evil.”'];
  
      let recq = ['RECITE JOHN 7:38.', 'RECITE JOHN 10:11.', 'RECITE JOHN 6:63.', 'RECITE JOHN 6:35.', 'RECITE JOHN 11:35.', 'RECITE JOHN 10:10.', 'RECITE JOHN 3:30.', 'RECITE JOHN 1:34.', 'RECITE JOHN 8:36.', 'RECIE JOHN 3:6.', 'RECITE JOHN 3:16.', 'RECITE JOHN 9:4.', 'RECITE JOHN 1:6.', 'RECITE JOHN 1:14.', 'RECITE JOHN 8:58.'];
  
      let reca = ['Whoever believes in me, as Scripture has said, rivers of living water will flow from within them.', '“I am the good shepherd. The good shepherd lays down his life for the sheep.', 'The Spirit gives life; the flesh counts for nothing. The words I have spoken to you—they are full of the Spirit[e] and life.', 'Then Jesus declared, “I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.', 'Jesus wept.', 'The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.', 'He must become greater; I must become less.', 'I have seen and I testify that this is God’s Chosen One.', 'So if the Son sets you free, you will be free indeed.', 'Flesh gives birth to flesh, but the Spirit[b] gives birth to spirit.', 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.', 'As long as it is day, we must do the works of him who sent me. Night is coming, when no one can work. 5 While I am in the world, I am the light of the world.”', 'There was a man sent from God whose name was John.', 'The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.', '“Very truly I tell you,” Jesus answered, “before Abraham was born, I am!”'];
  
      let fillq = ['For my Father’s will is that __________ who looks to the __________ and believes in him shall have __________, and I will raise them up at the __________.” JOHN 6:40', 'In the temple courts he found people selling __________, sheep and __________, and others sitting at tables __________ money. JOHN 2:14', 'He is the one who comes after me, the __________ of whose __________ I am not worthy to __________. JOHN 1:27', 'Jesus said to them, “Very truly I tell you, unless you eat the flesh of the Son of Man and drink his blood, __________. JOHN 6:53', 'When Jesus saw him lying there and learned that he had been in this condition for a long time, he asked him, __________? JOHN 5:6', 'Philip answered him, “It would take __________ to buy enough bread for each one to have a bite!”. JOHN 6:7', 'When Jesus spoke again to the people, he said, “I am the __________ of the world. Whoever __________ me will never walk in __________, but will have the light of __________.” JOHN 8:12', 'Just as __________ lifted up the __________ in the __________, so the __________ of __________ must be lifted up. JOHN 3:14', 'He came as a __________ to testify concerning that __________, so that through him all might __________. JOHN 1:7', 'He was in the __________, and though the __________ was made through him, the __________ did not recognize him. JOHN 1:10'];
  
      let filla = ['everyone; Son; eternal life; last day', 'cattle; doves; exchanging', 'straps; sandals; untie', 'you have no life in you', '“Do you want to get well?”', 'more than half a year’s wages', 'light; follows; darkness; life', 'Moses; snake; wilderness; Son; Man', 'witness; light; believe', 'world; world; world'];
  
      let tfq = ['True or False: According to John 7:5, Jesus’ brothers did not believe in him.', 'True or False: What Jesus did in Cana of Galilee was the first of the signs through which He revealed His glory?', 'According to John 2:2, only Jesus was invited, his disciples were not.', 'True or False: Jesus went for the Festival of Tabernacles even though he said he was not going to attend?', 'True or False: According to John 4:54, the miracle where Jesus healed the son of a royal official who was close to death, was the third sign Jesus performed after coming from Judea to Galilee?', 'True or False: According to John 5:22, the father judges everyone?', 'True or False: When Jesus told the Jews: “You are doing the works of your own father.” their response was ““We are not illegitimate children. The only Father we have is Abraham.”', 'True or False: While Jesus was in Jerusalem at the Passover Festival, many people saw the signs he was performing and still refused to believe him. JOHN 2:23', 'True or False: John had only two disciples?', 'True or False: Jesus saw Nathanael under the olive tree before Philip called him?'];
  
      let tfa = ['TRUE - For even his own brothers did not believe in him.', 'TRUE - What Jesus did here in Cana of Galilee was the first of the signs through which he revealed his glory; and his disciples believed in him. – John 2:11', 'FALSE - and Jesus and his disciples had also been invited to the wedding.', 'TRUE - However, after his brothers had left for the festival, he went also, not publicly, but in secret. - John 7:10', 'FALSE - This was the second sign Jesus performed after coming from Judea to Galilee.', 'FALSE -  Moreover, the Father judges no one, but has entrusted all judgment to the Son…', 'FALSE - “We are not illegitimate children,” they protested. “The only Father we have is God himself.”', 'FALSE - Now while he was in Jerusalem at the Passover Festival, many people saw the signs he was performing and believed in his name.', 'FALSE - The next day John was there again with two of his disciples. – JOHN 1:35', 'FALSE - “I saw you while you were still under the fig tree before Philip called you.”'];
  
      let spellq = ['SPELL THE WORD.', 'SPELL THE WORD.', 'SPELL THE WORD.', 'SPELL THE WORD.', 'SPELL THE WORD.', 'SPELL THE WORD.', 'SPELL THE WORD.', 'SPELL THE WORD.', 'SPELL THE WORD.', 'SPELL THE WORD.'];
  
      let spella = ['C-A-P-E-R-N-A-U-M', 'B-E-T-H-A-N-Y', 'M-E-S-S-I-A-H', 'T-I-B-E-R-I-A-S', 'N-A-T-H-A-N-A-E-L', 'B-E-T-H-S-A-I-D-A', 'S-Y-N-A-G-O-G-U-E', 'G-A-L-I-L-E-E', 'C-A-I-A-P-H-A-S', 'P-H-A-R-I-S-E-E'];
    
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
  