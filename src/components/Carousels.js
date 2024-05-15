import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

const BreathingCarousel = ({carouselItems, breathDuration}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const animationStyle = { animation: `breathing-animation ${breathDuration / 1000}s infinite`};

    useEffect(() => {
        const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        }, breathDuration);
    
        return () => clearInterval(interval); // Clean up the interval on component unmount
    });
    
    return (
        <div className="carousel-container">
            <div className='carousel-item' style={animationStyle}> {carouselItems[activeIndex]}</div>
        </div>
    );
};

BreathingCarousel.propTypes={
    carouselItems: PropTypes.array,
    breathDuration: PropTypes.number,
}

export default BreathingCarousel;