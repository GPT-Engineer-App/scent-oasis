import { Box, Flex, Heading, Text, Image, SimpleGrid, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const perfumes = [
    {
      id: 1,
      name: "Oud Wood",
      brand: "Tom Ford",
      description: "A warm, woody scent with notes of oud, sandalwood, and vetiver.",
      price: "150",
      imageUrl: "https://images.unsplash.com/photo-1642698215110-87817f1fbe0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvdWQlMjB3b29kJTIwcGVyZnVtZXxlbnwwfHx8fDE3MTM0ODUwNzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Amber Musk",
      brand: "Aerin",
      description: "A warm, inviting blend of amber, musk, and rose.",
      price: "120",
      imageUrl: "https://images.unsplash.com/photo-1458538977777-0549b2370168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbWJlciUyMG11c2slMjBwZXJmdW1lfGVufDB8fHx8MTcxMzQ4NTA3MXww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Santal 33",
      brand: "Le Labo",
      description: "A captivating aroma of cardamom, iris, violet, and sandalwood.",
      price: "180",
      imageUrl: "https://images.unsplash.com/photo-1656137521679-9241f2981979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYW50YWwlMjAzMyUyMHBlcmZ1bWV8ZW58MHx8fHwxNzEzNDg1MDcxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box p={5}>
      <Heading mb={4} textAlign="center">
        Arabian Perfume Store
      </Heading>
      <Text fontSize="lg" mb={6} textAlign="center">
        Explore our exclusive collection of Arabian perfumes from various brands.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {perfumes.map((perfume) => (
          <Box key={perfume.id} p={5} shadow="md" borderWidth="1px">
            <Image src={perfume.imageUrl} alt={perfume.name} borderRadius="md" />
            <Heading fontSize="xl" mt={4}>
              {perfume.name}
            </Heading>
            <Text fontWeight="bold">{perfume.brand}</Text>
            <Text mt={2}>{perfume.description}</Text>
            <Flex mt={3} alignItems="center" justifyContent="space-between">
              <Text fontSize="xl" fontWeight="semibold">
                ${perfume.price}
              </Text>
              <Button colorScheme="teal" leftIcon={<FaShoppingCart />}>
                Add to Cart
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
