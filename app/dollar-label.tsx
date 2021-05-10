import React from 'react'
import ColoredLabel from 'app/colored-label'

export default ({ value, style }) => {
  const formatter = (value) => value.toFixed(5)

  return (
    <ColoredLabel
      value={value}
      formatter={formatter}
      prefix="$"
      style={style}
    />
  )
}
