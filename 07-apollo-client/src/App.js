import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import logo from "./logo.svg";
import "./App.css";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Query
          query={gql`
            {
              rates(currency: "USD") {
                currency
                rate
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            console.log("====================================");
            console.log("test", loading, error, data, "qq");
            console.log("====================================");
            if (loading) return <div>Loading...</div>;
            return (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
