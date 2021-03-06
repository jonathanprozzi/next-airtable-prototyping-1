import { Box, Flex, Heading, Text} from "@chakra-ui/core";


const PlaylistPage = ({data, title, description}) => {
  console.log({data, title, description})

  return (
    <Box>
       <Flex direction='column' justify='center' align='center'>
        {title !== 'empty' ? (
          <>
          <Heading color='cyan.200'>{title}</Heading>
          <Text color='cyan.200' maxWidth='80ch'>{description}</Text>
          </>
        ) : (
          <>
          <Heading color='cyan.200'>That playlist doesn't exist!</Heading>
          </>
        )
      }
      </Flex>
    </Box>
  )
}

export default PlaylistPage;

export async function getServerSideProps({ params }) {
  const airApiKey = process.env.API_KEY;
  const baseId = process.env.BASE_ID;
  const tableName = 'Playlists'

// TODO: clean up this API call and see if it can be moved to an actual API route
  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${tableName}?filterByFormula=%7Bplaylist-slug%7D%3D%27${params.id}%27&api_key=${airApiKey}`,
    { method: "GET", mode: "no-cors", credentials: "same-origin" }
  );

  const data = await res.json();

  if (data.records.length > 0) {
    return {
      props: {
        title: data.records[0].fields["Playlist Title"] || "Mystery Playlist",
        description: data.records[0].fields["Description"] || "Coming soon!",
        slug: data.records[0].fields["playlist-slug"] || 'empty'
      },
    };
  } else {
    return {
      props: {
        title: "empty",
      },
    };
  }
}
