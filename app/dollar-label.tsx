import React from 'react'
import ColoredLabel from 'app/colored-label'

export default ({ value, style }) => {
  const formatter = (value) => `$${parseFloat(value.toString()).toFixed(2)}`

  return (
    <ColoredLabel
      value={value}
      formatter={formatter}
      style={style}
    />
  )
}
