import React from 'react'

export default function FormPersonalInfo(props) {
  
  

  

  return (
    <div id="personal-information" className="form-element">
            
            <input 
                id="name" 
                type="text" 
                placeholder="Name" 
                onChange={props.handleChangePersonalInfo}>
            </input>
            <input 
                id="proffession" 
                type="text" 
                placeholder="Proffession" 
                onChange={props.handleChangePersonalInfo}>
            </input>
            <input 
                id="birth" 
                type="text" 
                placeholder="Date of birth" 
                onChange={props.handleChangePersonalInfo}>           
            </input>
            {/* <input id="citizenship" type="text" placeholder="Citizenship"></input> */}
            {/* <input id="address" type="text" placeholder="Address"></input> */}
            <input 
                id="telephone" 
                type="text" 
                placeholder="Telephone number" 
                onChange={props.handleChangePersonalInfo}>
            </input>
            <input 
                id="email" 
                type="text" 
                placeholder="Email" 
                onChange={props.handleChangePersonalInfo}>
            </input>
            <input 
                id="description" 
                type="text" 
                placeholder="Description" 
                onChange={props.handleChangePersonalInfo}>
            </input>
    </div>
  )
}
