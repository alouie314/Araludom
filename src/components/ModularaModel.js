import React, { forwardRef } from 'react'
import { motion } from "framer-motion";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import '../styles/style.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ModularaModel = forwardRef(function ModularaModel({
  fadeDuration,
  num,
  images,
  informationalParams
}, ref) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    activeStep === 4 ? setActiveStep(0) : setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const handleBack = () => {
    activeStep === 0 ? setActiveStep(4) : setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleStepChange = (step) => {
    setActiveStep(step);
  }
  console.log('ref', ref)
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: fadeDuration }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.99 }
      }}
      ref={ref}
      className="modularaModel"
    >
      <div className="modularaTitle">
        Meet Modulara {num}
        <Typography variant='p'
          sx={{
            fontWeight: '300',
            textAlign: 'center',
            fontSize: 'calc(6px + 1.5vw)'
          }}
        >
         {informationalParams}
        </Typography>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            '.MuiMobileStepper-dot': {
              margin: 'auto 1vw',
            },
            '@media (max-width:600px)': {
              width: 'inherit'
            },
            marginTop: '10px',
            background: 'transparent',
            zIndex: '101',
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              // disabled={activeStep === maxSteps - 1}
              sx={{
                '@media (min-width:600px)': {
                  marginLeft: '150px'
                },
              }}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              // disabled={activeStep === 0}
              sx={{
                '@media (min-width:600px)': {
                  marginRight: '150px'
                },
              }}
            >
              {theme.direction === 'rtl' ?
                <KeyboardArrowRight /> : <KeyboardArrowLeft />
              }
              Back
            </Button>
          }
        />
      </div>
        <Box sx={{
          flexDirection: 'column !important',
          alignItems: 'center'
          }}>
          <AutoPlaySwipeableViews
            autoplay={false}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            style={{
              margin: '10px 5% 0 5%',
            }}
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      maxHeight: 'calc(7vh + 40vw)',
                      display: 'block',
                      maxWidth: '100%',
                      overflow: 'hidden',
                      width: '100vw',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                    title={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <Typography variant='p'
            sx={{
              fontWeight: '300',
              textAlign: 'center',
              marginTop: '10px',
              marginBottom: '30px',
              fontSize: 'calc(6px + 1.5vw)'
            }}
          >
            {images[activeStep].label}
          </Typography>
      </Box>

    </motion.div>
  )
})

export default ModularaModel