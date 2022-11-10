import { Fragment } from 'react'

import Header from '../Header'

const index = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="p-8">{children}</main>
    </Fragment>
  )
}

export default index
