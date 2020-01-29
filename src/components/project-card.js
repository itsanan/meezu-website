import React from "react"
import "./styles/project-card.scss"

class ProjectCard extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
                <div className="wrapper">
                    <div>
                        <img id="images" src={this.props.image} />
                    </div>
                    <div className="nested">
                        <div>
                            <h2 id="numbers">{this.props.number}</h2>
                        </div>
                        <div>
                            <h3 id="titles">{this.props.title}</h3>
                        </div>
                        <div>
                            <p id="description">{this.props.text}</p>
                        </div>
                    </div>
                </div>
        );    
    }

}

export default ProjectCard