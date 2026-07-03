import { Link } from "react-router-dom";

import {
FaHome,
FaFileMedical,
FaPills,
FaUsers,
FaHospital,
FaChartBar,
FaCog,
FaQuestionCircle,
FaUserShield,
FaBell,
FaClipboardList,
FaHeartbeat,
FaProjectDiagram,
} from "react-icons/fa";

export default function Sidebar(){

return(

<div className="sidebar">

<h2>🏥 PBM Portal</h2>

<Link to="/dashboard"><FaHome/> Dashboard</Link>

<Link to="/claims"><FaFileMedical/> Claims</Link>

<Link to="/formulary"><FaPills/> Formulary</Link>

<Link to="/pharmacies"><FaHospital/> Pharmacies</Link>

<Link to="/reports"><FaChartBar/> Reports</Link>

<Link to="/members"><FaUsers/> Members</Link>

<Link to="/settings"><FaCog/> Settings</Link>

<Link to="/users">

<FaUserShield/>

Users

</Link>

<Link to="/notifications">

<FaBell/>

Notifications

</Link>

<Link to="/auditlogs">

<FaClipboardList/>

Audit Logs

</Link>

<Link to="/systemhealth">

<FaHeartbeat/>

System Health

</Link>

<Link to="/architecture">

<FaProjectDiagram/>

Architecture

</Link>

<Link to="/help"><FaQuestionCircle/> Help</Link>

</div>

)

}