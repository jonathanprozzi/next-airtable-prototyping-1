import { Box, Flex } from "@chakra-ui/core";

const SiteLayout: React.FC = ({ children }) => {
  return (
    <Box
      overflowX="hidden"
      margin="0 auto"
      bg="gray.100"
      minHeight="100vh"
      minWidth="100vw"
    >
      <Box minHeight="90vh">{children}</Box>
    </Box>
  );
};

export default SiteLayout;
