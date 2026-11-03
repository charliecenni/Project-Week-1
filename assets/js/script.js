const overlay = document.querySelector('.overlay');
const openForm = document.querySelector('#openForm');
const closeForm= document.querySelector('.closeForm');

openForm.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.style.display = 'block';
});

closeForm.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.style.display = 'none';
});