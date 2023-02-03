import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom'
 
export default function Room() {
    const {roomid}=useParams();
const meeting= async(element)=>{
    const appID=1496313869;
    const serverSecret="4ea108e10031871312f298850bbd1736";
    const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(      appID,serverSecret,roomid,Date.now().toString(),
        "usama"
    )
const zp=ZegoUIKitPrebuilt.create(kitToken);
zp.joinRoom({
    container: element,
    scenario:{
        mode: ZegoUIKitPrebuilt.GroupCall,
},
})
}
    return (
    <div className='sm:bg-gradient-to-r from-sky-500 to-indigo-500' ref={meeting} style={{width:"100vw",height:"100vh" }}>
    </div>
  )
}
