import { Box } from "@chakra-ui/react";
import { useState } from "react";
import AdsSection from "../components/HomePage/AdsSection";
import ContactPopup from "../components/HomePage/ContactUsPopUp";
import ProductsSection from "../components/HomePage/ProductsSection";
import Navbar from "../components/Layout/NavBar";

const HomePage = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <Box>
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <AdsSection />
      <ProductsSection />
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </Box>
  );
};

export default HomePage;
