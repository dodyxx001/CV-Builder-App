import React from 'react'

export default function FormEducation(props) {
  return (
    <div id="education" className="form-element">
            
            <input 
              name="university" 
              type="text" 
              placeholder="University / school name" 
              onChange={(e) => props.handleChangeEducation(e, props.id)} 
              value={props.university}
            ></input>
            <input 
              name="city" 
              type="text" 
              placeholder="City" 
              onChange={(e) => props.handleChangeEducation(e, props.id)}
              value={props.city}
            ></input>
            <input 
              name="degree" 
              type="text" 
              placeholder="Degree" 
              onChange={(e) => props.handleChangeEducation(e, props.id)}
              value={props.degree}
            ></input>
            <input 
              name="from" 
              type="text" 
              placeholder="From" 
              onChange={(e) => props.handleChangeEducation(e, props.id)}
              value={props.from}
              ></input>
            <input 
              name="to" 
              type="text" 
              placeholder="To" 
              onChange={(e) => props.handleChangeEducation(e, props.id)}
              value={props.to}
              ></input>
              
            <button name="education-delete" onClick={() => props.handleDeleteEducation(props.id)}>Delete</button>

    </div>
  )
}



// onClick in onChange eventi morejo bit call-ani v tej formi, 
// () => do something
// zato ker, jih moremo call-at z nekimi parametri - id in e
// ce ne uporabimo callbacka, se avtomatsko calla. nocemo tega

// v propsih imamo spravljen id, key in funkcijo handleChangeEducation.
// moremo uporabit ((e) => props.handleChangeEducation(e, id)) formo, drugace ne dela
