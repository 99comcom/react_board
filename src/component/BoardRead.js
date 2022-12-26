import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const BoardRead = ({match, history}) => {
    const no=match.param.bno;
    const [form,setForm]=useState({
        bno:'',title:'',content:'',writer:'',regDate:''
    })
    const {bno,title,content,writer,regDate}=form;
    const callAPI=async()=>{
        const result=await axios.get(`/board/read/${no}`);
        setForm(result.data);
    }
    const onClickDelete=async()=>{
        if(!window.confirm(`${no}번 게시글을 삭제하시겠습니까?`))return;
        await axios.post(`/board/delete/${no}`);
        history.push(`/board/list`);

    }
    useEffect(()=>{
        callAPI();
    },[])
  return (
    <div>
        <h1>Board Information</h1>
        <h3>{bno} / {title}</h3>
        <h4>{regDate} ({writer})</h4>
        <hr/>
        <p>{content}</p>
        <button onClick={onClickDelete}>삭제</button>
        <Link to={`/board/update/${no}`}><button>수정</button></Link>
    </div>
  )
}

export default BoardRead