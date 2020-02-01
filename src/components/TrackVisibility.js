import React from "react"

class TrackVisibility extends React.Component {
    ref = React.createRef()

    async componentDidMount() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio === 0.1) {
                    // Element came into view
                } else if (entry.intersectionRatio === 0.5) {
                    // Half the element is visible
                } else if (entry.intersectionRatio === 1) {
                    // Element is fully in view
                    this.props.onVisible()
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: [0.1, 0.5, 1.0],
            }
        )

        if (this.ref.current) {
            observer.observe(this.ref.current)
        }
    }

    // async function initializeObserver() {
    //     if (!('IntersectionObserver' in window)) {
    //         // This is polyfill specially for Safari
    //         await import('intersection-observer')
    //     }

    //     const observer = new IntersectionObserver(callback, options)
    // }

    render() {
        return <div ref={this.ref}>{this.props.children}</div>
    }
}

export default TrackVisibility