import {
  AspectRatio,
  Avatar,
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

function FeedPicture() {
  return (
    <Stack background="black" borderRadius="15px">
      {/* Header */}
      <Stack
        padding="10px 15px 0"
        direction="row"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Avatar marginRight="3" />
          <Text fontWeight="500">mikirobles</Text>
        </Flex>
        <IconButton aria-label="Mas opciones" />
      </Stack>
      {/* Picture */}
      <AspectRatio ratio={1}>
        <Image
          draggable="false"
          src="https://cdn.pixabay.com/photo/2021/01/14/13/10/bread-5916804_960_720.jpg"
        />
      </AspectRatio>
      {/* Controls */}
      <Box></Box>
      {/* Likes */}
      <Box></Box>
      {/* Comments */}
      <Box></Box>
      {/* Comment box */}
      <Box></Box>
    </Stack>
  );
}

export default FeedPicture;
