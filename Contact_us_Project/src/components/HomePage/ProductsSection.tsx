import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useFetchProducts from "../../hooks/useFetchProducts";
import ProductCard from "./ProductCard";
import bgimg from "../../assets/ProductsBack.jpg";
const ProductsSection = () => {
  const { data, isLoading } = useFetchProducts();
  console.log(data);
  if (isLoading) return <Spinner />;
  return (
    <Box
      id="products"
      position="relative"
      scrollMarginTop="420px"
      p={8}
      backgroundImage={`url(${bgimg})`} // Add background image
      backgroundSize="cover" // Ensure the image covers the entire section
      backgroundPosition="center" // Center the background image
      backgroundAttachment="fixed" // Optional: Makes the background fixed while scrolling
      color="white" // Adjust text color for better contrast
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={1}
      />
      <Box position="relative" zIndex={2}>
        <Heading
          textAlign="center"
          m={8}
          position="relative"
          sx={{
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              height: "3px",
              backgroundColor: "purple.500",
            },
            "&::before": {
              top: 0,
              left: "35%",
              width: "10%",
            },
            "&::after": {
              bottom: 0,
              right: "35%",
              width: "10%",
            },
          }}
        >
          <Text as="span" px={4} position="relative" display="inline-block">
            Products
          </Text>
        </Heading>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
          {data &&
            data.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProductsSection;
