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
        <div class="answer-text">${answer}</div>
        <div class="button-container">
          <button class="button" id="go-to-questions-btn">Go to Questions</button>
        </div>
      `;
  
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
          return 54; // Example: 5 questions for testing
        case 'recitation':
          return 28; // Example: 1 question for testing
        case 'fill-in-the-gap':
          return 31; // Example: 2 questions for testing
        case 'true-or-false':
          return 16; // Example: 1 question for testing
        case 'spelling':
          return 20; // Example: 1 question for testing
        default:
          return 0;
      }
    }
  
  
  
    let questions = {}; // Object to store questions by category
    
      // Example arrays of questions and answers
      let genq = ['According to Romans 8:16, what does the Spirit himself testify with our spirit?', 'According to Romans 4:25, why was He (Jesus Christ) delivered over to death, and why was he raised to life?', 'According to Romans 11:13, Paul was an apostle to which set of people?', 'According to Romans 6:9, what are the implications of Christ being raised from the dead?', "According to Romans 3:31, what was Paul's response to this question he asked: Do we, then, nullify the law by this faith?", 'According to Romans 13:11, "...our salvation is nearer now..." than when?', 'According to Romans 3:22, This righteousness is given through faith inwho and to who?', "According to Romans 6:14, why will sin no longer be 'your' master?", 'According to Romans 6:4, Christ was raised from the dead through what?', 'According to Romans 2:6, God will repay each person according to what?', 'According to Romans 3:2, what have the Jews been entrusted with?', 'According to Romans 5:11, we boast in God through what and what have we received from them?', 'According to Romans 6:8, if we dies with Christ, what do we believe?', 'According to Romans 14:9, for what reason did Christ die and return to life?', 'According to Romans 6:20, when you were slaves to sin, you were free from what?', 'According to Romans 1:11, why does Paul long to see them?', 'According to Romans 4:13, Abraham and his offspring did not receive the promise that he would be heir of the world through the law, but through what?', 'According to Romans 12:6-7, we have different gifts according to the grace given to each of us, mention five(5) of the seven gifts mentioned.', 'According to Romans 1:18: The wrath of God is being revealed from heaven against what?', 'According to Romans 16:22, who wrote down the book of Romans?', 'According to Romans 2:13, who are those that will be declared righteous?', 'According to Romans 8:3, why was the law powerless to do?', 'According to Romans 5:2, what do we boast in?', "According to Romans 10:1, what was Paul's heart's desire and prayer to God for the Israelites?", 'Mention 10 human characters that were mentioned in the entire book of Romans (this does not include Jesus Christ).', 'According to Romans 1:1. who wrote the book of Romans, how did he identify himself, what was he called to be and what was he set apart to do?', 'According to Romans 5:14, Adam is a pattern of who?', 'According to Romans 13:2, what will whoever rebel against the authority do to themselves?', 'According to Romans 3:27, because of what law is boasting excluded?', 'According to Romans 8:2, what does the law of the Spirit give, and what has it set you free from?', "According to Romans 16:7, who were Paul's fellow jews who had been in prison with him?", 'According to Romans 5:20, The law was brought in so that the trespass might increase. But what happens where sin increases?', 'According to Romans 3:9, what was Paul\'s justification to his response to the question "Do we have any advantage?" - Not at all!?', 'According to Romans 5:9, if anyone does not have the Spirit of Christ, what happens?', 'According to Romans 6:15, what was Paul\'s response to himself when he asked the question: "What then? Shall we sin because we are not under the law but under grace?"?', 'According to Romans 16:3, who are those who risked their lives for Paul?', 'According to Romans 3:11, who is righteous?', "According to Romans 11:3, what was Elijah's appeal to God against Israel?", 'According to Romans 16:5, who was the first convert to Christ in the province of Asia?', 'According to Romans 1:9-10, how often does Paul remember the Romans in his prayers?', 'According to Romans 6:3, all of us who were baptized into Christ Jesus were baptized into what?', 'According to Romans 8:5, Those who live according to the flesh have their minds set on what?', 'According to Romans 1:28, God gave them over to a depraved mind so that what?', 'According to Romans 7:8, apart from the law, what happened?', 'According to Romans 11:4, when God was responding to Elijah, how many people have God reserved that have not bowed their knee to Baal?', 'According to Romans 1:29-31, mention five characteristics of the godless and wicked?', "According to Romans 2:5, on what day will God's righteous judgement be revealed?", 'According to Romans 3:19, Now we know that whatever the law says, it says to who?', 'According to Romans 3:20, if no one will be declared righteous in God’s sight by the works of the law, what then is the purpose of the law?', 'According to Romans 3:22-23, why is there no difference between Jew and Gentile?', 'According to Romans 13:3, what does Paul recommend to those who want to be free from fear of the one in authority?', 'According to Romans 1:7. who did Paul address the letter to and what are they called to be?', 'According to Romans 2:4, God’s kindness is intended to do what?', 'According to Romans 9:4, When Paul said "...Theirs is the adoption to sonship; theirs the divine glory, the covenants, the receiving of the law, the temple worship and the promises." who was he referring to?'];
    
      let gena = ['that we are God’s children.', 'for our sins, for our justification', 'the Gentiles', 'he cannot die again; death no longer has mastery over him', 'Not at all! Rather, we uphold the law.', 'when we first believed.', 'through faith in Jesus Christ, to all who believe.', 'because you are not under the law, but under grace.', 'through the glory of the Father', 'according to what they have done', 'the very words of God', 'through our Lord Jesus Christ, through whom we have now received reconciliation', 'we believe that we will also live with him.', '(so) that he might be the Lord of both the dead and the living.', 'from the control of righteousness.', 'that he may impart to them some spiritual gift (to make them strong)', 'through the righteousness that comes by faith', 'prophesying, serving, teaching, to encourage, giving, to lead, to show mercy', 'all the godlessness and wickedness of people', 'Tertius', 'those who obey the law', 'because it was weakened by the flesh', 'we boast in the hope of the glory of God', 'that they may be saved', 'Paul, Abraham, Sarah, Adam, Moses, Isaac, Sarah, Rebekah, Jacob, Esau, Hosea, Isaiah, Pharaoh, Elijah, David, Jesse, Phoebe, Priscilla, Aquila, Epenetus, Mary, Andronicus, Junia, Ampliatus, Urbanus, Stachys, Apelles, Aristobulus, Herodion, Narcissus, Tryphena, Tryphosa, Persis, Rufus, Asyncritus, Phlegon, Hermes, Patrobas, Hermas, Philologus, Julia, Nereus, Olympas, Timothy, Lucius, Jason, Sosipater, Tertius, Gaius, Erastus, Quartus', 'a servant of Christ Jesus, called to be an apostle, set apart for the gospel of God', '...Adam, who is a pattern of the one to come.', '...will bring judgment on themselves.', 'because of the law that requires faith', 'the law of the Spirit gives life; free from the law nof sin and death', 'Andronicus and Junia', 'grace increased all the more', 'Jews and Gentiles alike are all under the power of sin.', 'they do not belong to Christ.', 'By no means!', 'Priscilla and Aquila', 'no one (not even one)', '“Lord, they have killed your prophets and torn down your altars; I am the only one left, and they are trying to kill me”', 'Epenetus', 'at all times', 'his death', 'on what the flesh desires', 'they do what ought not to be done', 'sin was dead', 'seven thousand', 'wickedness, evil, greed, depravity, envy, murder, strife, deceit, malice, gossip, slander, God-haters, insolent, arrogant, boastful, disobey their parents, no understanding, no fidelity, no love, no mercy', 'the day of God’s wrath', 'to those who are under the law', 'through the law we become conscious of our sin.', '(for) all have sinned and fall short of the glory of God', 'do what is right (and you will be commended)', 'all in Rome, called to be his holy people', 'lead (you) to repentance', 'the people of Israel'];
  
      let recq = ['Recite Romans 10:9', 'Recite Romans 8:31', 'Recite Romans 8:1', 'Recite Romans 11:29', 'Recite Romans 14:17', 'Recite Romans 6:1', 'Recite Romans 5:8', 'Recite Romans 8:7', 'Recite Romans 8:19', 'Recite Romans 6:23', 'Recite Romans 12:9', 'Recite Romans 8:8', 'Recite Romans 10:13', 'Recite Romans 8:28', 'Recite Romans 12:10', 'Recite Romans 2:11', 'Recite Romans 8:14', 'Recite Romans 3:23', 'Recite Romans 8:37', 'Recite Romans 14:7', 'Recite Romans 4:4', 'Recite Romans 12:1', 'Recite Romans 6:7', 'Recite Romans 6:12', 'Recite Romans 12:2', 'Recite Romans 1:16', 'Recite Romans 3:28', 'Recite Romans 10:17'];
  
      let reca = ['If you declare with your mouth, “Jesus is Lord,” and believe in your heart that God raised him from the dead, you will be saved.', 'What, then, shall we say in response to these things? If God is for us, who can be against us?', 'Therefore, there is now no condemnation for those who are in Christ Jesus', 'for God’s gifts and his call are irrevocable.', 'For the kingdom of God is not a matter of eating and drinking, but of righteousness, peace and joy in the Holy Spirit', 'What shall we say, then? Shall we go on sinning so that grace may increase?', 'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.', 'The mind governed by the flesh is hostile to God; it does not submit to God’s law, nor can it do so.', 'For the creation waits in eager expectation for the children of God to be revealed.', 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.', 'Love must be sincere. Hate what is evil; cling to what is good.', 'Those who are in the realm of the flesh cannot please God.', 'for, “Everyone who calls on the name of the Lord will be saved.”', 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.', 'Be devoted to one another in love. Honor one another above yourselves.', 'For God does not show favoritism.', 'For those who are led by the Spirit of God are the children of God.', 'for all have sinned and fall short of the glory of God', 'No, in all these things we are more than conquerors through him who loved us.', 'For none of us lives for ourselves alone, and none of us dies for ourselves alone.', 'Now to the one who works, wages are not credited as a gift but as an obligation.', 'Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship.', 'because anyone who has died has been set free from sin.', 'Therefore do not let sin reign in your mortal body so that you obey its evil desires.', 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will.', 'For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile.', 'For we maintain that a person is justified by faith apart from the works of the law.', 'Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.'];
  
      let fillq = ['Fill in the gaps (Romans 8:29): For those God foreknew he also _____________ to be _____________ to the image of his Son, that he might be the _____________ among many _____________ and sisters.', 'Fill in the gaps (Romans 5:10): For if, while we were God’s _____________, we were reconciled to him through the _____________ of his Son, how much more, having been reconciled, shall we be _____________ through his _____________!', 'Fill in the gaps (Romans 4:7-8): Blessed are those whose _____________ are forgiven, whose sins are _____________. Blessed is the one whose sin the Lord will never _____________ against them.', 'Fill in the gaps (Romans 11:33): Oh, the depth of the riches of the _____________ and _____________ of God! How unsearchable his _____________, and his _____________ beyond tracing out!', 'Complete this verse (Romans 12:21): Do not be overcome by evil, but _____________.', 'Fill in the gaps (Romans 3:21): But now apart from the law the _____________ of God has been made known, to which the _____________ and the _____________ testify.', 'Fill in the gaps (Romans 3:13): “Their throats are open _____________; their tongues practice _____________. The poison of _____________ is on their lips.”', 'Complete this verse (Romans 5:5): And hope does not put us to shame, because God’s love has been poured out into our hearts through the Holy Spirit, _____________.', 'Fill in the gaps (Romans 5:3-4): Not only so, but we also glory in our sufferings, because we know that _____________ produces perseverance; perseverance, _____________; and _____________, hope.', 'Fill in the gaps (Romans 5:18): Consequently, just as one _____________ resulted in condemnation for all people, so also one _____________ act resulted in _____________ and life for all _____________., Fill in the gaps (Romans', 'Fill in the gaps (Romans 4:5): ...to the one who does not work but trusts God who _____________ the _____________, their faith is credited as _____________.', 'Fill in the gaps (Romans 12:12): Be joyful in _____________, patient in _____________, faithful in _____________.', 'Fill in the gaps (Romans 14:3): The one who eats everything must not treat with _____________ the one who does not, and the one who does not eat everything must not _____________ the one who does, for God has _____________ them.', 'According to Romans 11:1, Paul in identifying who he is, writes: "I am an _____________ myself, a descendant of _____________, from the tribe of _____________."', 'Fill in the gaps (Romans 6:13): Do not offer any part of yourself to sin as an _____________ of wickedness, but rather offer yourselves to God as those who have been brought from _____________ to _____________; and offer every part of yourself to him as an instrument of _____________.', 'Complete this verse (Romans 13:5): Therefore, it is necessary to submit to the authorities, not only because of possible punishment but also as a _____________.', 'Fill in the gaps (Romans 1:14): I am obligated both to _____________ and _____________, both to the _____________ and the _____________.', 'Complete this verse (Romans 5:5): You see, at just the right time, when we were still powerless, _____________.', 'Fill in the gaps (Romans 8:26): In the same way, the Spirit helps us in our _____________. We do not know what we ought to _____________ for, but the Spirit himself _____________ for us through _____________ groans.', 'Fill in the gaps (Romans 1:17): For in the gospel the _____________ of God is revealed—a _____________ that is by faith from first to last, just as it is written: “The _____________ will live by _____________.”', 'Fill in the gaps (Romans 8:17): Now if we are _____________, then we are heirs—heirs of God and _____________ with Christ, if indeed we share in his _____________ in order that we may also share in his _____________.', 'Complete this phrase, According to Romans 10:15: “How beautiful are the feet _____________”', 'Complete this verse (Romans 13:14): Rather, clothe yourselves with the Lord Jesus Christ, and do not think about _____________.', 'Fill in the gaps (Romans 2:25): _____________ has value if you observe the law, but if you _____________ the law, you have become as though you had not been _____________.', 'Fill in the gaps (Romans 12:3): For by the grace given me I say to every one of you: Do not think of yourself more _____________ than you ought, but rather think of yourself with _____________ judgment, in _____________ with the faith God has _____________ to each of you.', 'Fill in the gaps (Romans 3:25): God presented Christ as a sacrifice of _____________, through the shedding of his blood—to be received by _____________. He did this to demonstrate his _____________, because in his _____________ he had left the sins committed beforehand unpunished', 'Complete this verse (Romans 4:3): Abraham believed God, and it was _____________.', 'Complete this verse (Romans 11:22): Consider therefore the kindness and sternness of God: sternness to those who fell, but kindness to you, provided that you continue in his kindness. Otherwise, _____________.', 'Fill in the gaps (Romans 1:4): "and who through the Spirit of _____________ was appointed the Son of God in _____________ by his resurrection from the _____________: _____________ our Lord."', 'Fill in the gaps (Romans 2: 7): To those who by _____________ in doing good seek glory, _____________ and _____________, he will give _____________.', 'Complete this verse (Romans 9:9): For this was how the promise was stated: “At the appointed time I will return, _____________.”'];
  
      let filla = ['predestined; conformed; firstborn; brothers', 'enemies, death, saved, life', 'transgressions, covered, count', 'wisdom, knowledge, judgements, paths', 'but overcome evil with good.', 'righteousness, Law, Prophets', 'graves, deceit, vipers', 'who has been given to us.', 'suffering, character, character', 'trespass, righteous, justification, people', 'justifies, ungodly, righteousness', 'hope, affliction, prayer', 'contempt, judge, accepted', 'Israelite, Abraham, Benjamin', 'instrument, death, life, instrument', 'a matter of conscience.', 'Greeks, non-Greeks, wise, foolish', 'Christ died for the ungodly.', 'weakness; pray, intercedes, wordless', 'righteousness, righteousness, righteous, faith', 'children, co-heirs, sufferings, glory', 'of those who bring good news!', 'how to gratify the desires of the flesh.', 'Circumcision, break, circumcised', 'highly, sober, accordance, distributed', 'atonement, faith, righteousness, forbearance', 'credited to him as righteousness', 'you also will be cut off.', 'holiness, power, dead, Jesus Christ', 'persistence, honor, immortality, eternal life', 'Sarah will have a son.”'];
  
      let tfq = ['True or False?: According to Romans 5:12, death came to all people, because one man sinned.', 'True or False?: According to Romans 8:39, only demons can separate us from the love of God that is in Christ Jesus our Lord.', 'True or False?: According to Romans 4:2, Abraham was justified by works and he had something to boast about.', "True or False?: According to Romans 4:10 Abraham's faith was credited to him as rightousness immediately he was circumcised.", 'True or False?: According to Romans 14:14, Paul was convinced that some things are unclean in and of themselves.', 'True or False?: According to Romans 9:6, ...not all who are descended from Israel are Israel.', 'True or False?: According to Romans 11:32, For God has bound everyone over to obedience so that he may have mercy on them all.', 'True or False?: According to Romans 8:33, Christ is the one who condemns.', 'True or False?: According to Romans 1:25 (speaking about the wicked and godless), They exchanged the lie about God for a truth.', "According to Romans 1:32, they (the godless and wicked people) know God's righteous decree.", 'True or False?: According to Romans 14:1, we should be intolerant of the one whose faith is weak.', "True or False?: According to Romans 16:7, Andronicus and Junia were Paul's converts.", 'True or False?: According to Romans 2:12, All who sin apart from the law will be judged by the law.', 'True or False?: According to Romans 9:10, Rebekah’s children were conceived at different times.', 'True or False?: According to Romans 1:13, Paul had visited Rome a few times.', 'True or False?: According to Romans 2:2, God’s judgment against those who do such things is based on righteousness.'];
  
      let tfa = ['FALSE (...and in this way death came to all people because all sinned)', 'FALSE (For I am convinced that neither death nor life, neither angels nor demons)', 'FALSE (If, in fact, Abraham was justified by works, he had something to boast about—but not before God.)', 'FALSE (It was not after, but before!)', 'FALSE (I am convinced, being fully persuaded in the Lord Jesus, that nothing is unclean in itself.)', 'TRUE (It is not as though God’s word had failed. For not all who are descended from Israel are Israel.)', 'FALSE (For God has bound everyone over to disobedience so that he may have mercy on them all.)', 'FASLSE (Who then is the one who condemns? No one.)', 'FALSE (They exchanged the truth about God for a lie)', 'TRUE (Although they know God’s righteous decree...)', 'FASLSE (Accept the one whose faith is weak)', 'FALSE (Greet Andronicus and Junia, my fellow Jews who have been in prison with me. They are outstanding among the apostles, and they were in Christ before I was.)', 'FALSE (All who sin apart from the law will also perish apart from the law)', 'FALSE (Not only that, but Rebekah’s children were conceived at the same time by our father Isaac.)', 'FALSE (he has been prevented from visiting them)', 'FALSE (is based on truth)'];
  
      let spellq = ['Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word', 'Spell the word'];
  
      let spella = ['C-E-N-C-H-R-E-A-E', 'H-E-R-O-D-I-O-N', 'A-B-R-A-H-A-M', 'A-R-I-S-T-O-B-U-L-U-S', 'S-O-S-I-P-A-T-E-R', 'A-T-O-N-E-M-E-N-T', 'T-R-A-N-S-G-R-E-S-S-I-O-N', 'I-L-L-Y-R-I-C-U-M', 'N-A-R-C-I-S-S-U-S', 'F-O-R-B-E-A-R-A-N-C-E', 'C-O-V-E-N-A-N-T', 'C-I-R-C-U-M-C-I-S-I-O-N', 'P-H-A-R-A-O-H', 'R-I-G-H-T-E-O-U-S-N-E-S-S', 'A-N-D-R-O-N-I-C-U-S', 'P-A-T-R-I-A-R-C-H', 'A-S-Y-N-C-R-I-T-U-S', 'P-H-I-L-O-L-O-G-U-S', 'I-S-A-I-A-H', 'A-M-P-L-I-A-T-U-S'];
    
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
  