import React from 'react'
import OutputExperienceList from './OutputExperienceList'
import OutputEducationList from './OutputEducationList'

const Output = React.forwardRef((props, ref) => {

  return (
    <div id="output" ref={ref}>
        <div id="output-header">
            <div id="output-name">{props.personalInfo.name}</div>
            <div id="output-proffession">{props.personalInfo.proffession}</div>
        </div>
        <div id="output-body-wrapper">
            <div id="output-body">
                <div id="output-description" style={{ display: props.personalInfo.description ? "block" : "none" }}>
                    <p className="section">Description:</p>
                    <p>{props.personalInfo.description}</p>
                </div>
                <div id="output-education" style={{ display: props.educationList[0].university ? "block" : "none" }}>
                    <p className="section">Education:</p>
                    <OutputEducationList educationList={props.educationList} />    
                </div>
                <div id="output-experience">
                    <p className="section" style={{ display: props.experienceList[0].position ? "block" : "none" }}>Experience:</p>
                    <OutputExperienceList experienceList={props.experienceList} />    
                </div>
            </div>
            <div id="output-sidebar">
                <img id="output-image" src={props.photo}></img> 
                <p className="section">Personal details:</p>
                <p className="section-title">Date of birth:</p>
                <div id="output-date-of-birth">{props.personalInfo.birth}</div>
                <p className="section-title">Telephone:</p>
                <div id="output-telephone">{props.personalInfo.telephone}</div>
                <p className="section-title">Email:</p>
                <div id="output-email">{props.personalInfo.email}</div>
            </div> 
        </div> 
    </div>
  )
})

export default Output;


// div id:output-description ima display ternary operator - 
// cilj: ce je polje prazno, ne pokazi outputa na renderju
// pokazi ga sele, ko vnesemo nek value v input.
// isto velja za education in experience.