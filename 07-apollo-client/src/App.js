import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://139.162.47.241:4000"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Query
          query={gql`
            {
              books {
                title
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            console.log(loading, data, error);
            return (
              <div>
                <div>{`Loading: ${loading}`}</div>
                <div>{`data: ${JSON.stringify(data)}`}</div>
              </div>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
