import React from 'react';
import { FaTint, FaSun, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import GradientText from '../GradientText/GradientText';
import Container from '../../Container/Container';

const CareGuides = () => {
  const navigate = useNavigate()
  return (
    <Container>
      
         <div className=" w-full my-5 py-14 ">
      <div className="grid grid-cols-1 md:grid-cols-2  items-center">
        
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <img
            src="https://i.ibb.co/XfTG95wd/233-I-have-a-house-plant4-1024x700.jpg" 
            alt="Plant Care"
            className="rounded-lg shadow-lg max-w-5xl max-h-[300px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center  text-[2rem] my-3">
          <GradientText
            colors={["#4ade80", "#bef264", "#4ade80"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            Plant Care Instructions
            </GradientText>
            <button onClick={()=>navigate('/plantCare')} className='btn dark:border-none border-none cursor-target bg-green-500 text-white'>Care Guides</button>
        </h2>
         

          
        </motion.div>
      </div>
    </div>
 </Container>
  );
};

export default CareGuides;
