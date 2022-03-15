import React from 'react'

export default function FormExperience(props) {
  return (
    <div id="experience" className="form-element">
            
            <input name="position" type="text" placeholder="Position" onChange={(e) => props.handleChangeExperience(e, props.id)}></input>
            <input name="company" type="text" placeholder="Company" onChange={(e) => props.handleChangeExperience(e, props.id)}></input>
            <input name="city" type="text" placeholder="City" onChange={(e) => props.handleChangeExperience(e, props.id)} ></input>
            <input name="from" type="text" placeholder="From" onChange={(e) => props.handleChangeExperience(e, props.id)}></input>
            <input name="to" type="text" placeholder="To" onChange={(e) => props.handleChangeExperience(e, props.id)}></input>
            <button name="experience-delete">Delete</button>
            
    </div>
  )
}

// v propsih imamo spravljen id, key in funkcijo nadleChangeExperience.
// moremo uporabit ((e) => props.handleChangeExperience(e, id)) formo, drugace ne dela
