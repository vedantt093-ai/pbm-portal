import { useState } from "react";

export default function FormularyLookup() {

const drugs=[

{
id:1,
name:"Paracetamol",
generic:"Acetaminophen",
tier:"Tier 1",
coverage:"Covered",
auth:"Not Required",
limit:"30 Tablets"
},

{
id:2,
name:"Crocin",
generic:"Paracetamol",
tier:"Tier 2",
coverage:"Covered",
auth:"Required",
limit:"20 Tablets"
},

{
id:3,
name:"Azithromycin",
generic:"Azithromycin",
tier:"Tier 3",
coverage:"Covered",
auth:"Required",
limit:"15 Tablets"
},

{
id:4,
name:"Vitamin D3",
generic:"Cholecalciferol",
tier:"Tier 1",
coverage:"Covered",
auth:"Not Required",
limit:"60 Capsules"
},

{
id:5,
name:"Insulin",
generic:"Human Insulin",
tier:"Tier 4",
coverage:"Restricted",
auth:"Required",
limit:"Doctor Approval"
},

{
id:6,
name:"Ibuprofen",
generic:"Ibuprofen",
tier:"Tier 2",
coverage:"Covered",
auth:"Not Required",
limit:"25 Tablets"
}

];

const [search,setSearch]=useState("");

const result=drugs.filter((drug)=>

drug.name.toLowerCase().includes(search.toLowerCase()) ||

drug.generic.toLowerCase().includes(search.toLowerCase())

);

return(

<div>

<h2>Formulary Lookup</h2>

<input

className="form-control mb-4"

placeholder="Search Drug Name or Generic Name..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

<div className="drugContainer">

{

result.map((drug)=>(

<div className="drugCard" key={drug.id}>

<h3>{drug.name}</h3>

<p><strong>Generic :</strong> {drug.generic}</p>

<p><strong>Tier :</strong> {drug.tier}</p>

<p>

<strong>Coverage :</strong>

<span className={

drug.coverage==="Covered"

?"badge bg-success"

:"badge bg-danger"

}>

 {drug.coverage}

</span>

</p>

<p><strong>Prior Authorization :</strong> {drug.auth}</p>

<p><strong>Quantity Limit :</strong> {drug.limit}</p>

</div>

))

}

</div>

</div>

)

}