import { useState } from "react";
import "./TrackClaim.css";
import Footer from "../components/Footer";

export default function TrackClaim() {

  const [claimId, setClaimId] = useState("");
  const [result, setResult] = useState(null);

  const claims = [
    {
      id: "CLM1001",
      patient: "Rahul Sharma",
      hospital: "Apollo Hospital",
      amount: "₹12,500",
      status: "Approved",
      date: "30 June 2026"
    },
    {
      id: "CLM1002",
      patient: "Sneha Patil",
      hospital: "Ruby Hall Clinic",
      amount: "₹8,300",
      status: "Pending",
      date: "28 June 2026"
    },
    {
      id: "CLM1003",
      patient: "Amit Verma",
      hospital: "AIIMS Delhi",
      amount: "₹15,900",
      status: "Rejected",
      date: "25 June 2026"
    }
  ];

  const searchClaim = () => {

    const found = claims.find(
      item => item.id.toLowerCase() === claimId.toLowerCase()
    );

    if(found){

      setResult(found);

    }else{

      setResult("notfound");

    }

  };

  return (

    <div className="claimPage">

      <div className="claimHero">

        <h1>Track Your Claim</h1>

        <p>

          Enter your Claim ID to view the latest status.

        </p>

        <input

          type="text"

          placeholder="Enter Claim ID"

          value={claimId}

          onChange={(e)=>setClaimId(e.target.value)}

        />

        <button onClick={searchClaim}>

          Check Status

        </button>

      </div>

      {

        result && result !== "notfound" && (

          <div className="claimCard">

            <h2>{result.id}</h2>

            <p><b>Patient :</b> {result.patient}</p>

            <p><b>Hospital :</b> {result.hospital}</p>

            <p><b>Amount :</b> {result.amount}</p>

            <p>

              <b>Status :</b>

              <span className={

                result.status==="Approved"

                ? "approved"

                : result.status==="Pending"

                ? "pending"

                : "rejected"

              }>

                {result.status}

              </span>

            </p>

            <p><b>Date :</b> {result.date}</p>

          </div>

        )

      }

      {

        result==="notfound" && (

          <div className="notFound">

            ❌ No claim found with this Claim ID.

          </div>

        )

      }

        <Footer/>
    </div>

  );

}