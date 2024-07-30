import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom'
 
export default function Room() {
    const {roomid}=useParams();
const meeting= async(element)=>{
    const appID=1154001292;
    const serverSecret="7d6f49fcf44ec1b2720279fe1b193226";
    const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(      appID,serverSecret,roomid,Date.now().toString(),
        "VidEz"
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
