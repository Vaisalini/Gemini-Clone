import React,{useState } from 'react'
import { useContext } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Sidebar = () => {
     const[extended,setExtended]=useState(false)
     const {onSent,prevPrompts,setRecent,newChat}=useContext(Context)

     const loadPrompt=async(prompt)=>{
        setRecent(prompt)
        await onSent(prompt)
     }
  return (
    <div>
        <div className='sidebar'>
            <div className='top'>
               <img onClick={()=>setExtended(prev=>!prev)}className='menu' src={assets.menu_icon} alt=''/>
               <div onClick={()=>newChat()}className='newchat'>
                <img src={assets.plus_icon}/>
                {extended?<p>New Chat</p>:null}
               </div>
               {extended ?
               <div className='recent'>
                <p className='recent-title'>Recent</p>
                {prevPrompts.map((item,index)=>(
                     <div key={index} onClick={()=>loadPrompt(item)} className='recent-entry'>
                     <img src={assets.message_icon} alt=''/>
                     <p>{item.slice(0,18)}...</p>
                 </div>
                ))}
                
               </div>:null
}
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon}/>
                    {extended?<p>Help</p>:null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon}/>
                    {extended?<p>History</p>:null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon}/>
                    {extended?<p>Settings</p>:null}
                </div>


            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
