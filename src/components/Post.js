import './Post.css'
import { Row, Card, Col, Image } from 'react-bootstrap';


function Post(props) {
    return (
        <Card>
            <Card.Body>

                <Row>
                    <Col xs={12} sm={4} md={4} lg={4} className="d-flex align-items-center flex-column">
                        <span className="mb-2" >{props.user.user}</span>
                        <Image style={{ width: "150px", objectFit: "fill" }} rounded="true" alt="" className="mb-3" src={props.user.img}></Image>
                    </Col>
                    <Col>
                        <Card.Text>
                            {props.postObj.text}
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>

            <Card.Footer className='d-flex justify-content-end'>
                <span className='small text-muted'>{props.postObj.date}</span>
            </Card.Footer>
        </Card>
    );
}

export default Post;