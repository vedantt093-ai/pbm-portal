import { useState } from "react";
import "./DrugSearch.css";
import Footer from "../components/Footer";

export default function DrugSearch() {

const drugs=[

{
name:"Paracetamol",
tier:"Tier 1",
coverage:"Covered",
generic:"Acetaminophen",
authorization:"Not Required"
},

{
name:"Metformin",
tier:"Tier 1",
coverage:"Covered",
generic:"Metformin",
authorization:"Not Required"
},

{
name:"Insulin",
tier:"Tier 2",
coverage:"Covered",
generic:"Human Insulin",
authorization:"Required"
},

{
name:"Amoxicillin",
tier:"Tier 1",
coverage:"Covered",
generic:"Amoxicillin",
authorization:"Not Required"
},

{
name:"Atorvastatin",
tier:"Tier 2",
coverage:"Covered",
generic:"Atorvastatin",
authorization:"Required"
}

];

const [search,setSearch]=useState("");

const filtered=drugs.filter(drug=>

drug.name.toLowerCase().includes(search.toLowerCase())

);

return(

<div className="drugPage">

<div className="drugHero">

<h1>Drug Formulary Search</h1>

<p>

Search medicines covered under PBM Healthcare.

</p>

<input

type="text"

placeholder="Search Medicine..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

</div>

<div className="drugGrid">

{

filtered.map((drug,index)=>(

<div className="drugCard" key={index}>

<h3>{drug.name}</h3>

<p>

<b>Tier:</b> {drug.tier}

</p>

<p>

<b>Coverage:</b> {drug.coverage}

</p>

<p>

<b>Generic:</b> {drug.generic}

</p>

<p>

<b>Prior Authorization:</b>

{drug.authorization}

</p>

<button>

View Details

</button>

</div>

))

}

</div>

</div>

)

}