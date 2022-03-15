import React, {useState} from 'react';
import '../App.css';
import Form from './Form';
import OutputExperienceList from './OutputExperienceList';
import Render from './Render';

export default function Main () {

    // const [name, setName] = useState('Ziga Dodich');

    // const handleChangeName = (e) => {
    //     setName(e.target.value)
    // }

    const [personalInfo, setPersonalInfo] = useState({
        name: 'Zach Dodich Test',
        proffession: 'Softtttt developer, vet',
        birth: '2.8.1993',
        telephone: '040 233 600',
        email: 'example.dodich@gmail.com',
        description: 'lorem ipsum aojf ldjhv lkwe lkwejf lkwejf lkwej hrkjew flkjadjc asdkl vjaskldjv  lakjsdhlkjsd vkhrvwop r poer ši rqšpoipšeo ršpwoeri i špeqori aslkčdj lkjv a cvkj h v aks as h kh vliq uryq ulkj qwlkf',
    });

    const handleChangePersonalInfo = (e) => {
        let targetid = e.target.id;

        setPersonalInfo((prevState) => {
            let info = { ...prevState }      //copy of default state obj
            info[targetid] = e.target.value; //changing the goal property 
            return info                      //returning modified state obj
        });
    }


    // EXPERIENCE SECTION
    const [experienceList, setExperience] = useState([{
        position: 'Software developer',
        company:'Netflix inc.',
        city: 'Denver',
        from: '01.01.2010',
        to: '01.01.2020',
        id: Date.now(),
    }]);


    // Zajebana funkcija, iz form-experience komponente moremo
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
    }

    const handleAddExperience = () => {
        let newExperience = {
            position: '',
            company:'',
            city: '',
            from: '',
            to: '',
            id: Date.now(),
        };
        setExperience((arr) => [...arr, newExperience])
    };


    // EDUCATION SECTION

    const [educationList, setEducation] = useState([{
        university: 'UL Veterinarska fakulteta',
        degree: 'Veterinarian',
        city: 'Ljubljana',
        from: '01.01.2010',
        to: '01.01.2018',
        id: Date.now(),
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
            id: Date.now(),
        }

        setEducation((arr) => [...arr, newEducation])
     
    };

  

    return (
        <div className="main">
            <Form 
                handleChangePersonalInfo={handleChangePersonalInfo} 
                experienceList={experienceList}
                handleChangeExperience={handleChangeExperience}
                handleAddExperience={handleAddExperience}
                educationList={educationList}
                handleChangeEducation={handleChangeEducation}
                handleAddEducation={handleAddEducation}
            />
            <Render 
                personalInfo={personalInfo}
                experienceList={experienceList}
                educationList={educationList}
            />
        </div>
    );
}

