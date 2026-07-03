import { useState } from "react";
import "./FindPharmacy.css";
import Footer from "../components/Footer";

export default function FindPharmacy() {

const [search,setSearch]=useState("");

const pharmacies=[

{
name:"Apollo Pharmacy",
city:"Mumbai",
address:"MG Road",
phone:"+91 9876543210",
timing:"9 AM - 10 PM"
},

{
name:"MedPlus",
city:"Pune",
address:"FC Road",
phone:"+91 9988776655",
timing:"24 Hours"
},

{
name:"Jan Aushadhi Kendra",
city:"Kolhapur",
address:"Shivaji Chowk",
phone:"+91 9876501234",
timing:"8 AM - 8 PM"
},

{
name:"Wellness Forever",
city:"Sangli",
address:"Station Road",
phone:"+91 9123456780",
timing:"24 Hours"
}

];

const filtered=pharmacies.filter(item=>

item.name.toLowerCase().includes(search.toLowerCase()) ||

item.city.toLowerCase().includes(search.toLowerCase())

);

return(

<div className="pharmacyPage">

<div className="pharmacyHero">

<h1>Find a Pharmacy</h1>

<p>

Locate nearby partner pharmacies in our PBM network.

</p>

<input

type="text"

placeholder="Search by pharmacy or city"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

</div>

<div className="pharmacyGrid">

{

filtered.map((item,index)=>(

<div className="pharmacyCard" key={index}>

<h3>{item.name}</h3>

<p>

📍 {item.city}

</p>

<p>

🏠 {item.address}

</p>

<p>

📞 {item.phone}

</p>

<p>

🕒 {item.timing}

</p>

<div className="btnGroup">

<button>

View Details

</button>

<button>

Get Directions

</button>

</div>

</div>

))

}

</div>

<Footer />

</div>

)

}