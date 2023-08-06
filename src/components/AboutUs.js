import React from 'react'
import Header from './Header'

import '../styles/style.css'

class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutus-layout page">
        <Header
          setContactModalOn={this.props.setContactModalOn} 
          setContactModalOff={this.props.setContactModalOff}
        />
        <div className="aboutus-container">
            <div className="aboutus-text">
              <h2>Our story starts with one man.</h2>
              <p>Back in 1954, a man named Ray Kroc discovered a small burger restaurant in California, and wrote the first page of our history. From humble beginnings as a small restaurant, we're proud to have become one of the world's leading food service brands with more than 36,000 restaurants in more than 100 countries.</p>
            </div>
        </div>
        {/* Background is separate from container to show filter */}
        <div className="aboutus-bg"/>
      </div>
    )
  }
}

export default AboutUs