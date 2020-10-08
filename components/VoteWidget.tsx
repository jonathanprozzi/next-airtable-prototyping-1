import { Flex, ButtonGroup, Button } from "@chakra-ui/core";

const VoteWidget = ({ id, rating }) => {
  return (
    <Flex direction="column" align="center" justify="center" marginY={4}>
      <ButtonGroup>
        <Button colorScheme="cyan" variant="outline" width="100%">
          Upvote
        </Button>
        <Button colorScheme="cyan" variant="outline" width="100%">
          Downvote
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default VoteWidget;
