import React from 'react'
import emptyAvatar from '../assets/empty_avatar.png'
import OutputExperienceList from './OutputExperienceList'
import OutputEducationList from './OutputEducationList'

export default function Output(props) {
  return (
    <div id="output">
        <div id="output-header">
            <div id="output-name">{props.personalInfo.name}</div>
            <div id="output-proffession">{props.personalInfo.proffession}</div>
        </div>
        <div id="output-body-wrapper">
            <div id="output-body">
                <div id="output-description">
                    <p className="section">Description:</p>
                    <p>{props.personalInfo.description}</p>
                </div>
                <div id="output-education">
                    <p className="section">Education:</p>
                    <OutputEducationList educationList={props.educationList} />    
                </div>
                <div id="output-experience">
                    <p className="section">Experience:</p>
                    <OutputExperienceList experienceList={props.experienceList} />    
                </div>
            </div>
            <div id="output-sidebar">
                <img id="output-image" src={emptyAvatar}></img> 
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
}
