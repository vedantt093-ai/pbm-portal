import { useState } from "react";

export default function AuditLogs() {

const [logs] = useState([

{
id:1,
action:"Admin Login",
user:"Rahul Sharma",
time:"28 Jun 2026, 09:00 AM",
status:"Success"
},

{
id:2,
action:"Claim Approved",
user:"Sneha Patil",
time:"28 Jun 2026, 09:15 AM",
status:"Success"
},

{
id:3,
action:"Member Updated",
user:"Admin",
time:"28 Jun 2026, 09:45 AM",
status:"Success"
},

{
id:4,
action:"Report Generated",
user:"Priya Singh",
time:"28 Jun 2026, 10:20 AM",
status:"Success"
},

{
id:5,
action:"Failed Login Attempt",
user:"Unknown User",
time:"28 Jun 2026, 10:40 AM",
status:"Failed"
}

]);

return(

<div>

<h2>Audit Logs</h2>

<table className="table table-bordered table-hover">

<thead className="table-dark">

<tr>

<th>ID</th>

<th>Action</th>

<th>User</th>

<th>Date & Time</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{

logs.map(log=>(

<tr key={log.id}>

<td>{log.id}</td>

<td>{log.action}</td>

<td>{log.user}</td>

<td>{log.time}</td>

<td>

<span className={

log.status==="Success"

?

"badge bg-success"

:

"badge bg-danger"

}>

{log.status}

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