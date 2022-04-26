import React, { useState } from 'react'

export default function ControlComponent() {
  const [state, setState] = useState({
    value: ''
    })

    const handleChange =(event)=> {
      setState({value: event.target.value});
     }

    const handleSubmit = (event)=> {
    alert('A name was submitted: ' + state.value);
    event.preventDefault();
    }

    return (
    <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={state.value} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
    );

}

