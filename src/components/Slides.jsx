import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {pic1, pic2, pic3, pic4, pic5} from '../imgs/images.js'

const Slides = () => {

    const images = [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5
    ];

    return (
      <Slide className="slides-container">
     <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                    <span>Slide 4</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                    <span>Slide 5</span>
                </div>
            </div>
  </Slide>
    )
  }



  
  export default Slides;