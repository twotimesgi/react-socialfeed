import './App.css';
import {Container, Row, Col, Stack} from 'react-bootstrap';
import Post from './components/Post';
import NewPost from './components/NewPost';
import ProfilePic from './components/ProfilePic';

function App() {
  let postList = [
    {
      user: 0,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum labo numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
      date: "12-09-2022 8:00AM"
    },
    {
      user: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum labo numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
      date: "12-09-2022 5:00PM"
    },
    {
      user: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum labo numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
      date: "12-09-2022 8:50PM"
    },
  ]

  let users = [
    {
      user: "twotimesgi",
      img: "https://via.placeholder.com/150x150",
    },
    {
      user: "pippotek",
      img: "https://via.placeholder.com/150x150",
    },
    {
      user: "rusky99",
      img: "https://via.placeholder.com/150x150",
    }
  ]

  let currentUser = 0;

return (
  <Container fluid="md">
    <Row className='p-4'>
      <Col className='d-flex justify-content-between'>
        <NewPost currentUser={currentUser} user={users[currentUser]} ></NewPost>
        <div>
          <ProfilePic user={users[currentUser]}></ProfilePic>
          <span>{users[currentUser].user}</span>
        </div>
      </Col>
    </Row>
    <Row className='p-4'>
      { postList.length != 0 ? (
      <Stack gap={4} className="col-12 mx-auto">
        {postList.map((postObj, index) => <Post key={index} user={users[postObj.user]} postObj={postObj} />)}
      </Stack>
      ) : (
        <div className='py-5 text-center text-muted'>There are no posts</div>
      ) }
    </Row>
  </Container>
);
}

export default App;
