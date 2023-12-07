import React from 'react'

export default function ChooseUser({setUsername, username}) {
    const handleOptionChange = (event) => {
        setUsername(event.target.value);
      };
    return (
        <div>
          <label>
            <input
              type="radio"
              value="Current User"
              checked={username === 'Current User'}
              onChange={handleOptionChange}
            />
            Current User
          </label>
    
          <label>
            <input
              type="radio"
              value="Other User"
              checked={username === 'Other User'}
              onChange={handleOptionChange}
            />
            Other User
          </label>
    
          {/* <p>Selected Option: {selectedOption}</p> */}
        </div>
      );
}





