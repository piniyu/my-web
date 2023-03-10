import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Slideshow = ({ imageUrls }: { imageUrls: string[] }) => {
  return (
    <div className="slide-container flex-shrink bg-transparent ">
      <Slide
        cssClass="rounded-lg"
        arrows={false}
        transitionDuration={500}
        indicators={true}
      >
        {imageUrls.map((url, index) => (
          <div key={index} className="flex items-center justify-center">
            <img className=" rounded-lg object-contain" src={url} alt="" />
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default Slideshow
