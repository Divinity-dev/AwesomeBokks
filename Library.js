/* eslint-disable no-plusplus */
export default class Book {
  constructor(author, Title, Books) {
    this.author = author;
    this.Title = Title;
    this.Books = Books;
    this.index = 0;
  }

  ToLocalStorage = (b) => {
    localStorage.setItem('Data', JSON.stringify(b));
  };

  renderbooks() {
    if (localStorage.getItem('Data') !== null) {
      this.Books = JSON.parse(localStorage.getItem('Data'));
      document.getElementById('listitems').innerHTML = '';
      this.Books.forEach((bookitem) => {
        document.getElementById('listitems').innerHTML += `<tr>
        <td>"${bookitem.Title}" by ${bookitem.author}</td>
        <td><button class='remove-btn' id=${this.index++}>remove</button></td>
    </tr>`;
      });
    }
  }

  removebook(id) {
    let i = -1;
    this.Books = this.Books.filter(() => {
      i++;
      // eslint-disable-next-line eqeqeq
      return i != id;
    });
    localStorage.setItem('Data', JSON.stringify(this.Books));
  }
};
 


