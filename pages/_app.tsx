import SiteLayout from "../components/SiteLayout";
import { ChakraProvider, Flex } from "@chakra-ui/core";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS>
      <Flex direction="column" align="center" justify="center">
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
