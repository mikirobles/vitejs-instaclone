import {
  Box,
  Container,
  Flex,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import './App.css';
import FeedPicture from './components/FeedPicture';
import Header from './components/Header';
import logo from './logo.svg';

function App() {
  return (
    <Flex direction="column" minHeight="100vh" background="#191919">
      <Header />
      {/* Body */}
      <Stack
        maxWidth={645}
        width="100%"
        flex="1"
        direction="column"
        margin="20px auto"
      >
        <FeedPicture />
      </Stack>
    </Flex>
  );
}

export default App;
