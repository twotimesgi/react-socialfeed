import { Image, Popover, OverlayTrigger, ListGroup, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function ProfilePic(props) {

    const popover = (
        <Popover style={{width: '200px'}} id="popover-basic">
                <Popover.Header as="h3">Hi, {props.user.user}</Popover.Header>
            <Popover.Body className='p-0'>
                <ListGroup className="rounded" variant="flush">
                    <ListGroup.Item>Account settings</ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-between">
                        <div>Private messages</div>
                        <Badge pill bg="primary">
                            10
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item>Logout</ListGroup.Item>
                </ListGroup>
            </Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <div className='me-3 d-inline-block'><Image alt="" src={props.user.img} className='me-1' roundedCircle="true" style={{ width: "45px" }} /><FontAwesomeIcon style={{ fontSize: "10px" }} icon={faChevronDown} /></div>
        </OverlayTrigger>
    )
}

export default ProfilePic;