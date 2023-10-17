
import React from "react";
import {Button, Stack, Alert, Badge, Container,Navbar, Breadcrumb, Card, Row, Col} from "react-bootstrap"
function App() {
  return (
    <div >
       <Stack direction="horizontal" gap={3}>
      <div className="p-2">
        <Alert variant="primary">Website React Bootstrap</Alert>
      </div>
      <div className="p-2 ms-auto">
      <Button variant="primary">
      Notifications <Badge bg="secondary">9</Badge>
    </Button>
    <Button variant="primary">
      Messages <Badge bg="secondary">19</Badge>
    </Button>
      </div>
      <div className="p-2">
      <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://e7.pngegg.com/pngimages/733/876/png-clipart-computer-icons-google-account-icon-design-login-others-miscellaneous-desktop-wallpaper-thumbnail.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </div>
    </Stack>
    <Stack direction="horizontal" gap={3}>
      <div className="p-2"></div>
      <div className="p-2 ms-auto">   <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Berita
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Bola</Breadcrumb.Item>
    </Breadcrumb></div>
      <div className="p-2">
      </div>
    </Stack>

    <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg" />
      <Card.Body>
        <Card.Title>Neymar bahas Kontrak Baru Di Paris Saint-Germain</Card.Title>
        <Card.Text>
        Ayah sang pemain bintang brasil berusaha meredan rumor ketertarikan madrid.Neymar sedang berdiskusi dengan 
        Paris Saint-Germain sial perpanjangan kontrak, bersama kampuin ligue 1 prancis demikian kata ayahnya
        </Card.Text>
        <Button variant="primary">read more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg" />
      <Card.Body>
        <Card.Title>Inggris Mau Jadi Tim Terbaik di Dunia</Card.Title>
        <Card.Text>
        Kumpulan talenta terbaik yang dimiliki inggris saat ini membuat barkley sangat optimis. ross barkley merasa inggrissudah 
        berada di jalur yang benar untuk bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang muncul sekarang ini
        </Card.Text>
        <Button variant="primary">read more</Button>
      </Card.Body>
      </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg" />
      <Card.Body>
        <Card.Title>sani rizki fauzi tegaskan mental pemain timnas indonesia U-23 Tetap bagus</Card.Title>
        <Card.Text>
        Gelandang tim nasional (timnas)indonesia U-23, Sani Rizki Fauzi, menegaskan kesiapannya untuk bermain pada laga melawan brunei darusalam 
        U-23. kedua tim akan bentrok pada laga pamungkas grup K
        </Card.Text>
        <Button variant="primary">read more</Button>
      </Card.Body>
      </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg" />
      <Card.Body>
        <Card.Title>Diego Godin Ukir Rekor Special Lawan Thailand</Card.Title>
        <Card.Text>
        Godin sekarang menjadi pemain Uruguay dengan caps terbanyak setelah membantu negaranya melibas 
        Thailand di final Piala Tiongkok. Diego Godin boleh bergangga setelah resmi menjadi.
        </Card.Text>
        <Button variant="primary">read more</Button>
      </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
