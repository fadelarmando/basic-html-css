// let button = document.getElementById('changeBackground');
// button.addEventListener('click', () => {
//     document.body.style.backgroundColor = '#94e3d3';
// });

// Assign all elements
// const demoId = document.getElementById('demo');
// const demoClass = document.getElementsByClassName('demo');
// const demoTag = document.getElementsByTagName('article');
// const demoQuery = document.querySelector('#demo-query');
// const demoQueryAll = document.querySelectorAll('.demo-query-all');

// // Change border of ID demo to purple
// demoId.style.border = '2px solid purple';

// // Change border of class demo to orange
// for (i = 0; i < demoClass.length; i++) {
//     demoClass[i].style.border = '2px solid orange';
// }

// // Change border of tag demo to blue
// for (i = 0; i < demoTag.length; i++) {
//     demoTag[i].style.border = '2px solid blue';
// }

// // Change border of ID demo-query to red
// demoQuery.style.border = '2px solid red';

// // Change border of class query-all to green
// demoQueryAll.forEach(query => {
//     query.style.border = '2px solid green';
// });

// Function to modify the text content of the paragraph
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an event listener.";
}

// Listen for click event
const button = document.querySelector('button');
button.addEventListener('click', changeText);