import React from 'react';
import '../App.css';
import FormEducation from './form-education';
import FormExperience from './form-experience';
import FormPersonalInfo from './form-personalinfo';

export default function Form(props) {


  const experienceItems = props.experienceList.map((item) => (
      <FormExperience
        handleChangeExperience={props.handleChangeExperience}
        key={item.id}
        id={item.id}
      />
  ))

  const educationItems = props.educationList.map((item) => (
      <FormEducation
        handleChangeEducation={props.handleChangeEducation}
        key={item.id}
        id={item.id}
      />
  ))

  return (
    <div className="form">
        <p id="form-title">Input</p>
        <p className="form-subtitle">Personal information</p>

        <FormPersonalInfo 
          handleChangePersonalInfo={props.handleChangePersonalInfo}
        />

        <p className="form-subtitle">Education</p>

        {educationItems}

        <button id="add-education" onClick={props.handleAddEducation}>Add</button>
        <p className="form-subtitle">Experience</p>

        {experienceItems}   

        <button id="add-experience" onClick={props.handleAddExperience}>Add</button>
    </div>
  )
}

// v propsih imamo seznam experienceList objectov
// ta array mappamo in ustvarimo za vsak object svoj form, da ga lahko editamo
// shranimo v en var=experienceItems array form-ov, ga damo spodaj v jsx
// ko mappamo, vsakemu elementu dodmao key in id - key rabi react, id pa rabimo mi kasneje za onChange event v FormExperience komponenti

// za personal info tega ne rabimo, ker imamo obviously samo en personal info
// za education pa velja isto ko za experience.

