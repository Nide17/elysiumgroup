import React from 'react';
import SlideCarousel from './carousel/SlideCarousel';
import Services from './services/Services';
import Projects from './projects/Projects';

const Main = (props) => {

    return (
        <div className="contents-section">
            <SlideCarousel
                isServices={props.isServices}
                isProjects={props.isProjects}
            />
            {/* <Services />
            <Projects /> */}
        </div>
    )
}

export default Main
