import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/meezu-logo.svg"
import SearchIcon from "../images/search-icon.svg"
import "./header.css"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link className="Logo" to="/"><img src={Logo} width="30"></img></Link>
      <Link to="/news">News</Link>
      <Link to="/featutes">Features</Link>
      <Link to="/prices">Prices</Link>
      <Link to="/blog">Blog</Link>
      <Link className="SearchIcon" to="/"><img src={SearchIcon} width="30"></img></Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
