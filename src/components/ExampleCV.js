import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import exampleAvatar from '../assets/example_avatar.png'

let ExampleCV = {
  
    personalInfo: {
    name: 'John Doe',
    proffession: 'Software developer',
    birth: '01.01.1955',
    telephone: '003855 562 93 45',
    email: 'example@example.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
    },

    experience: [{
        position: 'Junior developer',
        company:'Google INC.',
        city: 'Palo Alto, California',
        from: '2018',
        to: '2020',
        id: uuidv4(),
        },
        {
        position: 'Senior developer',
        company:'Netflix INC.',
        city: 'Las Vegas, Nevada',
        from: '2020',
        to: '2022',
        id: uuidv4(),
        }
    ],
    
    education: [{
        university: 'CalTech',
        degree: 'Computer Sciences',
        city: 'Los Angeles',
        from: '2013',
        to: '2016',
        id: uuidv4(),
        },
        {
        university: 'Harvard',
        degree: 'IT Technologies',
        city: 'San Francisco',
        from: '2010',
        to: '2013',
        id: uuidv4(),
        }
    ],

};

export default ExampleCV;
