import React from 'react'
import Buttons from './Buttons'
import Output from './Output'

export default function Render(props) {
  return (
    <div className="render">
      <p id="render-title">Output</p>
      <Output 
        personalInfo={props.personalInfo}
        experienceList={props.experienceList}
        educationList={props.educationList}
      />
      <Buttons 
        handleClear={props.handleClear}
        handleLoadExample={props.handleLoadExample}
      />
    </div>
  )
}
