import {
  Create as CreateIcon,
  Task as TaskIcon,
  Construction as ConstructionIcon,
  Key as KeyIcon
} from '@mui/icons-material'
import { ToggleButton } from '@mui/material'
import React, { forwardRef, useState } from 'react'
import { motion } from "framer-motion"
// TODO: change icons
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import '../styles/style.css'

const Process = forwardRef(function Process({
}, ref) {
  const [processText, setProcessText] = useState('')

  return (
    <div
      className={processText !== '' ? 'process processExpand' : 'process'}
    >
      <div className="processRow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.95 }
          }}
          className='processCard'
        >
          {/* <img
            className="imgIcon"
            src={icon1}
            title="Design"
            alt="Design Icon"
            onClick={() =>
              processText === '' || processText !== 'designText' ?
                setProcessText('designText') :
                setProcessText('')
            }
          /> */}
          <ToggleButton
            className='imgIcon'
            aria-label="Design"
            alt="Design Icon"
            selected={processText === 'designText'}
            onClick={() =>
              processText === '' || processText !== 'designText' ?
                setProcessText('designText') :
                setProcessText('')
            }
          >
            <CreateIcon sx={{ width: '100px', height: '100px', color: 'black'}}/>
          </ToggleButton>
          <div className="iconTitle">
            Design
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.96 }
          }}
          className='processCard'
        >
          {/* <img
            className="imgIcon"
            src={icon2}
            title="Permit"
            alt="Permit Icon"
            onClick={() =>
              processText === '' || processText !== 'permitText' ?
                setProcessText('permitText') :
                setProcessText('')
            }
          /> */}
          <ToggleButton
            className='imgIcon'
            aria-label="Permit"
            alt="Permit Icon"
            selected={processText === 'permitText'}
            onClick={() =>
              processText === '' || processText !== 'permitText' ?
                setProcessText('permitText') :
                setProcessText('')
            }
          >
            <TaskIcon sx={{ width: '100px', height: '100px', color: 'black'}}/>
          </ToggleButton>
          <div className="iconTitle">
            Permit
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.965 }
          }}
          className='processCard'
        >
          {/* <img
            className="imgIcon"
            src={icon3}
            title="Build"
            alt="Build Icon"
            onClick={() =>
              processText === '' || processText !== 'buildText' ?
                setProcessText('buildText') :
                setProcessText('')
            }
          /> */}
          <ToggleButton
            className='imgIcon'
            aria-label="Build"
            alt="Build Icon"
            selected={processText === 'buildText'}
            onClick={() =>
              processText === '' || processText !== 'buildText' ?
                setProcessText('buildText') :
                setProcessText('')
            }
          >
            <ConstructionIcon sx={{ width: '100px', height: '100px', color: 'black'}}/>
          </ToggleButton>
          <div className="iconTitle">
            Build
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 2.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.97 }
          }}
          className='processCard'
        >
          {/* <img
            className="imgIcon"
            src={icon4}
            title="Deliver"
            alt="Deliver Icon"
            onClick={() =>
              processText === '' || processText !== 'deliverText' ?
                setProcessText('deliverText') :
                setProcessText('')
            }
          /> */}
          <ToggleButton
            className='imgIcon'
            aria-label="Deliver"
            alt="Deliver Icon"
            selected={processText === 'deliverText'}
            onClick={() =>
              processText === '' || processText !== 'deliverText' ?
                setProcessText('deliverText') :
                setProcessText('')
            }
          >
            <KeyIcon sx={{ width: '100px', height: '100px', color: 'black'}}/>
          </ToggleButton>
          <div className="iconTitle">
            Deliver
          </div>
        </motion.div>
      </div>

      <div className={processText !== '' ? 'processText' : 'fadeHide'}>
        <div className={processText === 'designText' ? 'designText' : 'fadeHide'}>
          We determine the feasibility for placing your unit:  <br />
          <ul>
            <li> Free feasibility consultation with our Design team </li>
            <li> Unit configuration and placement of your Modulara unit on property </li>
            <li> Deliver construction documents for next steps </li>
          </ul>
        </div>
        <div className={processText === 'permitText' ? 'permitText' : 'fadeHide'}>
          We drive the permitting process for your project in DC, Montgomery County, Arlington, and Alexandria.
        </div>
        <div className={processText === 'buildText' ? 'buildText' : 'fadeHide'}>
          We assist with searching for a builder and walking through construction administration <br />
          <ul>
            <li> Find a contractor for your project </li>
            <li> Manage the construction process </li>
          </ul>
        </div>
        <div className={processText === 'deliverText' ? 'deliverText' : 'fadeHide'}>
          We help get your unit move-in ready!
        </div>
      </div>
    </div>
  )
})

export default Process