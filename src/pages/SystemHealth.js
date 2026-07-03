export default function SystemHealth() {

const services=[

{
name:"Authentication Service",
status:"Running",
uptime:"99.9%"
},

{
name:"Claims Service",
status:"Running",
uptime:"99.7%"
},

{
name:"Formulary Service",
status:"Running",
uptime:"99.8%"
},

{
name:"Reporting Service",
status:"Running",
uptime:"99.6%"
},

{
name:"API Gateway",
status:"Running",
uptime:"100%"
},

{
name:"Database",
status:"Running",
uptime:"99.9%"
}

];

return(

<div>

<h2>System Health Monitor</h2>

<div className="cards">

<div className="card1">

<h5>CPU Usage</h5>

<h2>32%</h2>

</div>

<div className="card1">

<h5>Memory</h5>

<h2>48%</h2>

</div>

<div className="card1">

<h5>Storage</h5>

<h2>61%</h2>

</div>

<div className="card1">

<h5>Active Users</h5>

<h2>26</h2>

</div>

</div>

<table className="table table-bordered table-hover">

<thead className="table-primary">

<tr>

<th>Service</th>

<th>Status</th>

<th>Uptime</th>

</tr>

</thead>

<tbody>

{

services.map((service,index)=>(

<tr key={index}>

<td>{service.name}</td>

<td>

<span className="badge bg-success">

{service.status}

</span>

</td>

<td>{service.uptime}</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}