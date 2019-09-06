import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/meezu-logo.svg"
import SearchIcon from "../images/search-icon.svg"
import "./header.css"
import AniLink from "gatsby-plugin-transition-link/AniLink";


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
        <AniLink duration={1} className="Logo" paintDrip hex="#00F5FF" to="/"><img src={Logo} width="30" alt=""></img></AniLink>
        <AniLink duration={1} paintDrip to="/profile" hex="#00F5FF">Profile</AniLink>
        <AniLink duration={1} paintDrip to="/what-we-do" hex="#00F5FF">What We Do?</AniLink>
        <AniLink duration={1} paintDrip to="/services" hex="#00F5FF">Services</AniLink>
        <AniLink duration={1} paintDrip to="/project" hex="#00F5FF">Project</AniLink>
        <AniLink duration={1} paintDrip className="SearchIcon" to="/" hex="#00F5FF"><img src={SearchIcon} width="30" alt=""></img></AniLink>
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
