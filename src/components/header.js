import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/meezu-logo.svg"
import SearchIcon from "../images/search-icon.svg"
import "./header.css"

class Header extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className="HeaderGroup">
        <Link className="Logo" to="/"><img src={Logo} width="30"></img></Link>
        <Link to="#profile">Profile</Link>
        <Link to="#what-we-do">What We Do?</Link>
        <Link to="/services">Services</Link>
        <Link to="#project">Project</Link>
        <Link className="SearchIcon" to="/"><img src={SearchIcon} width="30"></img></Link>
      </div>
    </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
