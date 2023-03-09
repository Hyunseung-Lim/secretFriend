import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css'

export const MainPage = (props) => {

    return(
        <div className='main'>
            <div className='header'>
                <div className='title'>
                    채팅
                </div>
                <img className='icon' src={'/images/add_chat.png'} alt ={'add_chat'}/>
            </div>
            <Link to={{pathname:'/chat',state:{title:'/'}}} className='chat'>
                <div className='emoji'>&#x1F600;</div>
                <div className='contents'>
                    <div className='name'>천사고용주 다솜</div>
                    <div className='description'>#상냥함 #맨날 배부름</div>
                </div>
            </Link>
            <Link to={{pathname:'/',state:{title:'/'}}} className='chat'>
                <div className='emoji'>👿</div>
                <div className='contents'>
                <div className='name'>악덕고용주 다솜</div>
                    <div className='description'>#ISFP #귀찮은 말투 #맨날 배고픔</div>
                </div>
            </Link>            
        </div>
    )
}