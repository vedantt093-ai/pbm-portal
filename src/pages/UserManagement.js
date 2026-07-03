import { useState } from "react";

export default function UserManagement() {

const [users]=useState([

{
id:"EMP001",
name:"Rahul Sharma",
role:"Administrator",
email:"rahul@pbm.com",
status:"Active"
},

{
id:"EMP002",
name:"Sneha Patil",
role:"Claims Officer",
email:"sneha@pbm.com",
status:"Active"
},

{
id:"EMP003",
name:"Amit Verma",
role:"Pharmacist",
email:"amit@pbm.com",
status:"Inactive"
},

{
id:"EMP004",
name:"Priya Singh",
role:"Reporting Analyst",
email:"priya@pbm.com",
status:"Active"
}

]);

return(

<div>

<h2>User Management</h2>

<table className="table table-bordered table-hover">

<thead className="table-primary">

<tr>

<th>ID</th>

<th>Name</th>

<th>Role</th>

<th>Email</th>

<th>Status</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{

users.map(user=>(

<tr key={user.id}>

<td>{user.id}</td>

<td>{user.name}</td>

<td>{user.role}</td>

<td>{user.email}</td>

<td>

<span className={

user.status==="Active"

?

"badge bg-success"

:

"badge bg-danger"

}>

{user.status}

</span>

</td>

<td>

<button className="btn btn-warning btn-sm me-2">

Edit

</button>

<button className="btn btn-danger btn-sm">

Delete

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