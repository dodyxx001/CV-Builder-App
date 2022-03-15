import React from 'react'
import Experience from './Experience'

export default function OutputExperienceList(props) {
  return (

    props.experienceList.map((item) => {
        return <Experience 
          key={item.id}
          company={item.company}
          city={item.city}
          position={item.position}
          from={item.from}
          to={item.to}
        />
    })
        

  )
}
