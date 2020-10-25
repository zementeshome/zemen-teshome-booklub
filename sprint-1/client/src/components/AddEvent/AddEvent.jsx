import React from 'react'
import './AddEvent.scss';
import { FaBookOpen } from 'react-icons/fa';

function AddEvent() {

    let gapi = window.gapi
    let CLIENT_ID = "345527721227-14s99r64u63br5634e1csvvcqcnnecbe.apps.googleusercontent.com"
    let API_KEY = "AIzaSyC2tqnocECgB7xT5F3NrYODL3NHRyh-VYE"
    let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    let SCOPES = "https://www.googleapis.com/auth/calendar";

    const handleClick = () => {
        gapi.load(`client:auth2`, () => {
            console.log('client loaded')
        
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        })
        
        gapi.client.load('calendar', 'v3', () => console.log('it works'))

        gapi.auth2.getAuthInstance().signIn()
        .then(() => {
            let event = {
                'summary': 'Google I/O 2015',
                'location': '800 Howard St., San Francisco, CA 94103',
                'description': 'A chance to hear more about Google\'s developer products.',
                'start': {
                  'dateTime': '2015-05-28T09:00:00-07:00',
                  'timeZone': 'America/Los_Angeles'
                },
                'end': {
                  'dateTime': '2015-05-28T17:00:00-07:00',
                  'timeZone': 'America/Los_Angeles'
                },
                'recurrence': [
                  'RRULE:FREQ=DAILY;COUNT=2'
                ],
                'attendees': [
                  {'email': 'lpage@example.com'},
                  {'email': 'sbrin@example.com'}
                ],
                'reminders': {
                  'useDefault': false,
                  'overrides': [
                    {'method': 'email', 'minutes': 24 * 60},
                    {'method': 'popup', 'minutes': 10}
                  ]
                }
              }
              let request = gapi.client.calendar.events.insert({
                  'calendarId': 'primary',
                  'resource': event,
              })

              request.execute(event => {
                // console.log(event)
                  window.open(event.htmlLink)
                  // or window.open
              })
        })
    })
}
    return (
        <div className="addEvent">
           <div className="addEvent__main-container">
          <div className="addEvent__left-container">
          <h1 className="addEvent__header">tips to make your klub run smoothly:</h1>
          <div className="addEvent__container">
          <ul className="addEvent__list">
          <li className="addEvent__list-item"><FaBookOpen/> after getting to know each choose a moderator</li>
          <li className="addEvent__list-item"><FaBookOpen/> stay on the same page</li>
          <li className="addEvent__list-item"><FaBookOpen/> remember that the purpose of this klub is to read and enjoy yourselves</li>
          <li className="addEvent__list-item"><FaBookOpen/> give your discussions structure</li>
          <li className="addEvent__list-item"><FaBookOpen/> give everyone a chance to be heard and have their book of choice nominated</li>
          <li className="addEvent__list-item"><FaBookOpen/> meetings should start on time and can be organized through google calendar below</li>
          </ul>
          </div>
          <div className="addEvent__button-container">
          <button className="addEvent__button" onClick={handleClick}><span className="addEvent__add">add event</span></button>
          </div>
          </div>
          <div className="addEvent__right-container">
          <img className="addEvent__image" src={process.env.PUBLIC_URL + '/assets/meeting-image.svg'} alt="virtual meeting illustration"/>
          </div>
          </div>
        </div>
    )
}

export default AddEvent;
