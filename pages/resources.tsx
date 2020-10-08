import useSWR from "swr";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
  Alert,
  Spinner,
} from "@chakra-ui/core";
import ResourceGrid from "../components/ResourceGrid";

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    mode: "no-cors",
    credentials: "same-origin",
  });
  if (!res.ok) {
    throw Error("There is problem with the data request.");
  }
  const data = await res.json();

  return data;
};

const ResourcePage = () => {
  const { data, error } = useSWR("api/getAllResources", fetcher);
  console.log({ data });

  if (error) {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        minHeight="100vh"
      >
        <Alert status="error">
          Failed to load data: {error.message}. Please reach out to
          contact@digitalharbor.org
        </Alert>
      </Flex>
    );
  }

  if (!data) {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        minHeight="100vh"
      >
        <Flex direction="column" align="center" justify="center">
          <Alert status="info">Loading the resources...</Alert>
          <Spinner
            size="xl"
            thickness="2px"
            emptyColor="cyan.100"
            color="cyan.300"
            margin={4}
          />
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex direction="column" align="center" justify="center">
      <Heading as="h1" color="white">
        Resources
      </Heading>
      <Box paddingY={4}>
        <Text color="white">hack the planet!</Text>
      </Box>
      <ResourceGrid data={data} />
    </Flex>
  );
};

export default ResourcePage;
