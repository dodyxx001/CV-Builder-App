import React from 'react'

export default function FormEducation(props) {
  return (
    <div id="education" className="form-element">
            
            <input name="university" type="text" placeholder="University name" onChange={(e) => props.handleChangeEducation(e, props.id)}></input>
            <input name="city" type="text" placeholder="City" onChange={(e) => props.handleChangeEducation(e, props.id)}></input>
            <input name="degree" type="text" placeholder="Degree" onChange={(e) => props.handleChangeEducation(e, props.id)}></input>
            <input name="from" type="text" placeholder="From" onChange={(e) => props.handleChangeEducation(e, props.id)}></input>
            <input name="to" type="text" placeholder="To" onChange={(e) => props.handleChangeEducation(e, props.id)}></input>
            <button name="education-delete">Delete</button>

    </div>
  )
}
