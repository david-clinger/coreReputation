// // src/app/register/page.jsx
// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// export default function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   })
//   const [error, setError] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const [success, setSuccess] = useState(false)
//   const router = useRouter()

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//     // Clear error when user starts typing
//     if (error) setError('')
//   }

//   const validateForm = () => {
//     if (!formData.name.trim()) {
//       setError('Name is required')
//       return false
//     }
//     if (!formData.email.trim()) {
//       setError('Email is required')
//       return false
//     }
//     if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       setError('Please enter a valid email address')
//       return false
//     }
//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters long')
//       return false
//     }
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match')
//       return false
//     }

//     return true
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     setError('')

//     if (!validateForm()) {
//       setIsLoading(false)
//       return
//     }

//     try {
//       // Call the registration API
//       const response = await fetch('/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.error || 'Registration failed')
//       }

//       console.log('Registration successful:', data.message)
//       
//       // Show success message
//                                 router.push('/')
      
//       // Auto-redirect to login after 3 seconds
//       setTimeout(() => {
//         router.push('/login?registered=true')
//       }, 3000)

//     } catch (err) {
//       console.error('Registration error:', err)
//       setError(err.message || 'Registration failed. Please try again.')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (success) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-primary-blue-50 via-teal-50 to-white flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//         {/* Background decorations */}
//         <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-20 -translate-y-36 -translate-x-36" />
//         <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-blue-200 rounded-full blur-3xl opacity-30 translate-y-32 translate-x-32" />
        
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="relative max-w-md w-full space-y-6 text-center"
//         >
//           <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
//             <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
//               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
//             <p className="text-lg text-gray-600 mb-6">
//               Your account has been created successfully. You will be redirected to the login page shortly.
// 												<Link href="/" className="inline-flex items-center bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-6 py-2.5 rounded-xl font-bold text-base hover:from-primary-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
// 													Return Home
// //               Redirecting in 3 seconds...
//             </div>
//             <Link href="/login" className="inline-flex items-center bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-6 py-2.5 rounded-xl font-bold text-base hover:from-primary-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Go to Login Now
//               <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-primary-blue-50 via-teal-50 to-white flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Background decorations */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-primary-blue-200 rounded-full blur-3xl opacity-20 -translate-y-36 -translate-x-36" />
//       <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-200 rounded-full blur-3xl opacity-30 translate-y-32 translate-x-32" />
//       <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary-blue-100 rounded-full blur-3xl opacity-15 -translate-x-24 -translate-y-24" />
      
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative max-w-md w-full space-y-4"
//       >
//         <div>
//           {/* Logo */}
//           <div className="flex justify-center mb-4">
//             <Link href="/" className="flex items-center group">
//               <div className="h-12 w-12 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-xl flex items-center justify-center mr-3 shadow-xl group-hover:scale-105 transition-transform duration-300">
//                 <span className="text-white font-bold text-xl">CR</span>
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-bold text-2xl text-gray-900 leading-tight">Core</span>
//                 <span className="font-bold text-2xl text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent leading-tight">Reputation</span>
//               </div>
//             </Link>
//           </div>
          
//           <div className="text-center">
//             <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-blue-50 border border-primary-blue-200 mb-4">
//               <svg className="w-4 h-4 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
//               </svg>
//               <span className="text-primary-blue-600 text-sm font-medium">Join Our Platform</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//               Create{' '}
//               <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
//                 Account
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600">
//               Join Core Reputation to access our professional services
//             </p>
//           </div>
//         </div>

//         {/* Register Form */}
//         <motion.form
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mt-6 space-y-4"
//           onSubmit={handleSubmit}
//         >
//           <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 space-y-4 border border-white/50">
//             {error && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="bg-red-50 border border-red-200 rounded-xl p-4"
//               >
//                 <div className="flex">
//                   <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   <p className="text-red-800 font-medium text-sm">{error}</p>
//                 </div>
//               </motion.div>
//             )}

//             <div>
//               <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
//                 Full Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-base font-medium bg-white/50 backdrop-blur-sm"
//                 placeholder="Enter your full name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-base font-medium bg-white/50 backdrop-blur-sm"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-base font-medium bg-white/50 backdrop-blur-sm"
//                 placeholder="Create a password (min 6 characters)"
//               />
//             </div>

//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700 mb-2">
//                 Confirm Password
//               </label>
//               <input
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 type="password"
//                 required
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-base font-medium bg-white/50 backdrop-blur-sm"
//                 placeholder="Confirm your password"
//               />
//             </div>

//             <div className="flex items-start">
//               <input
//                 id="terms"
//                 name="terms"
//                 type="checkbox"
//                 required
//                 className="h-4 w-4 text-primary-blue-600 focus:ring-primary-blue-500 border-gray-300 rounded mt-1"
//               />
//               <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 font-medium">
//                 I agree to the{' '}
//                 <Link href="/legal" className="text-primary-blue-600 hover:text-primary-blue-700 font-bold transition-colors duration-300">
//                   Terms of Service
//                 </Link>
//                 {' '}and{' '}
//                 <Link href="/legal" className="text-primary-blue-600 hover:text-primary-blue-700 font-bold transition-colors duration-300">
//                   Privacy Policy
//                 </Link>
//               </label>
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white py-3 px-6 rounded-xl font-bold text-lg hover:from-primary-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//             >
//               {isLoading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Creating Account...
//                 </>
//               ) : (
//                 <>
//                   Create Account
//                   <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </>
//               )}
//             </button>
//           </div>
//         </motion.form>

//         {/* Sign In Link */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="text-center"
//         >
//           <p className="text-gray-600 text-base">
//             Already have an account?{' '}
//             <Link href="/login" className="text-primary-blue-600 hover:text-primary-blue-700 font-bold transition-colors duration-300 hover:underline">
//               Sign in here
//             </Link>
//           </p>
//         </motion.div>
//       </motion.div>
//     </div>
//   )
// }
