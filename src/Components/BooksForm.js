import React,{useContext, useState} from 'react'
import { BookContext } from '../Contexts/BookContext'

const BooksForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');

    const handleClick =()=>{
        if(title.length){
            dispatch({type : "ADD_BOOK", book : {title : title}});
            setTitle("");
        }else{
            alert('Input Field should not be empty')
        }
    }
    const handleKeyDown = (e)=>{
        if(e.key === "Enter"){
            handleClick()
        }
    }

    return (
        <div>
            <input required value={title} onKeyDown = {handleKeyDown} onChange={e => setTitle(e.target.value)}/>
            <button onClick={handleClick}>Add Book</button>
        </div>
    )
}

export default BooksForm
