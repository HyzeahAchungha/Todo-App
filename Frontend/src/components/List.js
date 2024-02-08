import axios from 'axios'
import React from 'react'
import {BiEditAlt} from 'react-icons/bi'
import {BsTrash} from 'react-icons/bs'
import { baseURL } from '../Utils/Constant'



const List = ({id,task,setUpdateUI,updateMode}) => {

const removeTask=()=>{
axios.delete(`${baseURL}/delete/${id}`)
.then((res)=>{
    console.log(res);
    setUpdateUI((PrevState)=>!PrevState )
})
}

  return (
    <li>
      {task} 
      <div className='icon_holder'>
      <BiEditAlt className='icon' onClick={()=>updateMode (id,task)} />
      <BsTrash className='icon' onClick={removeTask}/>
        </div> 
    </li>
  )
}

export default List