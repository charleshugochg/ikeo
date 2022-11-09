import { Fragment } from 'react'
import Navbar from '../Navbar'

const index = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main className="p-8">{children}</main>
    </Fragment>
  )
}

export default index
