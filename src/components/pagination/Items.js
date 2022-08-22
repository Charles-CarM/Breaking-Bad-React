import React from 'react'

const Items = ({items, isLoading}) => {
  if(isLoading) {
    return <h2>Loading...</h2>
  }
  return (
    <div>

    </div>
  )
}

export default Items