import './App.css';
import { Container, Row, Col, Stack, Form } from 'react-bootstrap';
import Post from './components/Post';
import NewPost from './components/NewPost';
import ProfilePic from './components/ProfilePic';
import React, { useState } from 'react';

function App() {
  let DUMMY_POSTS = [
    {
      user: 3,
      text: "If at first you don’t succeed, try, try again.	",
      date: "5/20/2022 10:43:05 AM"
    },
    {
      user: 1,
      text: "If you are going through hell, keep going.	",
      date: "02/01/2022 7:40:00 PM"
    },
    {
      user: 0,
      text: "I'm gonna make him an offer he can't refuse.	",
      date: "01/19/2022 4:35:07 PM"
    },
    {
      user: 2,
      text: "Keep your friends close, but your enemies closer.	",
      date: "05/19/2022 9:16:03 AM"
    },
  ]
  const postList = DUMMY_POSTS;
  const [showedList, setShowedList] = useState(DUMMY_POSTS);

  const handleNewPost = (newPost) => {
    postList.unshift(newPost);
    setShowedList(postList);
  }
  const filterInput = React.createRef();
  const filterPosts = () =>{
    let filtered = postList.filter(post => post.text.trim().toLowerCase().includes(filterInput.current.value.trim().toLowerCase()));
    setShowedList(filtered);
  }

  let users = [
    {
      user: "twotimesgi",
      img: require('./images/avatar1.jpg'),
      newMessages: 10
    },
    {
      user: "pippotek",
      img: require('./images/avatar2.jpg'),
      newMessages: 0
    },
    {
      user: "rusky99",
      img: require('./images/avatar3.jpg'),
      newMessages: 1
    },
    {
      user: "beatrix7",
      img: require('./images/avatar4.jpg'),
      newMessages: 3
    }
  ]

  // Switch profile here
  let currentUser = 0;

  return (
    <Container fluid="md">
      <Row className='p-4'>
        <Col className='d-flex justify-content-start align-items-center'>
          <NewPost currentUser={currentUser} user={users[currentUser]} onPost={handleNewPost}></NewPost>
        </Col>
        <Col className='d-flex justify-content-center align-items-center'>
            <Form.Control ref={filterInput} className="form-control mr-sm-2" type="search" placeholder="Search" onChange={filterPosts} aria-label="Search posts"/>
        </Col>
        <Col className='d-flex justify-content-end align-items-center'>
          <ProfilePic user={users[currentUser]}></ProfilePic>
          <span>{users[currentUser].user}</span>
        </Col>
      </Row>
      <Row className='p-4'>
        {showedList.length !== 0 ? (
          <Stack gap={4} className="col-12 mx-auto">
            { showedList.map((postObj, index) => <Post key={index} user={users[postObj.user]} postObj={postObj} />)}
          </Stack>
        ) : (
          <div className='py-5 text-center text-muted'>There are no posts</div>
        )}
      </Row>
    </Container>
  );
}

export default App;
