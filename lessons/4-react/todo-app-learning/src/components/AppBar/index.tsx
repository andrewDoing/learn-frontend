import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './styles.css'

const AppBar = () => {
  const location = useLocation()

  const isHome = (): boolean => {
    return location.pathname === '/'
  }

  return (
    <div className='appBarContainer'>
      <Link to='/'>
        <button
          className='appBarButton'
          disabled={isHome()}
        >
          Normal Todo
        </button>
      </Link>
      <Link to='/redux'>
        <button
          className='appBarButton'
          disabled={!isHome()}
        >
            Redux Todo
        </button>
      </Link>
    </div>
  )
}

export { AppBar }
