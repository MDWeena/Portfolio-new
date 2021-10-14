import React from 'react'
import "./projects.css";

const Project = (props) => {
    return (
        <div className="project">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <a href={props.link}>Click to view app</a>
        </div>
    )
}

export default Project
