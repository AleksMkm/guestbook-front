import React from 'react'

import Section from '../components/section/Section'
import Form from '../components/form/Form'

const RecordsView = () => {
  return (
    <Section
      auxClass="content-wrapper"
      fullWidth
      flex>
      <Section>
        <Form />
      </Section>
      <Section
        fullWidth
        title="Contacts">
        <div>a body</div>
      </Section>
    </Section>
  )
}

export default RecordsView
