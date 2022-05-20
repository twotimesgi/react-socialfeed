import './Post.css'
import { Row, Card, Col, Image } from 'react-bootstrap';


function Post(props) {
    const handleDelete = () => {
        props.onDelete(props.postObj.id);
    }
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col xs={12} sm={4} md={4} lg={3} className="d-flex align-items-center flex-column">
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

            <Card.Footer className='d-flex justify-content-between'>
                <span className='small text-muted'>{props.postObj.date} {props.postObj.time}</span>
                { props.current.user === props.user.user && (<span className='small text-primary' role='button' onClick={handleDelete}>Delete post</span>)}
            </Card.Footer>
        </Card>
    );
}

export default Post;