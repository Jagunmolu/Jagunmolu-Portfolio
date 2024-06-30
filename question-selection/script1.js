document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('category-select');
    const questionBoxesContainer = document.getElementById('question-boxes');
    let selectedQuestions = {}; // Object to store selected questions by category
  
    // Initialize selectedQuestions object
    selectedQuestions.general = [];
    selectedQuestions.recitation = [];
    selectedQuestions['fill-in-the-gap'] = [];
    selectedQuestions['true-or-false'] = [];
    selectedQuestions.spelling = [];
  
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
          toggleQuestionSelection(category, i, box);
        });
        questionBoxesContainer.appendChild(box);
      }
    }
  
    // Event listener for category select change
    categorySelect.addEventListener('change', function() {
      const selectedCategory = categorySelect.value;
      const numberOfQuestions = getNumberOfQuestions(selectedCategory);
      populateQuestionBoxes(selectedCategory, numberOfQuestions);
    });
  
    // Initial population of question boxes based on default selected category
    const initialCategory = categorySelect.value;
    const initialNumberOfQuestions = getNumberOfQuestions(initialCategory);
    populateQuestionBoxes(initialCategory, initialNumberOfQuestions);
  
    // Toggle selection of a question
    function toggleQuestionSelection(category, questionNumber, element) {
      if (element.classList.contains('selected')) {
        // Ask for confirmation before deselecting
        if (confirm('Are you sure you want to deselect this question?')) {
          element.classList.remove('selected');
          const index = selectedQuestions[category].indexOf(questionNumber);
          if (index !== -1) {
            selectedQuestions[category].splice(index, 1);
          }
        }
      } else {
        element.classList.add('selected');
        selectedQuestions[category].push(questionNumber);
      }
    }
  
    // Get number of questions for each category
    function getNumberOfQuestions(category) {
      switch (category) {
        case 'general':
          return 50;
        case 'recitation':
          return 10;
        case 'fill-in-the-gap':
          return 15;
        case 'true-or-false':
          return 10;
        case 'spelling':
          return 10;
        default:
          return 0;
      }
    }
  
    // Prompt confirmation before leaving or refreshing the page
    window.addEventListener('beforeunload', function(event) {
      event.preventDefault();
      event.returnValue = '';
    });
  
  });
  