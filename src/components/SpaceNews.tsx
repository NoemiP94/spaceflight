import { useEffect, useState } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { Result } from '../interfaces/news'
import { useNavigate } from 'react-router-dom'

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
        <Col md={6}>
          {news.map((r) => {
            return (
              <Card key={r.id} className="my-3">
                <Card.Img variant="top" src={r.image_url} />
                <Card.Body>
                  <Card.Title>{r.title}</Card.Title>
                  <Button
                    variant="primary"
                    onClick={() => navigate('/detail/:newsId')}
                  >
                    More
                  </Button>
                </Card.Body>
              </Card>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default SpaceNews
