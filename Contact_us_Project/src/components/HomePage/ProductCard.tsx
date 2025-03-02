import { Box, Text, Image, Badge, Flex, Button } from "@chakra-ui/react";
import product from "../../entities/product";
import { keyframes } from "@chakra-ui/react";
import img1 from "../../assets/image1.jfif";
import img2 from "../../assets/image2.jfif";
import img3 from "../../assets/image3.jfif";
interface ProductProps {
  product: product;
}
const images = [img1, img2, img3];
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProductCard = ({ product }: ProductProps) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return (
    <Box
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      transition="all 0.2s ease"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "xl",
      }}
      animation={`${fadeIn} 0.5s ease-out`}
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      borderColor="rgba(255, 255, 255, 0.2)"
    >
      <Box position="relative" h="200px" overflow="hidden">
        <Image
          src={randomImage || "https://picsum.photos/400/300"}
          alt={product.name}
          objectFit="cover"
          w="100%"
          h="100%"
          fallbackSrc="https://via.placeholder.com/400x300"
        />
        <Badge
          position="absolute"
          top={2}
          right={2}
          colorScheme="purple"
          borderRadius="full"
          px={3}
          py={1}
          fontSize="xs"
          fontWeight="bold"
          bg="rgba(128, 90, 213, 0.8)"
        >
          {product.categories.name}
        </Badge>
      </Box>

      <Box p={4} bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(10px)">
        <Text
          fontSize={["md", "lg"]}
          fontWeight="semibold"
          noOfLines={1}
          mb={2}
          color="white"
        >
          {product.name}
        </Text>

        <Text
          fontSize="sm"
          color="rgba(255, 255, 255, 0.8)"
          noOfLines={3}
          minH="60px"
          lineHeight="tall"
          mb={3}
        >
          {product.description}
        </Text>

        <Flex justify="space-between" align="center">
          <Text fontSize="xl" fontWeight="bold" color="purple.200">
            ${product.price}
          </Text>

          <Button
            colorScheme="purple"
            size="sm"
            variant="outline"
            _hover={{ bg: "purple.600", color: "white" }}
            bg="rgba(128, 90, 213, 0.5)"
            borderColor="purple.400"
            color="purple.100"
          >
            View Details
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
