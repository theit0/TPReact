
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AboutUsHome = () => {
  return (
    <div className="container py-5">
        <h1>About us</h1>
        <p>We are a team of passionate individuals who love to create amazing things. Our mission is to provide high-quality services and products that exceed our customers' expectations.</p>
        <section className='d-flex gap-4'>
          <Card style={{ width: '18rem',height:"fit-content"}}>
            <Card.Img variant="top" src="src/assets/images/city-lights-in-darnkess.jpg" style={{height:"18rem",objectFit:"cover"}} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem',height:"fit-content"}}>
            <Card.Img variant="top" src="src/assets/images/lonely-lightbulb.jpg" style={{height:"18rem",objectFit:"cover"}}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem',height:"fit-content"}}>
            <Card.Img variant="top" src="src/assets/images/ominous-portrait-of-orange-fish.jpg" style={{height:"18rem",objectFit:"cover"}}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </section>
        
    </div>
  )
}

export default AboutUsHome