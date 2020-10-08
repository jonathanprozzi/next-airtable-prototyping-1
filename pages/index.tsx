import { Box, Flex, Heading, Text } from "@chakra-ui/core";

const IndexPage = ({ id, textColor, bgUrl }) => {
  console.log({ id, textColor, bgUrl });
  return (
    <Flex direction="column" align="center" justify="center">
      <Heading as="h1">Test App</Heading>
      <Box>
        <Text color="red.500">hack the planet!</Text>
      </Box>
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

  const airtableData = await res.json();

  if (airtableData.records.length > 0) {
    return {
      props: {
        id: airtableData.records[0].fields["id"],
        textColor: airtableData.records[0].fields["textColor"] || "dark",
        bgUrl: airtableData.records[0].fields["bgUrl"] || "none",
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
