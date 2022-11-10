import { Fragment } from "react"
import Image from "next/image"

import { Carousel } from "flowbite-react"

export default function Product ({ name, images }) {
  return (
    <Fragment>
      <h1>Product page</h1>
      <p>{ name }</p>
      <div className="h-96 w-96 select-none">
        <Carousel>
          {images.map(image_url => (
            <div key={image_url} className="w-full h-full relative">
              <Image
                src={image_url}
                alt={name}
                objectFit="cover"
                fill
              />
            </div>
          ))}
        </Carousel>
      </div>
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
        "/images/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1079017_pe857434_s5.avif"
      ],
      summary: ""
    }
  }
}
