import Image from "next/image"

import useEmblaCarousel from "embla-carousel-react"

export default function EmblaCarousel({ name, images }) {
  const [mainEmblaRef] = useEmblaCarousel()
  const [thumbEmblaRef] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  })

  return (
    <>
      <div className="w-96 overflow-hidden" ref={mainEmblaRef}>
        <div className="flex select-none">
          {images.map((image_url, index) => (
            <div key={index} className="h-96 relative grow-0 shrink-0 basis-full">
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
      <div className="w-96 overflow-hidden" ref={thumbEmblaRef}>
        <div className="flex select-none">
          {images.map((image_url, index) => (
            <div key={index} className="h-20 w-20 relative shrink-0">
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
    </>
  )
}
