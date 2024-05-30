document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('changing-text');
    // const texts = ["I am a Data Scientist", "I am a Data Analyst"];
    const texts = ["Scientist", "Analyst"];
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        textElement.textContent = texts[currentIndex];
    }, 2000); // Change text every 2 seconds
});

// document.addEventListener('DOMContentLoaded', () => {
//     const textElement = document.getElementById('changing-text');
//     const texts = [" Scientist", " Analyst"];
//     let currentIndex = 0;

//     textElement.addEventListener('animationiteration', () => {
//         currentIndex = (currentIndex + 1) % texts.length;
//         textElement.textContent = texts[currentIndex];
//     });
// });