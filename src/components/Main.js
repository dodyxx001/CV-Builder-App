import React, { useState} from 'react';
import '../App.css';
import Form from './Form';
import Render from './Render';
import ExampleCV from './ExampleCV';
import emptyAvatar from '../assets/empty_avatar.png' 
import exampleAvatar from '../assets/example_avatar.png'
import { v4 as uuidv4 } from 'uuid';

export default function Main () {

    // PERSONAL INFO SECTION

    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        proffession: '',
        birth: '',
        telephone: '',
        email: '',
        description: '',
    });

    const handleChangePersonalInfo = (e) => {
        let targetid = e.target.id;

        setPersonalInfo((prevState) => {
            let info = { ...prevState }      //copy of default state obj
            info[targetid] = e.target.value; //changing the goal property 
            return info                      //returning modified state obj
        });
    }

    // PHOTO SECTION

    const [ photo, setPhoto ] = useState(emptyAvatar);

    const handleChangePhoto = (file) => {
        const fileURL = URL.createObjectURL(file);  // preden set-amo nov image, ga moremo convertat v URL s tem ukazom
        setPhoto(fileURL);  
    };


    // EXPERIENCE SECTION
    const [experienceList, setExperience] = useState([{
        position: '',
        company:'',
        city: '',
        from: '',
        to: '',
        id: uuidv4(),
    }]);


    // Iz form-experience komponente moremo
    // dobiti e in id. Id dobimo tako, da v Form-u mappamo experienceList
    // in assignamo vsakemu itemu svoj key.

    const handleChangeExperience = (e, id) => {
        let { name, value } = e.target;

        setExperience((prevState) => {
            // spreminjamo le tisti item, ki ima isti ID kot naš form, ostale vrnemo nespremenjene
            const newExperience = prevState.map((item) => {
                if (item.id === id){
                    return { ...item, [name]: value }
                }
                return item;
            })
           
            return [...newExperience]
        })
    };

    const handleAddExperience = () => {
        let newExperience = {
            position: '',
            company:'',
            city: '',
            from: '',
            to: '',
            id: uuidv4(),
        };
        setExperience((arr) => [...arr, newExperience])
    };

    const handleDeleteExperience = (id) => {
        let filteredArr = experienceList.filter((ele) => {
            return ele.id !== id
        });

        setExperience(filteredArr);
    };


    // EDUCATION SECTION

    const [educationList, setEducation] = useState([{
        university: '',
        degree: '',
        city: '',
        from: '',
        to: '',
        id: uuidv4(),
    }]);


    const handleChangeEducation = (e, id) => {
        
        let { name, value } = e.target;

        setEducation((prevState) => {
            const newEducation = prevState.map((item) => {
                if (item.id === id) {
                    return { ...item, [name]: value }
                }
                return item;
            })
            return [ ...newEducation ]
        })
    };

    const handleAddEducation = () => {
        let newEducation = {
            university: '',
            degree: '',
            city: '',
            from: '',
            to: '',
            id: uuidv4(),
        }

        setEducation((arr) => [...arr, newEducation])
     
    };

    const handleDeleteEducation = (id) => {
        let filteredArr = educationList.filter((ele) => {
            return ele.id !== id
        });

        setEducation(filteredArr);
    };


    // CLEAR, LOAD EXAMPLE section
    // print section is in Output.js

    const handleClear = () => {
        // set all states to empty
        setPersonalInfo({});
        setEducation([{
            university: '',
            degree: '',
            city: '',
            from: '',
            to: '',
            id: uuidv4(),
        }]);
        setExperience([{
            position:'',
            company:'',
            city: '',
            from: '',
            to: '',
            id: uuidv4(),
        }]);
        setPhoto(emptyAvatar);

        let inputsToBeCleared = Array.from(document.getElementsByClassName('personalInfoInput'));
        inputsToBeCleared.forEach((input) => {
            input.value = ''
        });
    };

    const handleLoadExample = () => {
        setPersonalInfo(ExampleCV.personalInfo);
        setEducation(ExampleCV.education);
        setExperience(ExampleCV.experience);
        setPhoto(exampleAvatar);
    }

    const [themeColor, setThemeColor] = useState('blue');
    const handleChangeTheme = () => {
        if (themeColor === 'blue'){
            setThemeColor('red')
            Array.from(document.getElementsByClassName('form'))[0].style.backgroundColor = 'rgb(247, 217, 217)';
            Array.from(document.getElementsByClassName('section')).forEach((ele) => {
                ele.style.color = 'rgb(105, 29, 29)'
            });
            document.getElementById('form-title').style.backgroundColor = 'rgb(250, 158, 158)';
            document.getElementById('render-title').style.backgroundColor = 'rgb(253, 204, 204)';
            document.getElementById('output-header').style.backgroundColor = "rgb(105, 29, 29)";
        } else {
            setThemeColor('blue');
            Array.from(document.getElementsByClassName('form'))[0].style.backgroundColor = 'rgb(217, 217, 247)';
            Array.from(document.getElementsByClassName('section')).forEach((ele) => {
                ele.style.color = 'rgb(29, 29, 105)'
            });
            document.getElementById('form-title').style.backgroundColor = 'rgb(158, 158, 250)';
            document.getElementById('render-title').style.backgroundColor = 'rgb(204, 204, 253)';
            document.getElementById('output-header').style.backgroundColor = "rgb(29, 29, 105)";

        };
    }
        

    return (
        <div className="main">
            <Form 
                personalInfo={personalInfo}
                handleChangePersonalInfo={handleChangePersonalInfo} 
                handleChangePhoto={handleChangePhoto}
                experienceList={experienceList}
                handleChangeExperience={handleChangeExperience}
                handleAddExperience={handleAddExperience}
                handleDeleteExperience={handleDeleteExperience}
                educationList={educationList}
                handleChangeEducation={handleChangeEducation}
                handleAddEducation={handleAddEducation}
                handleDeleteEducation={handleDeleteEducation}
            />
            <Render 
                personalInfo={personalInfo}
                photo={photo}
                experienceList={experienceList}
                educationList={educationList}
                
                handleClear={handleClear}
                handleLoadExample={handleLoadExample}
                handleChangeTheme={handleChangeTheme}
            />
        </div>
    );
}

