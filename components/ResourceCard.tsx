import { Flex, ButtonGroup, Button, Heading, Text } from "@chakra-ui/core";
import VoteWidget from "./VoteWidget";

const ResourceCard = ({ data }) => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Heading as="h3" color="white" size="md">
        {data.fields["name"]}
      </Heading>

      <VoteWidget
        id={data.fields["id"]}
        rating={
          data.fields["rating"] !== undefined
            ? data.fields["rating"]
            : "lol nope"
        }
      />
    </Flex>
  );
};

export default ResourceCard;
