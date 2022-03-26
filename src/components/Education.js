import React from 'react'

export default function Education(props) {
  return (
    <div className="education-element">
        <p className="section-title education-from-to">{props.from} - {props.to}</p>
        <div className="education-element-right">
            <p className="section-title education-title">{props.degree ? 'Degree:' : ''} {props.degree}</p>
            <p className="education-company">{props.university}, {props.city}</p>
        </div>
    </div>
  )
}


// Ce nimamo Degree-ja vpisanega, se text Degree: ne prikaze.
// vsi podatki so podani v propsih