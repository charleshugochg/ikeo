import { Fragment } from "react"

import EmblaCarousel from "../../components/EmblaCarousel"

export default function Product ({ name, images }) {
  return (
    <Fragment>
      <h1>Product page</h1>
      <p>{ name }</p>
      <EmblaCarousel name={name} images={images} />
    </Fragment>
  )
}

export async function getStaticProps() {
  return {
    props: {
      id: 'id',
      name: 'product name',
      description: 'some description',
      images: [
        "/images/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1012432_pe829085_s5.avif",
        "/images/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1017104_pe830725_s5.avif",
        "/images/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1079006_pe857430_s5.avif",
        "/images/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1079017_pe857434_s5.avif",
        "/images/knoxhult-base-cabinet-with-doors-and-drawer-white__0628064_ph136514_s5.avif",
        "/images/knoxhult-base-cabinet-with-doors-and-drawer-white__0630745_pe694873_s5.avif",
        "/images/knoxhult-base-cabinet-with-doors-and-drawer-white__0871266_pe615157_s5.avif",
        "/images/knoxhult-base-cabinet-with-doors-and-drawer-white__0871705_pe615165_s5.avif",
        "/images/knoxhult-base-cabinet-with-doors-and-drawer-white__0871917_pe617191_s5.avif"
      ],
      summary: ""
    }
  }
}
