import React from 'react'

function Section({ title, children, flex, auxClass, fullWidth }) {
  const flexClass = flex ? 'flex' : ''
  const auxClassName = auxClass ? auxClass : ''
  const fullWidthClass = fullWidth ? 'fullWidth' : ''

  return (
    <section className={`section ${flexClass} ${fullWidthClass} ${auxClassName}`}>
      <p className="section-title">{title}</p>
      {children}
    </section>
  )
}

export default Section
