// src/components/ui/Button.jsx
import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  href,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-primary-blue-600 text-white hover:bg-primary-blue-700 focus:ring-primary-blue-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-primary-blue-600 border border-primary-blue-600 hover:bg-gray-50 focus:ring-primary-blue-600',
    outline: 'bg-transparent text-primary-blue-600 border border-primary-blue-600 hover:bg-primary-blue-700 hover:text-white focus:ring-primary-blue-600',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-lg hover:shadow-xl',
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  const MotionButton = motion.button
  const MotionA = motion.a

  if (href) {
    return (
      <MotionA
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </MotionA>
    )
  }

  return (
    <MotionButton
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {children}
    </MotionButton>
  )
}

export default Button
