import {
  Button,
  Grid
} from '@mui/material'
import { motion } from "framer-motion";
import React, { createRef } from 'react'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import ModularaModel from '../components/ModularaModel'
import Process from '../components/Process'

import mod1_plan from '../images/mod1_plan.png'
import mod1_side1 from '../images/mod1_side1.jpg'
import mod1_side2 from '../images/mod1_side2.jpg'
import mod1_front from '../images/mod1_front.jpg'
import mod1_back from '../images/mod1_back.jpg'

import mod2_plan from '../images/mod2_plan.png'
import mod2_side1 from '../images/mod2_side1.jpg'
import mod2_side2 from '../images/mod2_side2.jpg'
import mod2_front from '../images/mod2_front.jpg'
import mod2_back from '../images/mod2_back.jpg'

import sect4 from '../images/Jurisdiction.png'


import '../styles/style.css'

const LandingContainer = () => {
  const images = [
    { label: 'Front', imgPath: mod1_front },
    { label: 'Side 1', imgPath: mod1_side1 },
    { label: 'Side 2', imgPath: mod1_side2 },
    { label: 'Back', imgPath: mod1_back },
    { label: 'Plan', imgPath: mod1_plan },
  ]
  const images2 = [
    { label: 'Front', imgPath: mod2_front },
    { label: 'Side 1', imgPath: mod2_side1 },
    { label: 'Side 2', imgPath: mod2_side2 },
    { label: 'Back', imgPath: mod2_back },
    { label: 'Plan', imgPath: mod2_plan },
  ]
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  const myRefOne = createRef()
  const scrollModelOne = () => myRefOne?.current?.scrollIntoView({ behavior: 'smooth' })
  const myRefTwo = createRef()
  const scrollModelTwo = () => myRefTwo?.current?.scrollIntoView({ behavior: 'smooth' })
  const myRefThree = createRef()
  const scrollModelThree = () => myRefThree?.current?.scrollIntoView({ behavior: 'smooth' })
  const refProcess = createRef()
  const scrollRefProcess = () => refProcess?.current?.scrollIntoView({ behavior: 'smooth' })

  const mod1UnitInfo = '1 Floor | 280 SF: 1 bedroom, 1 bathroom, 1 kitchen'
  const mod2UnitInfo = '2 Floors | 430 SF: 1 bedroom, 1 bathroom, 1 kitchen'

  return (
    <div className='homePage'>
      
      {/* Landing section */}
      <div className='landing'>
        <div className='landing-layout'>
          <Header
            myRefOne={myRefOne}
            scrollModelOne={scrollModelOne}
            scrollModelTwo={scrollModelTwo}
            scrollModelThree={scrollModelThree}
            scrollRefProcess={scrollRefProcess}
          />
        </div>

        <div className='search'>
          <span className='searchTitle'>BACKYARD HOMES</span>
          {/* <span className='searchQuestion'> Can I build a backyard home on my property?</span> */}
          <span className='searchQuestion'> Build a backyard home on your property </span>
          
          {/* Searchbar */}
          {/* <input 
            type='text'
            placeholder='Enter a property address to find out'
            id='searchAddress'
            name='searchAddress'
          /> */}
        </div>
      </div>

      <Process ref={refProcess} />
      <ModularaModel
        fadeDuration={1.25}
        ref={myRefOne}
        num={1}
        images={images}
        informationalParams={mod1UnitInfo}
      />
      <ModularaModel
        fadeDuration={1.75}
        ref={myRefTwo}
        num={2}
        images={images2}
        informationalParams={mod2UnitInfo}
      />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.99 }
          }}
          className='workLocation'
        >
        <div className='workTitle'>Where We Work</div>
        <div className='workMap'>
          <img className='workMapImage' draggable='false' src={sect4} title='Work Location' alt='Work Location' />
        </div>
      </motion.div>

      {/* About us section  */}
      {/* <div className='aboutUs'>
        <div className='workTitle'>About Us</div>
        <div className='aboutUsText'>
          We make building a backyard home just as easy as buying a car. We're a one-stop shop that manages permitting, financing, artillery, and construction with ease and predictability. As a team of architects, planners, and data wizards... we can
          start civil war anytime.
        </div>
      </div> */}
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.99 }
        }}
        className='contactUs'
        ref={myRefThree}
      >
        <ContactForm
          // ref={myRefThree}
          className={'contactForm'}
        />
      </motion.div>

      <div className='search'>
        <span className='searchTitle'>BACKYARD HOMES</span>
        {/* <span className='searchQuestion'> Can I build a backyard home on my property?</span> */}
        <span className='searchQuestion'> Build a backyard home on your property </span>
        
        {/* Searchbar */}
        {/* <input 
          type='text'
          placeholder='Enter a property address to find out'
          id='searchAddress'
          name='searchAddress'
        /> */}
      </div>
      <div className='footer'>
        <div className='footerHome'>
          <Grid container>
            <Grid item xs={5.9} sx={{
              justifyContent: 'right',
            }}>
              <Button
                rel='noopener noreferrer'
                title='ModularaModel'
                alt='ModularaModel'
                href='./'
                disableRipple={true}
                sx={{
                  textTransform: 'none',
                  '&:hover': { background: 'none' }
                }}
              >
                © 2023 Modulara
              </Button>
            </Grid>
            <Grid item xs={0.2} sx={{
              fontWeight: '400',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              |
            </Grid>
            <Grid item xs={5.9} sx={{
              justifyContent: 'left',
            }}>
              <Button
                rel='noopener noreferrer'
                title='Email ModularaModel'
                alt='Email ModularaModel'
                href='mailto:info@modulara.com'
                disableRipple={true}
                sx={{
                  justifyContent: 'left',
                  textTransform: 'none',
                  '&:hover': { background: 'none' }
                }}
              >
                info@modulara.com
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default LandingContainer