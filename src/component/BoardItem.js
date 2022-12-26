import React from 'react'
import { Link } from 'react-router-dom';



const BoardItem = ({board}) => {
    const {bno,title,writer,regDate}= board;
  return (
    <>
        <tr>
            <td>{bno}</td>
            <td><Link to={`/board/read/${bno}`}>{title}</Link></td>
            <td>{writer}</td>
            <td>{regDate}</td>
        </tr>
    </>
  )
}

export default BoardItem