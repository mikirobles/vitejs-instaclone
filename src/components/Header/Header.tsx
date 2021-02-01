import {
  Avatar,
  Box,
  Container,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import logo from './logo.svg';

function Header() {
  return (
    <Stack
      background="black"
      height={54}
      width="100%"
      boxShadow="rgba(0, 0, 0, 0.52) 0px 3px 6px, rgba(0, 0, 0, 0.2) 0px 3px 6px"
    >
      <Container
        maxWidth={975}
        height="100%"
        alignItems="center"
        justifyContent="space-between"
        display="flex"
        flexDirection="row"
      >
        <Image maxWidth={105} marginTop={2} src={logo} />
        <Input
          maxWidth="215px"
          maxHeight={34}
          fontSize={14}
          type="text"
          placeholder="Buscar"
          background="#191919"
          variant="filled"
          _placeholder={{
            textAlign: 'center',
          }}
        />
        <Box>
          <Avatar size="sm" cursor="pointer" />
        </Box>
      </Container>
    </Stack>
  );
}

export default Header;
