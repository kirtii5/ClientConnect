import Header from "../components/Header";
import Hero from "../components/Hero";
import NotAverage from "../components/NotAverage";
import WhyChooseUs from "../components/WhyChooseUs";
import ImageGrid from "../components/ImageGrid";
import AboutUs from "../components/AboutUs";
import OurProjects from "../components/OurProjects";
import HappyClients from "../components/HappyClients";
import BottomCTA from "../components/BottomCTA";
import Footer from "../components/Footer";
import FinalFooter from "../components/FinalFooter";

import { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get("/projects").then((res) => setProjects(res.data));
    api.get("/clients").then((res) => setClients(res.data));
  }, []);

  return (
    <div className="w-full">
      <Header />
      <Hero />
      <NotAverage />
      <WhyChooseUs />
      <ImageGrid />
      <AboutUs />
      <OurProjects />
      <HappyClients />
      <BottomCTA />
      <Footer />
      <FinalFooter />
    </div>
  );
}
