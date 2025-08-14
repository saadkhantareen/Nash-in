import { SignIn } from '@clerk/nextjs'

import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
  <div className="flex min-h-screen items-center justify-center">
    <SignIn />
  </div>
)
}

export default Page