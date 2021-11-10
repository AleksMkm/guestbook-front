import React from 'react'

import Section from '../components/section/Section'
import Form from '../components/form/Form'
import RecordList from '../components/recordList/RecordList'

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
        fullWidth>
        <RecordList />
      </Section>
    </Section>
  )
}

export default RecordsView
