import React, { Component } from "react";
import ProgressiveImage from 'react-progressive-image'


class Image extends Component {

  componentDidMount() {
    
  }

  render() {
    const {src} = this.props;
    const {placeholder} = this.props;
    const {alt} = this.props;
    const {width} = this.props;
    const {height} = this.props;

    return (
      <ProgressiveImage 
      delay={3000}
      src={src}
      placeholder={placeholder}>
        {src => <img src={src} alt={alt} width={width} height={height} />}
      </ProgressiveImage>
    );
  }
}

export default Image