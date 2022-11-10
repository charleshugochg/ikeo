import { Fragment } from "react"
import Image from "next/image"

import useEmblaCarousel from "embla-carousel-react"

export default function Product ({ name, images }) {
  const [emblaRef] = useEmblaCarousel()

  return (
    <Fragment>
      <h1>Product page</h1>
      <p>{ name }</p>
      <div className="w-96 overflow-hidden" ref={emblaRef}>
        <div className="flex select-none">
          {images.map(image_url => (
            <div key={image_url} className="h-96 relative grow-0 shrink-0 basis-full">
              <Image
                src={image_url}
                alt={name}
                objectFit="cover"
                fill
              />
            </div>
          ))}
        </div>
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
