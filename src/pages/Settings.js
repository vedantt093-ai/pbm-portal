import { useState } from "react";

export default function Settings(){

const [darkMode,setDarkMode]=useState(false);

const [notifications,setNotifications]=useState(true);

return(

<div>

<h2>⚙ Settings</h2>

<div className="settingCard">

<h4>Theme</h4>

<label>

<input

type="checkbox"

checked={darkMode}

onChange={()=>setDarkMode(!darkMode)}

/>

 Enable Dark Mode

</label>

</div>

<div className="settingCard">

<h4>Notifications</h4>

<label>

<input

type="checkbox"

checked={notifications}

onChange={()=>setNotifications(!notifications)}

/>

 Email Notifications

</label>

</div>

<div className="settingCard">

<h4>Company</h4>

<p>PBM Healthcare Pvt. Ltd.</p>

<p>Version : 1.0.0</p>

</div>

</div>

)

}