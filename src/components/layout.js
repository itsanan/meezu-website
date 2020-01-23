/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import Footer from "./footer";



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulContact(sort: { fields: [createdAt], order: ASC}) {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)

  return (
    <>
        <Header/>
        <main>{children}</main>
        <Footer 
          data = {data}
        >
           Made with love in Surakarta
         <br/> © 2020 Meezu Creative Agency
        </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
