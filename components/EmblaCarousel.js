import Image from "next/image"

import useEmblaCarousel from "embla-carousel-react"

export default function EmblaCarousel({ name, images }) {
  const [emblaRef] = useEmblaCarousel()

  return (
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
  )
}