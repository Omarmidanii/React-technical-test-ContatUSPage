import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useFetchAds from "../../hooks/useFetchAds";
import Ads from "../../entities/ads";
import img1 from "../../assets/image1.jfif";
import img2 from "../../assets/image2.jfif";
import img3 from "../../assets/image3.jfif";

const images = [img1, img2, img3];

const AdsSection = () => {
  const { data } = useFetchAds();
  const [ads, setAds] = useState<Ads[]>([]);
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });
  const imageHeight = useBreakpointValue({ base: 150, md: 200 });

  useEffect(() => {
    if (data?.data) {
      const extendedAds = Array.from({ length: 6 }, () => data.data[0]);
      setAds(extendedAds);
    }
  }, [data]);

  return (
    <Box
      id="ads"
      py={[6, 8, 12]}
      px={[4, 6, 8, 12]}
      position="relative"
      mb={12}
      maxWidth="1440px"
      margin="0 auto"
      width="100%"
    >
      <Heading
        textAlign="center"
        mb={[6, 8]}
        fontSize={["2xl", "3xl", "4xl"]}
        position="relative"
        sx={{
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            height: "3px",
            backgroundColor: "purple.500",
            width: { base: "120px", md: "10%" },
            left: { base: "calc(50% - 60px)", md: "35%" },
          },
          "&::before": {
            top: 0,
          },
          "&::after": {
            bottom: 0,
            right: { base: "calc(50% - 60px)", md: "35%" },
            left: "auto",
          },
        }}
      >
        <Text
          as="span"
          px={4}
          position="relative"
          display="inline-block"
          fontSize={["lg", "xl", "2xl"]}
        >
          Advertisement
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

      <SimpleGrid
        columns={columns}
        spacing={[4, 6, 8]}
        px={[2, 4, 6]}
        py={[4, 6]}
      >
        {ads.map((ad, index) => {
          const randomImage = images[Math.floor(Math.random() * images.length)];
          return (
            <Card
              key={`${ad.id}-${index}`}
              borderRadius="xl"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "xl",
              }}
              overflow="hidden"
              height="100%"
              display="flex"
              flexDirection="column"
            >
              <Box
                h={{ base: "150px", md: "200px" }}
                position="relative"
                overflow="hidden"
                flexShrink={0}
              >
                <Image
                  src={randomImage}
                  alt={ad.title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  fallbackSrc="https://placehold.co/300x200"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/300x200";
                  }}
                />
              </Box>

              <CardHeader pb={2} px={[3, 4]} pt={[3, 4]}>
                <Heading
                  size={{ base: "sm", md: "md" }}
                  noOfLines={1}
                  color="gray.700"
                >
                  {ad.title}
                </Heading>
              </CardHeader>

              <CardBody pt={0} px={[3, 4]} pb={[3, 4]} flex="1">
                <Text
                  fontSize={{ base: "xs", sm: "sm" }}
                  color="gray.600"
                  noOfLines={{ base: 2, md: 3 }}
                  lineHeight="tall"
                >
                  {ad.content}
                </Text>
              </CardBody>

              <CardFooter pt={0} px={[3, 4]} pb={[3, 4]}>
                <Badge
                  colorScheme="purple"
                  borderRadius="full"
                  px={{ base: 2, md: 3 }}
                  py={{ base: 0.5, md: 1 }}
                  fontSize={{ base: "2xs", sm: "xs" }}
                  fontWeight="semibold"
                >
                  Category {ad.category_id}
                </Badge>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default AdsSection;
