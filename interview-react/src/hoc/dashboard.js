import React from 'react'
import WithAuthentication from './WithAuthentication'
import WithAuthorization from './WithAuthorization'

const dashboard = () => {
  return (
    <div>dashboard</div>
  )
}

const DashboardAccess = WithAuthentication(WithAuthorization(dashboard, ['admin']));

export default DashboardAccess;