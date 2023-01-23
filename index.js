
import { DateTime } from './luxon.js';
import Book from './Library.js';
let Books = JSON.parse(localStorage.getItem('Data')) || [];
const title = document.getElementById('title');
const author = document.getElementById('author');
const bookobj = new Book(author.value, title.value,Books);

bookobj.renderbooks();

document.getElementById('add-btn').onclick = (e) => {
  e.preventDefault();
  const bookitem = { Title: title.value, author: author.value };
  Books.push(bookitem);
  title.value = '';
  author.value = '';
  bookobj.ToLocalStorage(Books);
  // eslint-disable-next-line no-plusplus
  bookobj.renderbooks();
  document.querySelectorAll('.remove-btn').forEach((btn) => {
    Books = JSON.parse(localStorage.getItem('Data'));
    btn.addEventListener('click', (e) => {
      // eslint-disable-next-line no-use-before-define
      bookobj.removebook(e.target.id);
      // ToLocalStorage();
      bookobj.renderbooks();
      window.location.reload();
    });
  });
};

document.querySelectorAll('.remove-btn').forEach((btn) => {
  Books = JSON.parse(localStorage.getItem('Data'));
  btn.addEventListener('click', (e) => {
    bookobj.removebook(e.target.id);
    // ToLocalStorage();
    bookobj.renderbooks();
    window.location.reload();
  });
});
document.getElementById('add').onclick = () => {
  document.getElementById('list1').classList.add('close');
  document.getElementById('contact').classList.add('close');
  document.getElementById('form').classList.remove('close');
};
document.getElementById('list').onclick = () => {
  document.getElementById('list1').classList.remove('close');
  document.getElementById('form').classList.add('close');
  document.getElementById('contact').classList.add('close');
};
document.getElementById('contact1').onclick = () => {
  document.getElementById('list1').classList.add('close');
  document.getElementById('form').classList.add('close');
  document.getElementById('contact').classList.remove('close');
};

document.getElementById('date').innerHTML = DateTime.now().toFormat('MMMM dd, yyyy hh:mm');