import React from 'react'
import { AppRouter } from './briefcase/routes/AppRouter'
import { AllProvider } from './context/AllContext'

export const BriefcaseApp = () => {
  return (
    <>
<AllProvider>

   <AppRouter/>



</AllProvider>
    </>
  )
}
