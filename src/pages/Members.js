import { useState } from "react";

export default function Members() {

const members=[

{
id:"M1001",
name:"John Smith",
gender:"Male",
age:35,
plan:"Gold"
},

{
id:"M1002",
name:"Sara Khan",
gender:"Female",
age:28,
plan:"Silver"
},

{
id:"M1003",
name:"David Miller",
gender:"Male",
age:42,
plan:"Platinum"
},

{
id:"M1004",
name:"Riya Patil",
gender:"Female",
age:24,
plan:"Gold"
},

{
id:"M1005",
name:"Vedant Kulkarni",
gender:"Male",
age:18,
plan:"Student"
},

{
id:"M1006",
name:"Ananya Verma",
gender:"Female",
age:31,
plan:"Gold"
},

{
id:"M1007",
name:"Rohan Deshmukh",
gender:"Male",
age:47,
plan:"Platinum"
},

{
id:"M1008",
name:"Priya Nair",
gender:"Female",
age:36,
plan:"Silver"
},

{
id:"M1009",
name:"Arjun Mehta",
gender:"Male",
age:29,
plan:"Gold"
},

{
id:"M1010",
name:"Sneha Joshi",
gender:"Female",
age:22,
plan:"Student"
},

{
id:"M1011",
name:"Karan Malhotra",
gender:"Male",
age:53,
plan:"Platinum"
},

{
id:"M1012",
name:"Meera Iyer",
gender:"Female",
age:39,
plan:"Gold"
},

{
id:"M1013",
name:"Aditya Rao",
gender:"Male",
age:26,
plan:"Silver"
},

{
id:"M1014",
name:"Kavya Reddy",
gender:"Female",
age:44,
plan:"Platinum"
},

{
id:"M1015",
name:"Rahul Sharma",
gender:"Male",
age:33,
plan:"Gold"
},

{
id:"M1016",
name:"Divya Menon",
gender:"Female",
age:19,
plan:"Student"
},

{
id:"M1017",
name:"Vikram Singh",
gender:"Male",
age:41,
plan:"Silver"
},

{
id:"M1018",
name:"Neha Kapoor",
gender:"Female",
age:27,
plan:"Gold"
},

{
id:"M1019",
name:"Suresh Pillai",
gender:"Male",
age:58,
plan:"Platinum"
},

{
id:"M1020",
name:"Ishita Bose",
gender:"Female",
age:30,
plan:"Silver"
}

];

const [search,setSearch]=useState("");

const filtered=members.filter(m=>

m.name.toLowerCase().includes(search.toLowerCase())||

m.id.toLowerCase().includes(search.toLowerCase())

);

return(

<div>

<h2>Member Management</h2>

<input
className="form-control mb-4"
placeholder="Search Member..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<p>

<b>{filtered.length}</b> Member(s) Found

</p>

<table className="table table-striped table-hover">

<thead className="table-primary">

<tr>

<th>Member ID</th>
<th>Name</th>
<th>Gender</th>
<th>Age</th>
<th>Plan</th>

</tr>

</thead>

<tbody>

{

filtered.map(member=>(

<tr key={member.id}>

<td>{member.id}</td>
<td>{member.name}</td>
<td>{member.gender}</td>
<td>{member.age}</td>
<td>{member.plan}</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}
