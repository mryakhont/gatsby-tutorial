import React from "react";
import { StaticQuery, graphql } from "gatsby";

export default () => {
    return (
        <StaticQuery
            query={graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`}
            render={data => (
                <div className="app">
                    <label>{data.site.siteMetadata.title}</label>
                </div>
            )}
        />
    );
}