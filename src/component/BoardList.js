import axios from 'axios';
import React, { useEffect,useState  } from 'react'
import './Paging.css';
import Table from 'react-bootstrap/Table';
import BoardItem from './BoardItem';
import Pagination from "react-js-pagination";


const BoardList = () => {
    const [boards,setBoards]=useState();
    const [total,setTotal]=useState(0)
    const [word,setWord]=useState();
    const [page, setPage] = useState(1);

        const callAPI= async()=>{
            const result=await axios.get(`/board/list?page=${page}&word=${word}`)
            setBoards(result.data.list);
            setTotal(result.data.total);
        };
        useEffect(()=>{
            callAPI();
          }, [page]);

    const onKeyDown=(e)=>{
        if(e.keyCode ===13){
            setPage(1);
            callAPI();
        }
    }

    if(!boards) return <h3>데이터를 불러오는 중입니다...</h3>
  return (
    <div>
        
        <h3>게시글수 : {total}</h3>
        <input placeholder='검색어'
        value={word} 
        onChange={(e)=>setWord(e.target.value)}
        onKeyDown={onKeyDown}
        />
   
        
            <Table>
                 <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Writer</th>
                        <th>Date</th>
                    </tr>
                 </thead>
                {boards.map(board=>
                    <BoardItem key={board.bno} board={board}/>
                    )}
            </Table>

<Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={total}
            pageRangeDisplayed={10}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={(e)=>setPage(e)}
/>

    </div>
  )
}

export default BoardList