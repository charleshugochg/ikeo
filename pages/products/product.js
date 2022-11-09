import { Image } from "@nextui-org/react"
import useEmblaCarousel from "embla-carousel-react"

import emblaStyles from '../../styles/embla.module.css';

export default function Product () {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    skipSnaps: false
  })

  const images = [
    "/images/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1012432_pe829085_s5.avif",
    "/images/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1017104_pe830725_s5.avif",
    "/images/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1079006_pe857430_s5.avif",
    "/images/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1079017_pe857434_s5.avif"
  ]

  return (
    <div className={emblaStyles.embla}>
      <div className={emblaStyles.embla__viewport} ref={emblaRef}>
        <div className={emblaStyles.embla__container}>
          {images.map(image_url => (
            <div className={emblaStyles.embla__slide} key={image_url}>
              <Image
                src={image_url}
                alt="Product image"
                width={350}
                height={350}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};
