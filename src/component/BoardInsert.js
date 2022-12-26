import axios from 'axios';
import React, { useRef, useState } from 'react'



const BoardInsert = (history) => {
  const refTitle=useRef();
  const[form,setForm]=useState({
    title:'', writer:'blue',content:''
  })
  const {title, writer, content}=form;
  const onChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const onSubmit= async()=>{
    if(title==''){
      alert('제목을 입력하세요')
      refTitle.current.focus();
      return;
    }
    if(!window.confirm(`${JSON.stringify(form,null,4)} 를 등록하시겠습니까?`))return;
    await axios.post('/board/insert',form);
    history.push('/board/list');
  }
  return (
    <div>
      <input ref={refTitle} onChange={onChange} name='title' value={title} placeholder='Tittle'/>
      <hr/>
      <input readOnly onChange={onChange} name='writer' value={writer} placeholder='writer'/>
      <hr/>
      <textarea onChange={onChange} name='content' value={content} cols={80} rows={15} placeholder="Content"/>
      <hr/>
      <button onClick={onSubmit}>Register</button>
      <button>Reset</button>


    </div>
  )
}

export default BoardInsert