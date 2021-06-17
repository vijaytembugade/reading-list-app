import React, {useContext}   from 'react'
import { BookContext } from '../Contexts/BookContext'

const BooksShow = () => {
    const {books, dispatch} = useContext(BookContext)
    return (
        <div>
            {
                books && books.map(book=>{
                    return (<div 
                    key={book.id}>{book.title}
                    <button onClick={()=>dispatch({type: "REMOVE_BOOK", id : book.id})}>Delete</button>
                    </div>)
                })
            }
        </div>
    )
}

export default BooksShow
