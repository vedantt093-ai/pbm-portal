import {
Chart,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js";

import {Bar} from "react-chartjs-2";

Chart.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

export default function Dashboard(){

const data={

labels:["Jan","Feb","Mar","Apr","May","Jun"],

datasets:[

{

label:"Claims",

data:[120,180,140,250,200,280],

backgroundColor:"#1565c0"

}

]

};

return(

<div>

<div className="d-flex justify-content-between align-items-center mb-4">

<div>

<h2>PBM Dashboard</h2>

<p>Welcome back, Administrator 👋</p>

</div>

<button className="btn btn-primary">

Generate Report

</button>

</div>

<div className="banner">

<div>

<h2>Welcome Administrator 👋</h2>

<p>

Manage claims, members,
formularies and pharmacy reports
from one dashboard.

</p>

<button className="btn btn-primary">

View Reports

</button>

</div>

<img

src="https://cdn-icons-png.flaticon.com/512/2966/2966481.png"

width="180"

alt="Healthcare"

/>

</div>

<div className="cards">

<div className="card1">

<h5>Total Claims</h5>

<h1>520</h1>

<p>↑ 18%</p>

</div>

<div className="card1">

<h5>Approved</h5>

<h1>430</h1>

<p>82.6%</p>

</div>

<div className="card1">

<h5>Pending</h5>

<h1>45</h1>

<p>Waiting Review</p>

</div>

<div className="card1">

<h5>Rejected</h5>

<h1>45</h1>

<p>Needs Correction</p>

</div>

<div className="card1">

<h5>Total Members</h5>

<h1>145</h1>

<p>Registered</p>

</div>

<div className="card1">

<h5>Pharmacies</h5>

<h1>35</h1>

<p>Active</p>

</div>

</div>

<div className="card1">

<h5>Users</h5>

<h1>28</h1>

<p>Registered Staff</p>

</div>

<div className="card1">

<h5>Audit Logs</h5>

<h1>156</h1>

<p>Today's Activities</p>

</div>

<div className="card1">

<h5>System Status</h5>

<h1>Healthy</h1>

<p>All Services Online</p>

</div>

<Bar data={data}/>

<div className="activitySection">

<div className="activityCard">

<h3>Recent Activities</h3>

<ul>

<li>✅ Claim CLM1001 Approved</li>

<li>💊 Drug Formulary Updated</li>

<li>👤 New Member Registered</li>

<li>🏥 Pharmacy Added</li>

<li>📄 Monthly Report Generated</li>

</ul>

</div>

<div className="activityCard">

<h3>Quick Statistics</h3>

<p>Total Revenue</p>

<div className="progress">

<div
className="progress-bar bg-success"
style={{width:"82%"}}
>

82%

</div>

</div>

<br/>

<p>Claim Processing</p>

<div className="progress">

<div
className="progress-bar bg-primary"
style={{width:"91%"}}
>

91%

</div>

</div>

<br/>

<p>Member Satisfaction</p>

<div className="progress">

<div
className="progress-bar bg-warning"
style={{width:"96%"}}
>

96%

</div>

</div>

</div>

</div>

</div>

)

}