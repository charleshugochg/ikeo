import { Navbar } from 'flowbite-react'

const index = () => {
  return (
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
        <Navbar.Link href="/products">Products</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default index
