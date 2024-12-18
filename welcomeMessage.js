const greeting = document.querySelector('#greeting');
const hour = new Date().getHours();
let message = 'Hello!';

if (hour < 12) message = 'Good Morning!';
else if (hour < 18) message = 'Good Afternoon!';
else message = 'Good Evening!';

greeting.textContent = message + " Welcome to my Portfolio!";