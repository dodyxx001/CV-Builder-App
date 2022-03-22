import React from 'react'
import FileUploader from './FileUploader'

export default function FormPersonalInfo(props) {
  
  

  

  return (
    <div id="personal-information" className="form-element">
            
            <input 
                id="name" 
                type="text" 
                placeholder="Name" 
                className="personalInfoInput"
                value={props.personalInfo.name}
                onChange={props.handleChangePersonalInfo}>
            </input>
            <input 
                id="proffession" 
                type="text" 
                placeholder="Proffession" 
                className="personalInfoInput"
                value={props.personalInfo.proffession}
                onChange={props.handleChangePersonalInfo}>
            </input>
            <input 
                id="birth" 
                type="text" 
                placeholder="Date of birth" 
                className="personalInfoInput"
                value={props.personalInfo.birth}
                onChange={props.handleChangePersonalInfo}>           
            </input>
            <input 
                id="telephone" 
                type="text" 
                placeholder="Telephone number" 
                className="personalInfoInput"
                value={props.personalInfo.telephone}
                onChange={props.handleChangePersonalInfo}>
            </input>
            <input 
                id="email" 
                type="text" 
                placeholder="Email" 
                className="personalInfoInput"
                value={props.personalInfo.email}
                onChange={props.handleChangePersonalInfo}>
            </input>
            <input 
                id="description" 
                type="text" 
                placeholder="Description" 
                className="personalInfoInput"
                value={props.personalInfo.description}
                onChange={props.handleChangePersonalInfo}>
            </input>
            <FileUploader 
                handleChangePhoto={props.handleChangePhoto}
            />  

    </div>
  )
}
