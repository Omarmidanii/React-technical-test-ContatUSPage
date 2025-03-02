import {
  Box,
  Heading,
  SimpleGrid,
  Skeleton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import bgimg from "../../assets/ProductsBack.jpg";
import useFetchProducts from "../../hooks/useFetchProducts";
import ProductCard from "./ProductCard";
const ProductsSection = () => {
  const { data } = useFetchProducts();
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });
  const imageHeight = useBreakpointValue({ base: 150, md: 200 });
  return (
    <Box
      id="products"
      position="relative"
      scrollMarginTop="420px"
      p={8}
      backgroundImage={`url(${bgimg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      color="white"
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
        {!data && (
          <SimpleGrid
            columns={columns}
            spacing={[4, 6, 8]}
            px={[2, 4, 6]}
            py={[4, 6]}
          >
            {[...Array(6)].map((_, i) => (
              <Skeleton
                key={i}
                height={`${imageHeight}px`}
                borderRadius="xl"
                startColor="gray.50"
                endColor="gray.100"
              />
            ))}
          </SimpleGrid>
        )}
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
