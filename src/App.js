/* eslint-disable */
import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 코트 추천', 'React 독학']); //useState는 앞에는 변수, 뒤에는 변수를 변경할 함수가 생기는 배열이 생긴다
  let [따봉, 따봉변경] = useState(0);
  let blogTitleStyle = {color : 'gold', fontSize : '30px'}
  let posts = "서면 고기 맛집";

  // function 제목변경(){
  //   var newArray = [...글제목];
  //   newArray[0] = '여자 코트 추천';
  //   글제목변경(newArray);
  // }
  
  return (
    <div className="App">
      <div className = "black-nav">
        <div style={ blogTitleStyle }>동균`s Blog</div>
      </div>
      
      <div className = "list">
        <h3> { 글제목[0] } <span onClick={()=>{따봉변경(따봉 + 1)}}>👍</span> {따봉}</h3>
        <p>2월 17일 발행</p> 
        <hr/>

        <h3>{글제목[1]}</h3> 
        <p>5월28일 발행</p> 
        <hr></hr> 

        <h3>{글제목[2]}</h3> 
        <p>5월28일 발행</p> 
        <hr></hr> 
      </div>

      <Modal></Modal>
    </div>
  );
}


function Modal(){
  return (
      <div className='modal'>
        <h2>{글제목[0]}</h2>
        <p>날짜</p> 
        <p>상세내용</p>
      </div>
  )
}

export default App;
