import React, {useContext} from 'react'
import { BookContext } from '../Contexts/BookContext'
import './components.css'

function NavBar() {
    const {books} = useContext(BookContext)
    return books.length ? (
        <div >
            <h2>Welcome to Book keeper</h2>
            <h5>You have total {books.length} books to read</h5>
        </div>
        ) : (
            <div>
                <h2>Welcome to Book keeper</h2>
                <h5>You've no Books to read</h5>
            </div>
        )
}

export default NavBar
