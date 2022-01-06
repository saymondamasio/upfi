import { Box, Flex, Heading, Progress } from '@chakra-ui/react';
import Head from 'next/head';

export function Loading(): JSX.Element {
  return (
    <>
      <Head>
        <title>Carregando...</title>
      </Head>
      <Flex
        justifyContent="center"
        alignItems="center"
        h="100vh"
        flexDir="column"
      >
        <Box>
          <Heading>Carregando aplicação...</Heading>
          <Progress
            mt={4}
            size="xs"
            isIndeterminate
            bgColor="transparent"
            colorScheme="orange"
          />
        </Box>
      </Flex>
    </>
  );
}
