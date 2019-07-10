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
      <Link to="/news">Profile</Link>
      <Link to="/featutes">What We Do?</Link>
      <Link to="/prices">Services</Link>
      <Link to="/blog">Project</Link>
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
