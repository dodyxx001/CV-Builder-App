import React, {useRef} from 'react'
import Buttons from './Buttons'
import Output from './Output'
import { useReactToPrint } from 'react-to-print';


export default function Render(props) {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
      content: () => componentRef.current,
  });

  return (
    <div className="render">
      <p id="render-title">Output</p>
      <Output 
        personalInfo={props.personalInfo}
        experienceList={props.experienceList}
        educationList={props.educationList}
        photo={props.photo}
        ref={componentRef}
      />
      <Buttons 
        handleClear={props.handleClear}
        handleLoadExample={props.handleLoadExample}
        handlePrint={handlePrint}
      />
    </div>
  )
}
