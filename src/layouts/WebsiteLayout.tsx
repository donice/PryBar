import React from 'react'
import { Outlet } from 'react-router-dom'

const WebsiteLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default WebsiteLayout