import Head from 'next/head'
import { Fragment } from 'react'
import { Navbar } from 'flowbite-react'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>ikeo | Buy Furniture Online</title>
        <meta name="description" content="Ikeo home page" />
      </Head>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://www.ikea.com/sg/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
            className="mr-3 h-6 sm:h-9"
            alt="ikeo Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/products">products</Navbar.Link>
          <Navbar.Link href="/products/product">product page</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <h1>The ikeo Home Page</h1>
    </Fragment>
  )
}
