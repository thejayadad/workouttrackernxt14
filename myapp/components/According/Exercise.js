import React from 'react'

const Exercise = ({name, id}) => {
  return (
    <div key={id}>
        <span>{name}</span>
    </div>
  )
}

export default Exercise