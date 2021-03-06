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
        
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        })
        
        gapi.client.load('calendar', 'v3')

        gapi.auth2.getAuthInstance().signIn()
        .then(() => {
            let event = {
                'summary': 'booklub meeting',
                'location': 'virtual',
                'description': 'first meeting',
                'start': {
                  'dateTime': '2020-11-20T13:00:00-01:00',
                  'timeZone': 'America/Toronto'
                },
                'end': {
                  'dateTime': '2020-11-20T17:00:00-01:00',
                  'timeZone': 'America/Toronto'
                },
                'recurrence': [
                  'RRULE:FREQ=MONTHLY;COUNT=1'
                ],
                'attendees': [
                  {'email': 'random@gmail.com'},
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
                  window.open(event.htmlLink)
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
              <li className="addEvent__list-item"><FaBookOpen/> after getting to know each other choose a moderator</li>
              <li className="addEvent__list-item"><FaBookOpen/> stay on the same page</li>
              <li className="addEvent__list-item"><FaBookOpen/> remember that the purpose of this club is to read and enjoy yourselves</li>
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
            <img className="addEvent__image" src={process.env.PUBLIC_URL + '/assets/meeting-icon-blue.jpg'} alt="virtual meeting illustration"/>
        </div>
      </div>
    </div>
  )
}

export default AddEvent;
