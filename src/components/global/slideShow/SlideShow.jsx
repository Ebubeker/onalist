import React from 'react';
import { SlideCard, SlideImage, Caption, Btn, ArrowLeft, ArrowRight } from './SlideShowStyled'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const SlideShow = () => {

  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1552547298-4589b5a0d848?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      caption: 'State of the art tech raging from PCs to laptops and phones',
      button: '/shop/tech'
    },
    {
      url: 'https://images.unsplash.com/photo-1569388330338-53ecda03dfa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      caption: 'Most beautiful and valuable jewellery you can find',
      button: '/shop/jewellery'
    },
    {
      url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80',
      caption: 'Find every book you can think off in a brick of a second',
      button: '/shop/books'
    },
  ];

  const properties = {
    prevArrow: <ArrowLeft>
      <FontAwesomeIcon  icon={faArrowLeftLong}/>
    </ArrowLeft>,
    nextArrow: <ArrowRight>
      <FontAwesomeIcon icon={faArrowRightLong}/>
    </ArrowRight>,
  };

  return (
    <div style={{position:"relative"}} className='container'>
      <Slide {...properties}>
        {slideImages.map((slide, i)=>(
          <SlideCard key={i}>
            <SlideImage style={{backgroundImage: `url(${slide.url})`}}>
              <div>
                <Caption>{slide.caption}</Caption>
                <Link to={slide.button} style={{textDecoration: 'none'}}>
                  <Btn>Visit Shop</Btn>
                </Link>
              </div>
            </SlideImage>
          </SlideCard>
        ))}
      </Slide>
    </div>
  )
}

export default SlideShow