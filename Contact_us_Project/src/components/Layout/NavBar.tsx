import {
  Box,
  Button,
  Flex,
  Text,
  keyframes,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import ContactImage from "../../assets/contactus.png";

const underlineAnimation = keyframes`
  from { width: 0; left: 50%; }
  to { width: 100%; left: 0; }
`;

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar = React.memo(({ onOpenContact }: NavbarProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabs = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "ads", label: "Ads" },
  ];

  // Responsive values
  const navbarHeight = useBreakpointValue({ base: "300px", md: "420px" });
  const textFontSize = useBreakpointValue({ base: "2xl", md: "5xl" });
  const subtextFontSize = useBreakpointValue({ base: "md", md: "xl" });
  const logoFontSize = useBreakpointValue({ base: "lg", md: "xl" });
  const buttonFontSize = useBreakpointValue({ base: "sm", md: "md" });
  const paddingX = useBreakpointValue({ base: 4, md: 8 });
  const paddingY = useBreakpointValue({ base: 4, md: 8 });

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    const section = document.getElementById(tabs[index].id);
    if (section) {
      const navbarHeight = document.querySelector("home")?.clientHeight || 0;
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      id="home"
      position="fixed"
      w="100%"
      h={navbarHeight}
      sx={{
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.9), rgba(255,255,255,0.2))",
          zIndex: -1,
        },
        backgroundImage: `url(${ContactImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      zIndex="sticky"
    >
      <Box
        position="absolute"
        top="50%"
        left={{ base: "50%", md: "25%" }}
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white"
        zIndex="1"
        width={{ base: "90%", md: "auto" }}
      >
        <Text
          fontSize={textFontSize}
          fontWeight="bold"
          mb={4}
          fontFamily="'Playfair Display', serif"
        >
          Hello & Welcome!
        </Text>
        <Text fontSize={subtextFontSize}>
          Discover our amazing products and services
        </Text>
      </Box>
      <Flex
        justifyContent="space-between"
        alignItems="flex-start"
        h="100%"
        px={paddingX}
        py={paddingY}
        border="2px"
        position="relative"
        zIndex="2"
      >
        <Flex alignItems="center" gap={{ base: 4, md: 8 }}>
          <Text
            fontSize={logoFontSize}
            fontWeight="bold"
            color="white"
            fontFamily="'Playfair Display', serif"
            letterSpacing="wide"
          >
            Logo
          </Text>
        </Flex>
        <Flex gap={{ base: 3, md: 6 }} bg="transparent">
          {tabs.map((tab, index) => (
            <Button
              key={tab.id}
              ref={(el) => (tabRefs.current[index] = el)}
              variant="unstyled"
              color={activeTab === index ? "gold" : "gray"}
              onClick={() => handleTabClick(index)}
              _hover={{
                textDecoration: "none",
                color: "gold",
                transform: "translateY(-2px)",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-4px",
                  left: "0",
                  width: "100%",
                  height: "2px",
                  bg: "gold",
                  animation: `${underlineAnimation} 0.3s ease-out`,
                },
              }}
              transition="color 0.2s ease"
              position="relative"
              pb={2}
              fontSize={buttonFontSize}
            >
              {tab.label}
            </Button>
          ))}
        </Flex>
        <Button
          onClick={onOpenContact}
          variant="outline"
          color="white"
          borderColor="white"
          _hover={{
            bg: "rgba(255,255,255,0.1)",
            borderColor: "gold",
            color: "gold",
            transform: "scale(1.05)",
          }}
          _active={{
            transform: "scale(0.95)",
          }}
          leftIcon={<i className="fas fa-envelope" />}
          transition="all 0.3s ease"
          fontSize={buttonFontSize}
        >
          Contact US
        </Button>
      </Flex>
    </Box>
  );
});

export default Navbar;
