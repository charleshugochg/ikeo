import { useCallback, useEffect, useState } from "react"
import Image from "next/image"

import useEmblaCarousel from "embla-carousel-react"

export default function EmblaCarousel({ name, images }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [mainEmblaRef, mainEmbla] = useEmblaCarousel()
  const [thumbEmblaRef, thumbEmbla] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  })

  const onThumbClick = useCallback((index) => {
    if (!mainEmbla || !thumbEmbla) return;
    if (thumbEmbla.clickAllowed()) mainEmbla.scrollTo(index)
  }, [mainEmbla, thumbEmbla])

  const onSelect = useCallback(() => {
    if (!mainEmbla || !thumbEmbla) return;
    setSelectedIndex(mainEmbla.selectedScrollSnap())
    thumbEmbla.scrollTo(mainEmbla.selectedScrollSnap())
  }, [mainEmbla, thumbEmbla])

  useEffect(() => {
    if (!mainEmbla) return;
    onSelect()
    mainEmbla.on("select", onSelect)
  }, [mainEmbla])

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
      <div className="w-96 overflow-hidden mt-1" ref={thumbEmblaRef}>
        <div className="flex select-none">
          {images.map((image_url, index) => (
            <div className="p-0.5">
              <button key={index} className={`h-20 w-20 relative shrink-0 ${selectedIndex == index && 'ring-2 ring-cyan-600'}`} onClick={() => onThumbClick(index)}>
                <Image
                  src={image_url}
                  alt={name}
                  objectFit="cover"
                  fill
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
