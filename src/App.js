import "./App.css";
import BooksForm from "./Components/BooksForm";
import NavBar from "./Components/NavBar";
import BooksShow from "./Components/BooksShow";
import BookContextProvider from "./Contexts/BookContext";

function App() {
  return (
    <BookContextProvider>
      <NavBar />
      <BooksShow />
      <BooksForm />
    </BookContextProvider>
  );
}

export default App;
