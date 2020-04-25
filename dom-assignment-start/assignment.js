const getTask1 = document.querySelector('li:first-child');
const getTask2 = document.getElementById('task-1');

const getTitle1 = document.querySelector('title');
const getTitle2 = document.querySelector('head > title');

const getHeader = document.querySelector('h1');

getTask1.style.backgroundColor = 'black';
getTask2.style.color = 'white';

getTitle1.innerText = 'Assignment - Solved!';
getHeader.innerText = 'Assignment - Solved!'