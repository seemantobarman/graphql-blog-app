import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

const Wrapper = () => {
    return (
        <ChakraProvider>
            <App />
        </ChakraProvider>
    );
};

export default Wrapper;
