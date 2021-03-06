import { Box, Button, ButtonGroup, Flex, Heading, Text } from "@chakra-ui/core";

import VoteWidget from "../components/VoteWidget";

const IndexPage = ({ id, textColor, bgUrl }) => {
  console.log({ id, textColor, bgUrl });
  return (
    <Flex backgroundImage={`url(${bgUrl}), linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,0.0))`}
    backgroundBlendMode='overlay'
    backgroundRepeat="no-repeat"
    backgroundPosition="center center"
    backgroundSize='cover'
    minHeight='100vh'
    align='center'
    justify='center'
    >
    <Flex direction="column" align="center" justify="center" >
      <Heading as="h1" color="cyan.200">
        Test App
      </Heading>
      <Box paddingY={4} >
        <Text color="cyan.200">hack the planet!</Text>
      </Box>
    </Flex>
    </Flex>
  );
};

export async function getServerSideProps() {
  const airApiKey = process.env.API_KEY;
  const baseId = process.env.BASE_ID;

  // this fetches from Airtable based on the uuid field:
  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/Dynamic?api_key=${airApiKey}`,
    { method: "GET", mode: "no-cors", credentials: "same-origin" }
  );

  // this works by recordID, but this isnt ideal for the slug
  // `https://api.airtable.com/v0/${baseId}/${tableName}/${params.uuid}?api_key=${airApiKey}`,

  const data = await res.json();

  if (data.records.length > 0) {
    return {
      props: {
        id: data.records[0].fields["id"],
        textColor: data.records[0].fields["textColor"] || "dark",
        bgUrl: data.records[0].fields["bgUrl"] || "none",
      },
    };
  } else {
    return {
      props: {
        id: "empty",
      },
    };
  }
}

export default IndexPage;
