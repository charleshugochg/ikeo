import { Image } from "@nextui-org/react"

export default function Product () {
  const images = [
    "/images/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1012432_pe829085_s5.avif",
    "/images/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1017104_pe830725_s5.avif",
    "/images/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1079006_pe857430_s5.avif",
    "/images/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1079017_pe857434_s5.avif"
  ]

  return (
    <div>
      {images.map(image_url => (
        <Image
          src={image_url}
          alt="Product image"
          width={350}
          height={350}
          objectFit="cover"
        />
      ))}
    </div>
  )
};
