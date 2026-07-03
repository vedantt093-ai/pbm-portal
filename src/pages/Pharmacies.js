import { useState } from "react";

export default function Pharmacies() {

const pharmacies=[

{
id:"P1001",
name:"Apollo Pharmacy",
city:"Mumbai",
contact:"9876543210",
status:"Active"
},

{
id:"P1002",
name:"MedPlus",
city:"Pune",
contact:"9123456789",
status:"Active"
},

{
id:"P1003",
name:"Wellness Forever",
city:"Nagpur",
contact:"9988776655",
status:"Inactive"
},

{
id:"P1004",
name:"Jan Aushadhi",
city:"Kolhapur",
contact:"9870012345",
status:"Active"
},

{
id:"P1005",
name:"Care Pharmacy",
city:"Sangli",
contact:"9765432100",
status:"Active"
}

];

const [search,setSearch]=useState("");

const filtered=pharmacies.filter(item=>

item.name.toLowerCase().includes(search.toLowerCase()) ||

item.city.toLowerCase().includes(search.toLowerCase())

);

return(

<div>

<h2>Pharmacy Management</h2>

<input
className="form-control mb-4"
placeholder="Search Pharmacy..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<table className="table table-hover table-bordered">

<thead className="table-primary">

<tr>

<th>ID</th>
<th>Name</th>
<th>City</th>
<th>Contact</th>
<th>Status</th>

</tr>

</thead>

<p>

<b>{filtered.length}</b> Pharmacy(s) Found

</p>

<tbody>

{

filtered.map(item=>(

<tr key={item.id}>

<td>{item.id}</td>

<td>{item.name}</td>

<td>{item.city}</td>

<td>{item.contact}</td>

<td>

<span className={

item.status==="Active"

?"badge bg-success"

:"badge bg-danger"

}>

{item.status}

</span>

</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}