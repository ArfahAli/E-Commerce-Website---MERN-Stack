import React from 'react'
import './About.css';
import Header from './Header';
import Footer from './Footer';
const About = () => {
  return (
    <div>
        <Header/>
        <div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>
<h2 className='heading'>Our Team</h2>
<div className="rowTeam">
  <div className="columnTeam">
    <div className="cardTeam">
      <img src="ASSETS/images/user-1.png" alt="Jane" style={{width:'100%'}}/>
      <div className="containerTeam">
        <h2>Jane Doe</h2>
        <p className="titleTeam">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="buttonTeam">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="columnTeam">
    <div className="cardTeam">
      <img src="ASSETS/images/user-2.png" alt="Mike" style={{width:'100%'}}/>
      <div className="containerTeam">
        <h2>Mike Ross</h2>
        <p className="titleTeam">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="buttonTeam">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="columnTeam">
    <div className="cardTeam">
      <img src="ASSETS/images/user-3.png" alt="John" style={{width:'100%'}}/>
      <div className="containerTeam">
        <h2>John Doe</h2>
        <p className="titleTeam">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="buttonTeam">Contact</button></p>
      </div>
    </div>
  </div>
</div>

    <h2></h2>

    </div>
  )
}

export default About