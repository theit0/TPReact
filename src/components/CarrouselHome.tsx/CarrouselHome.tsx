import Carousel from 'react-bootstrap/Carousel';

const CarrouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        className='w-100'
        style={{maxHeight:"500px",objectFit:"cover"}}
        src='src/assets/images/a-gothic-church-window-spills-light-into-interior-darkness.jpg'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='w-100'
        style={{maxHeight:"500px",objectFit:"cover"}}
        src='src/assets/images/just-a-drop-of-water.jpg'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className='w-100'
        style={{maxHeight:"500px",objectFit:"cover"}}
        src='src/assets/images/red-moon-and-stars.jpg'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarrouselHome