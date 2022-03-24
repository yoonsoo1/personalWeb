import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import EngResume from '../resume/Yoonsoo_Nam_Resume.pdf'

function Resume() {
  return (
    <div className="eng-resume">
        <Document file={EngResume}>
            <Page />
        </Document>
    </div>
  )
}

export default Resume