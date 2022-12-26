import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'



const BoardUpdate = ({history,match}) => {
  const refTitle=useRef();
  const no=match.param.bno;
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
    if(!window.confirm(`${JSON.stringify(form,null,4)} 를 등록하시겠습니까?`)) return
    await axios.post('/board/update',form);
    window.history.push('/board/list');
  }
  const callAPI=async()=>{
    const result=await axios.get(`/board/read/${no}`);
    setForm(result.data);
}

  useEffect(()=>{
    callAPI();
  },[])
  return (
    <div>
      <input ref={refTitle} onChange={onChange} name='title' value={title} placeholder='Tittle'/>
      <hr/>
      <input readOnly onChange={onChange} name='writer' value={writer} placeholder='writer'/>
      <hr/>
      <textarea onChange={onChange} name='content' value={content} cols={80} rows={15} placeholder="Content"/>
      <hr/>
      <button onClick={onSubmit}>Register</button>
      <button>수정</button>


    </div>
  )
}

export default BoardUpdate