document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.getElementById('paragraph');

    // Task 1: Highlight words over 8 characters long
    const words = paragraph.textContent.split(' ');
    paragraph.innerHTML = words.map(word => word.length > 8 ? `<span style="background-color: yellow;">${word}</span>` : word).join(' ');

    // Task 2: Add a link back to the source
    const sourceLink = document.createElement('a');
    sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";
    sourceLink.textContent = "Source";
    paragraph.insertAdjacentElement('afterend', sourceLink);

    // Task 3: Split each sentence on separate lines
    paragraph.innerHTML = paragraph.innerHTML.replace(/\./g, '.<br>');

    // Task 4: Count the number of words
    const wordCount = words.length;
    const heading = document.querySelector('h1');
    heading.insertAdjacentHTML('afterend', `<p>Word Count: ${wordCount}</p>`);

    // Task 5: Replace question marks and exclamation marks
    paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, '🤔').replace(/!/g, '😲');
});
