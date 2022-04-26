import React, {useRef} from 'react'

export default function UnControlledComponent() {
  const inputElement = useRef(null);

  const handleSubmit =(event)=> {
     alert('A name was submitted: ' + inputElement.current.value);
     event.preventDefault();
   }

     return (
       <form onSubmit={handleSubmit}>
         <label>
           Name:
           <input type="text" ref={inputElement} />
         </label>
         <input type="submit" value="Submit" />
       </form>
     );
}

