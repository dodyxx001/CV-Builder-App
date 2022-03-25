import React from 'react'

export default function Buttons(props) {
  return (
    <div id="buttons-wrapper">
        <button id="button-change-theme" onClick={props.handleChangeTheme}>Change theme</button>
        <button id="button-load-example" onClick={props.handleLoadExample}>Load Example</button>
        <button id="button-clear" onClick={props.handleClear}>Clear</button>
        <button id="button-print" onClick={props.handlePrint}>Print / Download PDF</button>
    </div>
  )
}
