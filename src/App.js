import "./App.css";
import BooksForm from "./Components/BooksForm";
import NavBar from "./Components/NavBar";
import BooksShow from "./Components/BooksShow";
import BookContextProvider from "./Contexts/BookContext";
import '../src/Components/components.css'

function App() {
  return (
    <BookContextProvider>
      <div className="container">
      <NavBar />
      <BooksShow />
      <BooksForm />
      </div>
    </BookContextProvider>
  );
}

export default App;
