import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState  } from 'react'
import {v4 as uuid} from 'uuid'
import {AiOutlineDelete} from 'react-icons/ai'
import { useEffect } from 'react'

function Home() {
  const id = uuid()
  const [newItem,setNewItem] = useState('')
  const [items,setItems] = useState([])
  
  
    const addTodo = () => {
      if(!newItem) {
        alert('enter something')
        return;
      }
      const item = {
        id:id,
        text:newItem
      }
      setItems(oldList=>[...oldList,item])
      setNewItem("")
      localStorage.setItem('items',JSON.stringify(items))
    }
 
  useEffect(()=> {
    const data= localStorage.getItem('items')
    if(data !== null) setItems(JSON.parse(data))
    
  },[])


    const deleteItem = (id)=>{
    let data = JSON.parse(localStorage.getItem('items'))  
    const newArray = data.filter(item=>item.id!==id)
    localStorage.setItem('items',JSON.stringify(newArray))
    setItems(newArray)
    // const newArray = items.filter(item=>item.id!==id)
    // setItems(newArray)
  }

  return (
    <>
        <Header />
        <div className='main bg-secondary'>
          <div className="input-group  input-group-md my-5 py-3 mx-5 px-5 w-50">
              <input type="text" className="form-control  rounded-2" value={newItem} onChange={(e)=>setNewItem(e.target.value)} />
              <div className="input-group-prepend col-md-5">
              <button onClick={addTodo} className="btn btn-outline-secondary bg-dark rounded-2 text-white mx-3 px-3" type="button">Add ToDo</button>
              </div>
         </div>
         <div>
          <ul className="list-group w-50 my-5 py-3 mx-5 px-5 rounded">
                {items.length===0 ? (<p className='text-white fs-3'>There is no todo to list ...</p>) :  items.map((item,index)=>(
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                      {index+1}.{item.text} 
                      <AiOutlineDelete style={{cursor:'pointer'}} onClick={()=>deleteItem(item.id)}/>   
                    </li>
                ))}
          </ul>
        </div>
        </div>
        <Footer />
    </>
  )
}

export default Home