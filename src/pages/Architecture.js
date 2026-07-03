export default function Architecture() {

const modules=[

{
name:"Admin Dashboard",
status:"Running",
technology:"React"
},

{
name:"Claims Search",
status:"Running",
technology:"React Micro-App"
},

{
name:"Formulary Lookup",
status:"Running",
technology:"React Micro-App"
},

{
name:"Reporting",
status:"Running",
technology:"React Micro-App"
},

{
name:"Authentication",
status:"Connected",
technology:"AWS Cognito"
},

{
name:"API Gateway",
status:"Running",
technology:"AWS API Gateway"
},

{
name:"AI Search",
status:"Connected",
technology:"OpenSearch"
},

{
name:"Database",
status:"Connected",
technology:"MongoDB"
}

];

return(

<div>

<h2>PBM System Architecture</h2>

<div className="architecture">

<div className="module">

<h5>👤 Admin Portal</h5>

</div>

<div className="arrow">⬇</div>

<div className="module">

<h5>🔐 Authentication</h5>

</div>

<div className="arrow">⬇</div>

<div className="module">

<h5>🌐 API Gateway</h5>

</div>

<div className="arrow">⬇</div>

<div className="moduleRow">

<div className="module">

Claims

</div>

<div className="module">

Formulary

</div>

<div className="module">

Reports

</div>

<div className="module">

AI Search

</div>

</div>

<div className="arrow">⬇</div>

<div className="module">

💾 MongoDB Database

</div>

</div>

<br/>

<h3>Microservices Status</h3>

<table className="table table-bordered">

<thead className="table-primary">

<tr>

<th>Module</th>

<th>Status</th>

<th>Technology</th>

</tr>

</thead>

<tbody>

{

modules.map((item,index)=>(

<tr key={index}>

<td>{item.name}</td>

<td>

<span className="badge bg-success">

{item.status}

</span>

</td>

<td>{item.technology}</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}