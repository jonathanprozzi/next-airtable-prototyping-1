import { Box, Heading } from "@chakra-ui/core";


const PlaylistPage = ({title, slug}) => {
  return (
    <Box>
      <Heading color='white'>{title}</Heading>
    </Box>
  )
}

export default PlaylistPage;

export async function getServerSideProps({ params }) {
  const airApiKey = process.env.API_KEY;
  const baseId = process.env.BASE_ID;
  const tableName = 'Playlists'


  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${tableName}?filterByFormula=%7Bplaylist-slug%7D%3D%27${params.id}%27&api_key=${airApiKey}`,
    { method: "GET", mode: "no-cors", credentials: "same-origin" }
  );

  const data = await res.json();

  if (data.records.length > 0) {
    return {
      props: {
        title: data.records[0].fields["Playlist Title"],
        slug: data.records[0].fields["playlist-slug"]

      },
    };
  } else {
    return {
      props: {
        name: "empty",
      },
    };
  }
}
