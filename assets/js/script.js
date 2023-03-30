const form = document.getElementById('stringForm');
const stringInput = document.getElementById('inputString');
const emailInput = document.getElementById('email');
const matricInput = document.getElementById('matric');
const aboutInput = document.getElementById('about');
const stringInfo = document.getElementById('stringInfo');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputString = stringInput.value;
  const email = emailInput.value;
  const matricNo = matricInput.value;
  const about = aboutInput.value;

  const charCount = inputString.length;
  const wordCount = inputString.split(' ').length;
  const reverseString = inputString.split('').reverse().join('');
  const upperCaseString = inputString.toUpperCase();
  const lowerCaseString = inputString.toLowerCase();

  stringInfo.innerHTML = `
    <h2>Results</h2>
    <p>Input String: ${inputString}</p>
    <p>Number of Characters: ${charCount}</p>
    <p>Number of Words: ${wordCount}</p>
    <p>Reverse String: ${reverseString}</p>
    <p>Uppercase String: ${upperCaseString}</p>
    <p>Lowercase String: ${lowerCaseString}</p>
    <p>Email: ${email}</p>
    <p>Matric No: ${matricNo}</p>
    <p>About me: ${about} </p>

  `;
});

