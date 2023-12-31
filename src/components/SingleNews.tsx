import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Result } from '../interfaces/news'

const SingleNews = () => {
  const navigate = useNavigate()
  const [newsDetail, setNewsDetail] = useState<Result | null>(null)
  const params = useParams<{ articleId: string }>()
  console.log('params', params)

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles/' + params.articleId)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((data) => {
        console.log('Dati dei dettagli della fetch', data)
        setNewsDetail(data)
      })
      .catch((err) => {
        console.log('Errore', err)
      })
  }, [])
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        {newsDetail && (
          <Col md={8}>
            <Card>
              <Card.Img variant="top" src={newsDetail.image_url} />
              <Card.Body>
                <Card.Title>{newsDetail.title}</Card.Title>
                <Card.Text>{newsDetail.summary}</Card.Text>
                <Card.Text>{newsDetail.news_site}</Card.Text>
                <Card.Text>{newsDetail.published_at}</Card.Text>
                <Button variant="primary" onClick={() => navigate('/')}>
                  Back
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default SingleNews
