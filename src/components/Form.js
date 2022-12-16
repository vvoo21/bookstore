import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
  });

  const handleInput = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const book = {
      title: newBook.title,
      author: newBook.author,
      genre: newBook.genre,
      id: uuidv4(),
    };
    dispatch(addBook(book));
    setNewBook({
      title: '',
      author: '',
      genre: '',
    });
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input id="title" type="text" name="title" value={newBook.title} onInput={handleInput} placeholder="Book title" />
        <input id="author" type="text" name="author" value={newBook.author} onInput={handleInput} placeholder="Author" />
        <select name="genre" id="genre" value={newBook.genre} onInput={handleInput} placeholder="Genre">
          <option value="" disabled>Genre</option>
          <option value="fantasy">Fantasy</option>
          <option value="science fiction">Science Fiction</option>
          <option value="action">Action</option>
          <option value="mystery">Mystery</option>
          <option value="thriller">Thriller</option>
          <option value="romance">Romance</option>
          <option value="magical realism">Magical Realism</option>
          <option value="children">Children’s</option>
          <option value="biography">Biography</option>
          <option value="food & drink">Food & Drink</option>
          <option value="self-help">Self-help</option>
          <option value="economy">Economy</option>
        </select>
        <button type="submit" onClick={handleClick}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
