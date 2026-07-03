import { useState } from "react";

export default function Notifications() {

const [notifications,setNotifications]=useState([

{
id:1,
title:"New Claim Submitted",
message:"Claim CLM1008 has been submitted.",
priority:"High",
time:"10 mins ago",
read:false
},

{
id:2,
title:"Monthly Report Ready",
message:"June analytics report is available.",
priority:"Medium",
time:"30 mins ago",
read:false
},

{
id:3,
title:"New Member Registered",
message:"One new member has joined the PBM plan.",
priority:"Low",
time:"1 hour ago",
read:true
},

{
id:4,
title:"API Health Check",
message:"All backend services are running normally.",
priority:"Low",
time:"2 hours ago",
read:true
}

]);

const markRead=(id)=>{

setNotifications(

notifications.map(item=>

item.id===id

?{...item,read:true}

:item

)

)

}

return(

<div>

<h2>Notifications</h2>

{

notifications.map(item=>(

<div className="notifyCard" key={item.id}>

<div className="d-flex justify-content-between">

<h5>{item.title}</h5>

<span className={

item.priority==="High"

?"badge bg-danger":

item.priority==="Medium"

?"badge bg-warning text-dark"

:"badge bg-success"

}>

{item.priority}

</span>

</div>

<p>{item.message}</p>

<small>{item.time}</small>

<br/><br/>

{

!item.read &&

<button

className="btn btn-primary btn-sm"

onClick={()=>markRead(item.id)}

>

Mark as Read

</button>

}

{

item.read &&

<span className="badge bg-secondary">

Read

</span>

}

</div>

))

}

</div>

)

}