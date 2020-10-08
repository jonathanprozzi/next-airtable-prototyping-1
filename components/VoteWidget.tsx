import { Flex, ButtonGroup, Button, Text } from "@chakra-ui/core";

const handleUpvote = (rating) => {
  console.log("upvote!");
  console.log(rating);
};

const handleDownvote = (rating) => {
  console.log("downVote!");
  console.log(rating);
};

const VoteWidget = ({ id, rating }) => {
  console.log({ id, rating });
  return (
    <Flex direction="column" align="center" justify="center" marginY={4}>
      <Text color="white">Rating: {rating}</Text>
      <ButtonGroup marginY={2}>
        <Button
          onClick={() => handleUpvote({ rating })}
          colorScheme="cyan"
          variant="outline"
          width="100%"
        >
          Upvote
        </Button>
        <Button
          onClick={() => handleDownvote({ rating })}
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
