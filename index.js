const div = document.querySelector('div');

const h1 = document.createElement('h1');

h1.textContent = 'Работа с DOM.';

div.before(h1)

const list = document.querySelector('#list')

const li = document.createElement('li');

const a = document.createElement('a');

a.href = 'https://doka.guide/js/dom';

a.textContent = 'Работа с DOM'

list.append(li);

li.append(a);


// document.body.style.background = 'red';
//         setTimeout(() => document.body.style.background = '', 3000)