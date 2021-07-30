import Navbar from "./components/Navbar";

import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import useDarkmode from "./hooks/useDarkMode";

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const App = () => {
    const [colorTheme, setTheme] = useDarkmode();
    return (
        <div className="min-h-screen dark:bg-black transition duration-500 ">
            <h1 className=" text-blue-500 dark:text-white">Hello</h1>
            <button
                className="text-blue-700 dark:text-indigo-50"
                onClick={() => setTheme(colorTheme)}
            >
                Theme Toggle
            </button>
        </div>
    );
};

export default App;
