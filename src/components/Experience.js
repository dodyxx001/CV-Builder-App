import React from 'react'

export default function Experience(props) {
  return (
    <div className="experience-element">
        <p className="section-title experience-from-to">{props.from} - {props.to}</p>
        <div className="experience-element-right">
            <p className="section-title experience-title">{props.position}</p>
            <p className="experience-company">{props.company}, {props.city}</p>
        </div>
    </div>
  )
}
