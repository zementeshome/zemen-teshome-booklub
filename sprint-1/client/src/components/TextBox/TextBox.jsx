import React from 'react'

function TextBox( {users} ) {
    return (
            <div className="text">
              { users
                  ? (
                    <div className="text__box">
                      <h1 className="text__header">online:</h1>
                      <div className="text__online-container">
                        <h2>
                          {users.map(({name}) => (
                            <div key={name} className="text__online">
                              {name}
                              <img className="text__icon" alt="online Icon" src={process.env.PUBLIC_URL + '/assets/online.png'}/>
                            </div>
                          ))}
                        </h2>
                      </div>
                    </div>
                  )
                  : null
              }
            </div>
    )
}


export default TextBox;
