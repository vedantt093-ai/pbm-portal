import { useState } from "react";

export default function ClaimsSearch() {

const [claims,setClaims]=useState([

{
id:"CLM1001",
member:"John Smith",
drug:"Paracetamol",
amount:250,
status:"Pending",
date:"10-06-2026"
},

{
id:"CLM1002",
member:"Sara Khan",
drug:"Crocin",
amount:430,
status:"Approved",
date:"11-06-2026"
},

{
id:"CLM1003",
member:"David Miller",
drug:"Insulin",
amount:820,
status:"Rejected",
date:"12-06-2026"
},

{
id:"CLM1004",
member:"Vedant Kulkarni",
drug:"Vitamin D3",
amount:180,
status:"Pending",
date:"14-06-2026"
}

]);

const [search,setSearch]=useState("");

const updateStatus=(id,status)=>{

setClaims(

claims.map(item=>

item.id===id

?{...item,status}

:item

)

)

}

const filtered=claims.filter(item=>

item.member.toLowerCase().includes(search.toLowerCase())||

item.id.toLowerCase().includes(search.toLowerCase())||

item.drug.toLowerCase().includes(search.toLowerCase())

);

return(

<div>

<h2>Claim Approval Workflow</h2>

<input

className="form-control mb-4"

placeholder="Search Claim..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

<table className="table table-hover table-bordered">

<thead className="table-primary">

    <p>

<b>{filtered.length}</b> Claim(s) Found

</p>

<tr>

<th>ID</th>

<th>Member</th>

<th>Drug</th>

<th>Amount</th>

<th>Status</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{

filtered.map(item=>(

<tr key={item.id}>

<td>{item.id}</td>

<td>{item.member}</td>

<td>{item.drug}</td>

<td>₹ {item.amount}</td>

<td>

<span className={

item.status==="Approved"

?"badge bg-success":

item.status==="Rejected"

?"badge bg-danger"

:"badge bg-warning text-dark"

}>

{item.status}

</span>

</td>

<td>

<button

className="btn btn-success btn-sm me-2"

onClick={()=>updateStatus(item.id,"Approved")}

>

Approve

</button>

<button

className="btn btn-danger btn-sm"

onClick={()=>updateStatus(item.id,"Rejected")}

>

Reject

</button>

</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}