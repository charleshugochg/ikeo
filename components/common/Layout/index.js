import { Fragment } from 'react'

import Header from '../Header'

const index = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </Fragment>
  )
}

export default index
