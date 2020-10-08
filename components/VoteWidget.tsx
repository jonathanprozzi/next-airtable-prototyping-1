import { Flex, ButtonGroup, Button, Text } from "@chakra-ui/core";

// TODO: fetch to updateResource endpoint with the id, current rating, and add/subtract

const handleUpvote = (id, rating) => {
  console.log("upvote!");
  console.log(id);
  console.log(rating);
};

const handleDownvote = (id, rating) => {
  console.log("downVote!");
  console.log(id);
  console.log(rating);
};

const VoteWidget = ({ id, rating }) => {
  console.log({ id, rating });
  return (
    <Flex direction="column" align="center" justify="center" marginY={4}>
      <Text color="white">Rating: {rating}</Text>
      <ButtonGroup marginY={2}>
        <Button
          onClick={() => handleUpvote({ id }, { rating })}
          colorScheme="cyan"
          variant="outline"
          width="100%"
        >
          Upvote
        </Button>
        <Button
          onClick={() => handleDownvote({ id }, { rating })}
          colorScheme="cyan"
          variant="outline"
          width="100%"
        >
          Downvote
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default VoteWidget;
