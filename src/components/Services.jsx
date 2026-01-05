import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import {servicesData} from '../assets/assets'
import { motion } from "motion/react"

const Services = () => {

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{staggerChildren: 0.2}}
     id='services' className='relative flex flex-col items-center gap-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' alt="" />
        
        <Title title="How can we help?" desc="From strategy to execultion, we craft degital solution that move your business forword." />
        <div className='flex flex-col md:grid grid-cols-2'>
          {servicesData.map((service, index)=> <ServiceCard key={index} service={service} index={index} />)}
        </div>
    </motion.div>
  )
}

export default Services