import Navbar from "./components/Navbar";

import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const App = () => {
    return <Navbar />;
};

export default App;
