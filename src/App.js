import './App.css';
import {Container, Row, Col, Stack} from 'react-bootstrap';
import Post from './components/Post';
import NewPost from './components/NewPost';
import ProfilePic from './components/ProfilePic';
import { useState } from 'react';

function App() {
  let examplePosts = [
    {
      user: 0,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum labo numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
      date: "1/19/2022 4:35:07 PM"
    },
    {
      user: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum labo numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
      date: "2/01/2022 7:40:00 PM"
    },
    {
      user: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum labo numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
      date: "5/19/2022 9:16:03 AM"
    },
  ]

  const [postList, setPostList] = useState(examplePosts);

  const handleNewPost = (newPost) => {
    setPostList([...postList, newPost]);
  }

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

  let currentUser = 1;

return (
  <Container fluid="md">
    <Row className='p-4'>
      <Col className='d-flex justify-content-between'>
        <NewPost currentUser={currentUser} user={users[currentUser]} onPost={handleNewPost}></NewPost>
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
