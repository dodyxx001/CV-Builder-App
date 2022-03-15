import React from 'react'
import Education from './Education'

export default function OutputEducationList(props) {
  return (
    props.educationList.map((item) => {
        return <Education
            key={item.id}
            university={item.university}
            degree={item.degree}
            city={item.city}
            from={item.from}
            to={item.to}
        />
    })
  )
}
