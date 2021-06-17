import React, {createContext, useEffect, useReducer} from 'react'
import { bookReducer } from '../Reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, dispatch ] = useReducer(bookReducer, [], ()=>{
        const localStore = localStorage.getItem('bookList')
        return localStore ? JSON.parse(localStore)  : []
    })

    useEffect(()=>{
        localStorage.setItem('bookList', JSON.stringify(books))
    }, [books])
    // const [books, setBooks] = useState([
    //     {title : "Fault in our star", id: 1},
    //     {title : "Kite", id: 2},
    // ])

    // const addBooks = (title )=>{
    //     console.log(title)
    //     if(title.length !== 0)
    //     setBooks([...books, {title, id : Math.random()}])
    //     else
    //     alert('Input field should not be empty')
    // }

    // const removeBook = (id)=>{
    //     setBooks(books.filter(book =>{
    //         return book.id !== id;
    //     }
    //     ))
    // }
    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
