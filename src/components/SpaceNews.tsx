import { useEffect, useState } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { Result } from '../interfaces/news'
import { useNavigate, Link } from 'react-router-dom'

const SpaceNews = () => {
  const [news, setNews] = useState<Result[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Errore nel recupero dei dati')
        }
      })
      .then((data) => {
        console.log('Dati della fetch', data)
        setNews(data.results)
      })
      .catch((err) => {
        console.log('Errore', err)
      })
  }, [])
  return (
    <Container className="text-center">
      <Row className="justify-content-center">
        {news.map((r) => {
          return (
            <Col key={r.id} md={4} className="mb-4">
              <Card className="my-3 h-100">
                <Card.Img variant="top" src={r.image_url} className="h-50" />
                <Card.Body>
                  <Card.Title>{r.title}</Card.Title>
                  <Link to={'/' + r.id}>
                    <Button variant="primary">More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

// / + articledetails.id

export default SpaceNews
