import PropTypes from "prop-types"
import React from "react"
import "./styles/header.scss"
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
        <AniLink className="service" duration={1} paintDrip to="/services" hex="#C93200">Services</AniLink>
        <AniLink className="WhatWeDo" duration={1} paintDrip to="/what-we-do" hex="#C93200">What We Do</AniLink>
        <AniLink className="brand" duration={1} paintDrip to="/" hex="#C93200">Meezu Company</AniLink>
        <AniLink className="project" duration={1} paintDrip to="/project" hex="#C93200">Project</AniLink>
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
