import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import PortalSelection from "./pages/PortalSelection";
import Register from "./pages/public/Register";
import DrugSearch from "./pages/DrugSearch";
import FindPharmacy from "./pages/FindPharmacy";
import TrackClaim from "./pages/TrackClaim";
import NotFound from "./pages/NotFound";

// Role-based login
import RoleLogin from "./pages/RoleLogin";

// Member portal
import MemberHome from "./pages/MemberHome";
import MemberLogin from "./pages/MemberLogin";
import MemberDashboard from "./pages/MemberDashboard";

// Pharmacy portal
import PharmacyHome from "./pages/PharmacyHome";
import PharmacyDashboard from "./pages/PharmacyDashboard";

// Provider portal
import ProviderHome from "./pages/ProviderHome";
import ProviderDashboard from "./pages/ProviderDashboard";

// Admin portal
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import ClaimsSearch from "./pages/ClaimsSearch";
import FormularyLookup from "./pages/FormularyLookup";
import Pharmacies from "./pages/Pharmacies";
import Reporting from "./pages/Reporting";
import Settings from "./pages/Settings";
import UserManagement from "./pages/UserManagement";
import Notifications from "./pages/Notifications";
import AuditLogs from "./pages/AuditLogs";
import SystemHealth from "./pages/SystemHealth";
import Architecture from "./pages/Architecture";
import Help from "./pages/Help";

function App() {

return(

<BrowserRouter>

<Routes>

{/* Public site */}
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/services" element={<Services/>}/>
<Route path="/portal" element={<PortalSelection/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/drug-search" element={<DrugSearch/>}/>
<Route path="/find-pharmacy" element={<FindPharmacy/>}/>
<Route path="/track-claim" element={<TrackClaim/>}/>

{/* Role-based login (used from PortalSelection's Administrator card) */}
<Route path="/login" element={<RoleLogin/>}/>

{/* Member portal */}
<Route path="/memberhome" element={<MemberHome/>}/>
<Route path="/memberlogin" element={<MemberLogin/>}/>
<Route path="/memberdashboard" element={<MemberDashboard/>}/>

{/* Pharmacy portal */}
<Route path="/pharmacyhome" element={<PharmacyHome/>}/>
<Route path="/pharmacylogin" element={<RoleLogin defaultRole="Pharmacy"/>}/>
<Route path="/pharmacydashboard" element={<PharmacyDashboard/>}/>

{/* Provider portal */}
<Route path="/providerhome" element={<ProviderHome/>}/>
<Route path="/providerlogin" element={<RoleLogin defaultRole="Provider"/>}/>
<Route path="/providerdashboard" element={<ProviderDashboard/>}/>

{/* Admin portal (Sidebar + Navbar layout) */}
<Route element={<AdminLayout/>}>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/members" element={<Members/>}/>
<Route path="/claims" element={<ClaimsSearch/>}/>
<Route path="/formulary" element={<FormularyLookup/>}/>
<Route path="/pharmacies" element={<Pharmacies/>}/>
<Route path="/reports" element={<Reporting/>}/>
<Route path="/settings" element={<Settings/>}/>
<Route path="/users" element={<UserManagement/>}/>
<Route path="/notifications" element={<Notifications/>}/>
<Route path="/auditlogs" element={<AuditLogs/>}/>
<Route path="/systemhealth" element={<SystemHealth/>}/>
<Route path="/architecture" element={<Architecture/>}/>
<Route path="/help" element={<Help/>}/>
</Route>

{/* 404 */}
<Route path="*" element={<NotFound/>}/>

</Routes>

</BrowserRouter>

)

}

export default App;
