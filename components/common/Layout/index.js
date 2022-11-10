import { Fragment } from 'react'

import Header from '../Header'
import Footer from '../Footer'

const index = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

export default index
