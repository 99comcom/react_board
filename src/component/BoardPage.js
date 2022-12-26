import React from 'react'
import { Link, Route } from 'react-router-dom'
import BoardInsert from './BoardInsert'
import BoardList from './BoardList'
import BoardRead from './BoardRead'
import BoardUpdate from './BoardUpdate'

const BoardPage = () => {
  return (
    <div>
        <div className='sub_menu'>
        <Link to='/board/list'>list</Link>
        <Link to='/board/insert'>insert</Link>
        </div> 
        <Route path="/board/list" component={BoardList}/>
        <Route path="/board/insert" component={BoardInsert}/>
        <Route path="/board/read/:bno" component={BoardRead}/>
        <Route path="/board/update/:bno" component={BoardUpdate}/>
    </div>
  )
}

export default BoardPage