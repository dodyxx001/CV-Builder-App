import React from 'react'

export default function FormExperience(props) {
  return (
    <div id="experience" className="form-element">
            
            <input name="position" type="text" placeholder="Position" value={props.position} onChange={(e) => props.handleChangeExperience(e, props.id)}></input>
            <input name="company" type="text" placeholder="Company" value={props.company} onChange={(e) => props.handleChangeExperience(e, props.id)}></input>
            <input name="city" type="text" placeholder="City" value={props.city} onChange={(e) => props.handleChangeExperience(e, props.id)} ></input>
            <input name="from" type="text" placeholder="From" value={props.from} onChange={(e) => props.handleChangeExperience(e, props.id)}></input>
            <input name="to" type="text" placeholder="To" value={props.to} onChange={(e) => props.handleChangeExperience(e, props.id)}></input>
            <button name="experience-delete" onClick={props.experienceList.length > 1 ? () => props.handleDeleteExperience(props.id) : null }>Delete</button>

    </div>
  )
}

// v propsih imamo spravljen id, key in funkcijo nadleChangeExperience.
// moremo uporabit ((e) => props.handleChangeExperience(e, id)) formo, drugace ne dela

// onClick in onChange eventi morejo bit call-ani v tej formi, 
// () => do something
// zato ker, jih moremo call-at z nekimi parametri - id in e
// ce ne uporabimo callbacka, se avtomatsko calla. nocemo tega

// delete button: se aktivira le, če imamo več kot 1 item
// če je sam 1 item, ga ne deletamo, ker pol vrze error pri renderingu