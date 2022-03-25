import React from 'react';
import '../App.css';
import FormEducation from './form-education';
import FormExperience from './form-experience';
import FormPersonalInfo from './form-personalinfo';

export default function Form(props) {


  const experienceItems = props.experienceList.map((item) => (
      <FormExperience
        handleChangeExperience={props.handleChangeExperience}
        handleDeleteExperience={props.handleDeleteExperience}
        key={item.id}
        id={item.id}
        company={item.company}
        city={item.city}
        position={item.position}
        from={item.from}
        to={item.to}
        experienceList={props.experienceList}
      />
  ))

  const educationItems = props.educationList.map((item) => (
      <FormEducation
        handleChangeEducation={props.handleChangeEducation}
        handleDeleteEducation={props.handleDeleteEducation}
        key={item.id}
        id={item.id}
        university={item.university}
        degree={item.degree}
        city={item.city}
        from={item.from}
        to={item.to}
        educationList={props.educationList}
      />
  ))

  return (
    <div className="form">
        <p id="form-title">Input</p>
        <p className="form-subtitle">Personal information</p>

        <FormPersonalInfo 
          personalInfo={props.personalInfo}
          handleChangePersonalInfo={props.handleChangePersonalInfo}
          handleChangePhoto={props.handleChangePhoto}

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

// university, degree in ostale value-je podamo naprje v child komponente
// zato da jih lahko uporabimo da se form avtomatsko izpolni
// ko loadamo example

