// ErrorPa
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { WarningIcon } from "@chakra-ui/icons";
const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.50"
    >
      <WarningIcon w={12} h={12} color="red.500" />
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" size="2xl" color="red.500">
          404
        </Heading>
        <Text fontSize="xl" color="gray.700">
          Oops! The page you're looking for doesn't exist.
        </Text>
        <Button colorScheme="teal" onClick={() => navigate("/")} mt={4}>
          Go Back Home
        </Button>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
