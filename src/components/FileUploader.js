import React from 'react'

export default function FileUploader(props) {

    const handleClick = () => {
        const hiddenInput = document.querySelector('#hidden-input');
        hiddenInput.click();
    };

    const handleChangeFile = (e) => {
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile)
        props.handleChangePhoto(uploadedFile);
    };

  return (
    <div>
        <button id="upload-photo-button" onClick={handleClick}>Upload photo</button>
        <input type="file" id="hidden-input" style={{display:'none'}} onChange={handleChangeFile} />
    </div>
  )
}



// input smo skrili, ker je ugly
// button smo linkali na hidden input s funkcijo handleClick
// button lepse zgleda, ga lahko stylamo.

// handleChangeFile se trigga ob spremembi inputa - ko uploadamo file
// nov file shranimo v var.
// callamo funkcijo iz main.js, ki je passana v propsih za nastavit sliko

// v main.js imamo funkcijo za uploadat sliko
// treba je sliko najprej convertat v URL (string)
// to naredimo z URL.createobject(file)
// in pol setState - damo v state nov url od noega photo-ja