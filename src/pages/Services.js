import "./Services.css";
import Footer from "../components/Footer";

export default function Services() {

  const services = [
    {
      icon: "📄",
      title: "Claims Management",
      description: "Submit, track and manage healthcare claims quickly and securely."
    },
    {
      icon: "💊",
      title: "Drug Formulary",
      description: "Search medicines, coverage details, tiers and alternatives."
    },
    {
      icon: "🏥",
      title: "Pharmacy Network",
      description: "Access a wide network of registered pharmacies across the country."
    },
    {
      icon: "👨‍⚕️",
      title: "Healthcare Providers",
      description: "Connect hospitals and providers for seamless healthcare services."
    },
    {
      icon: "📊",
      title: "Reports & Analytics",
      description: "View healthcare reports and performance analytics."
    },
    {
      icon: "🔒",
      title: "Secure Access",
      description: "Role-based secure login for administrators and healthcare partners."
    }
  ];

  return (
    <div className="servicesPage">

      <section className="servicesHero">

        <h1>Our Services</h1>

        <p>
          PBM Healthcare Portal provides end-to-end healthcare benefit
          management solutions for members, pharmacies, providers and administrators.
        </p>

      </section>

      <section className="servicesContainer">

        {
          services.map((service, index) => (

            <div className="serviceBox" key={index}>

              <div className="serviceIcon">

                {service.icon}

              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>

          ))
        }

      </section>

      <section className="whyChoose">

        <h2>Why Choose PBM Healthcare?</h2>

        <div className="whyGrid">

          <div className="whyCard">
            ⚡ Fast Claim Processing
          </div>

          <div className="whyCard">
            🔐 Secure Healthcare Records
          </div>

          <div className="whyCard">
            🌍 Nationwide Pharmacy Network
          </div>

          <div className="whyCard">
            📈 Advanced Reporting
          </div>

        </div>

      </section>

     <Footer />
    </div>
  );
}