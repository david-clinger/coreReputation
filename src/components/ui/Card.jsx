// src/components/ui/Card.jsx
import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = true,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-lg border border-gray-200 shadow-sm'
  const hoverClasses = hover ? 'hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer' : ''
  const paddingClasses = padding ? 'p-6' : ''
  
  const classes = `${baseClasses} ${hoverClasses} ${paddingClasses} ${className}`

  const MotionDiv = motion.div

  return (
    <MotionDiv
      className={classes}
      {...(hover && {
        whileHover: { y: -2, scale: 1.01 },
        transition: { duration: 0.2 }
      })}
      {...props}
    >
      {children}
    </MotionDiv>
  )
}

export default Card
