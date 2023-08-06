import React, { forwardRef, useState } from 'react'
import { motion } from "framer-motion";
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
          <img
            className="imgIcon"
            src={icon1}
            title="Design"
            alt="Design Icon"
            onClick={() =>
              processText === '' || processText !== 'designText' ?
                setProcessText('designText') :
                setProcessText('')
            }
          />
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
          <img
            className="imgIcon"
            src={icon2}
            title="Permit"
            alt="Permit Icon"
            onClick={() =>
              processText === '' || processText !== 'permitText' ?
                setProcessText('permitText') :
                setProcessText('')
            }
          />
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
          <img
            className="imgIcon"
            src={icon3}
            title="Build"
            alt="Build Icon"
            onClick={() =>
              processText === '' || processText !== 'buildText' ?
                setProcessText('buildText') :
                setProcessText('')
            }
          />
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
          <img
            className="imgIcon"
            src={icon4}
            title="Deliver"
            alt="Deliver Icon"
            onClick={() =>
              processText === '' || processText !== 'deliverText' ?
                setProcessText('deliverText') :
                setProcessText('')
            }
          />
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