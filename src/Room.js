import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom'
 
export default function Room() {
    const {roomid}=useParams();
const meeting= async(element)=>{
    const appID=1829571097;
    const serverSecret="6ae78a2c10e98386aab4de8d2a348369";
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
    <div className='py-[10rem] sm:py-[1px] sm:bg-gradient-to-r from-sky-500 to-indigo-500' ref={meeting} style={{width:"100vw",height:"100vh" }}>
    </div>
  )
}
