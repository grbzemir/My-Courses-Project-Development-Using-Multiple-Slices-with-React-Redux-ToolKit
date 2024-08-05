import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseForm from './Components/CourseForm'
import CourseSearch from './Components/CourseSearch'
import CourseList from './Components/CourseList'
import CourseValue from './Components/CourseValue'

function App() {
  return (

    <div className="container is-fluid">
      <CourseForm />
      <CourseSearch />
      <CourseList />
      <CourseValue />
    </div>
  )
}

export default App
