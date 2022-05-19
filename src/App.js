import './App.css';
import { Container, Row, Col, Stack, Form } from 'react-bootstrap';
import Post from './components/Post';
import NewPost from './components/NewPost';
import ProfilePic from './components/ProfilePic';
import React, { useState } from 'react';

function App() {
  let DUMMY_POSTS = [{
    "user": 45,
    "text": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "date": "10/28/2021",
    "time": "5:06 PM"
  }, {
    "user": 82,
    "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    "date": "6/4/2021",
    "time": "6:09 AM"
  }, {
    "user": 53,
    "text": "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "date": "2/20/2022",
    "time": "2:51 PM"
  }, {
    "user": 86,
    "text": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    "date": "6/11/2021",
    "time": "4:50 PM"
  }, {
    "user": 80,
    "text": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    "date": "4/30/2022",
    "time": "5:58 AM"
  }, {
    "user": 63,
    "text": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    "date": "10/8/2021",
    "time": "12:33 PM"
  }, {
    "user": 16,
    "text": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    "date": "10/26/2021",
    "time": "8:29 AM"
  }, {
    "user": 45,
    "text": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    "date": "8/17/2021",
    "time": "11:12 PM"
  }, {
    "user": 60,
    "text": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "date": "3/3/2022",
    "time": "4:35 PM"
  }, {
    "user": 17,
    "text": "Donec ut dolor.",
    "date": "2/10/2022",
    "time": "7:20 PM"
  }, {
    "user": 85,
    "text": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "date": "11/9/2021",
    "time": "6:29 PM"
  }, {
    "user": 68,
    "text": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "date": "9/13/2021",
    "time": "1:11 AM"
  }, {
    "user": 96,
    "text": "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "date": "3/29/2022",
    "time": "12:40 AM"
  }, {
    "user": 57,
    "text": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    "date": "4/16/2022",
    "time": "1:18 PM"
  }, {
    "user": 48,
    "text": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    "date": "9/14/2021",
    "time": "6:29 AM"
  }, {
    "user": 22,
    "text": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    "date": "10/16/2021",
    "time": "6:01 AM"
  }, {
    "user": 65,
    "text": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    "date": "5/4/2022",
    "time": "10:50 AM"
  }, {
    "user": 71,
    "text": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    "date": "8/6/2021",
    "time": "9:14 AM"
  }, {
    "user": 38,
    "text": "Morbi quis tortor id nulla ultrices aliquet.",
    "date": "5/11/2022",
    "time": "11:12 PM"
  }, {
    "user": 84,
    "text": "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    "date": "2/3/2022",
    "time": "1:39 PM"
  }, {
    "user": 70,
    "text": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    "date": "12/30/2021",
    "time": "8:21 PM"
  }, {
    "user": 71,
    "text": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    "date": "7/26/2021",
    "time": "1:35 AM"
  }, {
    "user": 60,
    "text": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    "date": "5/23/2021",
    "time": "6:46 PM"
  }, {
    "user": 3,
    "text": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "date": "10/26/2021",
    "time": "8:58 AM"
  }, {
    "user": 48,
    "text": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    "date": "12/23/2021",
    "time": "12:18 PM"
  }, {
    "user": 19,
    "text": "Integer ac neque. Duis bibendum.",
    "date": "3/1/2022",
    "time": "2:20 AM"
  }, {
    "user": 0,
    "text": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    "date": "12/30/2021",
    "time": "6:51 AM"
  }, {
    "user": 75,
    "text": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    "date": "8/26/2021",
    "time": "10:01 AM"
  }, {
    "user": 4,
    "text": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "date": "8/18/2021",
    "time": "1:00 PM"
  }, {
    "user": 83,
    "text": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    "date": "8/10/2021",
    "time": "8:21 PM"
  }, {
    "user": 50,
    "text": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    "date": "7/24/2021",
    "time": "9:22 AM"
  }, {
    "user": 68,
    "text": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    "date": "7/22/2021",
    "time": "10:13 PM"
  }, {
    "user": 56,
    "text": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    "date": "9/14/2021",
    "time": "10:28 AM"
  }, {
    "user": 95,
    "text": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    "date": "6/18/2021",
    "time": "6:12 AM"
  }, {
    "user": 50,
    "text": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    "date": "8/31/2021",
    "time": "5:26 AM"
  }, {
    "user": 74,
    "text": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    "date": "10/16/2021",
    "time": "2:25 PM"
  }, {
    "user": 19,
    "text": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    "date": "3/28/2022",
    "time": "7:42 AM"
  }, {
    "user": 62,
    "text": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    "date": "4/2/2022",
    "time": "1:28 AM"
  }, {
    "user": 23,
    "text": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    "date": "10/30/2021",
    "time": "1:36 PM"
  }, {
    "user": 3,
    "text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "date": "12/20/2021",
    "time": "7:54 PM"
  }, {
    "user": 93,
    "text": "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    "date": "5/28/2021",
    "time": "9:36 AM"
  }, {
    "user": 39,
    "text": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    "date": "5/5/2022",
    "time": "7:20 AM"
  }, {
    "user": 5,
    "text": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    "date": "6/15/2021",
    "time": "9:12 AM"
  }, {
    "user": 7,
    "text": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "date": "12/16/2021",
    "time": "2:35 AM"
  }, {
    "user": 70,
    "text": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "date": "5/31/2021",
    "time": "9:42 PM"
  }, {
    "user": 7,
    "text": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    "date": "10/2/2021",
    "time": "12:35 AM"
  }, {
    "user": 43,
    "text": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "date": "7/3/2021",
    "time": "10:06 AM"
  }, {
    "user": 26,
    "text": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    "date": "1/15/2022",
    "time": "10:14 PM"
  }, {
    "user": 99,
    "text": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    "date": "7/11/2021",
    "time": "3:05 PM"
  }, {
    "user": 80,
    "text": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    "date": "11/2/2021",
    "time": "4:30 AM"
  }, {
    "user": 24,
    "text": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "date": "8/12/2021",
    "time": "5:59 PM"
  }, {
    "user": 4,
    "text": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    "date": "3/20/2022",
    "time": "1:32 AM"
  }, {
    "user": 77,
    "text": "Morbi a ipsum.",
    "date": "5/31/2021",
    "time": "9:33 AM"
  }, {
    "user": 22,
    "text": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "date": "2/20/2022",
    "time": "10:37 PM"
  }, {
    "user": 95,
    "text": "In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    "date": "7/26/2021",
    "time": "2:18 AM"
  }, {
    "user": 67,
    "text": "Vivamus in felis eu sapien cursus vestibulum.",
    "date": "10/6/2021",
    "time": "3:31 PM"
  }, {
    "user": 43,
    "text": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "date": "9/8/2021",
    "time": "1:50 PM"
  }, {
    "user": 17,
    "text": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "date": "7/14/2021",
    "time": "1:14 PM"
  }, {
    "user": 90,
    "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "date": "12/6/2021",
    "time": "2:14 PM"
  }, {
    "user": 21,
    "text": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    "date": "10/18/2021",
    "time": "2:04 PM"
  }, {
    "user": 1,
    "text": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    "date": "4/5/2022",
    "time": "7:01 AM"
  }, {
    "user": 1,
    "text": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    "date": "12/10/2021",
    "time": "9:21 AM"
  }, {
    "user": 3,
    "text": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "date": "7/15/2021",
    "time": "1:10 AM"
  }, {
    "user": 70,
    "text": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "date": "9/14/2021",
    "time": "10:12 PM"
  }, {
    "user": 78,
    "text": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "date": "5/30/2021",
    "time": "1:28 AM"
  }, {
    "user": 5,
    "text": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    "date": "10/28/2021",
    "time": "7:41 PM"
  }, {
    "user": 51,
    "text": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "date": "11/2/2021",
    "time": "7:32 AM"
  }, {
    "user": 60,
    "text": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "date": "4/15/2022",
    "time": "3:45 PM"
  }, {
    "user": 85,
    "text": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    "date": "10/18/2021",
    "time": "6:02 PM"
  }, {
    "user": 59,
    "text": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "date": "6/6/2021",
    "time": "2:19 PM"
  }, {
    "user": 62,
    "text": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    "date": "10/15/2021",
    "time": "7:52 PM"
  }, {
    "user": 90,
    "text": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    "date": "11/1/2021",
    "time": "2:55 AM"
  }, {
    "user": 69,
    "text": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    "date": "2/2/2022",
    "time": "3:10 AM"
  }, {
    "user": 71,
    "text": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    "date": "3/20/2022",
    "time": "1:38 PM"
  }, {
    "user": 1,
    "text": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    "date": "10/27/2021",
    "time": "3:37 PM"
  }, {
    "user": 58,
    "text": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    "date": "12/4/2021",
    "time": "10:35 PM"
  }, {
    "user": 2,
    "text": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    "date": "12/7/2021",
    "time": "2:25 PM"
  }, {
    "user": 44,
    "text": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "date": "5/19/2021",
    "time": "7:57 AM"
  }, {
    "user": 5,
    "text": "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    "date": "3/7/2022",
    "time": "9:03 AM"
  }, {
    "user": 49,
    "text": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    "date": "1/30/2022",
    "time": "9:02 AM"
  }, {
    "user": 69,
    "text": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "date": "11/13/2021",
    "time": "11:39 PM"
  }, {
    "user": 51,
    "text": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    "date": "1/29/2022",
    "time": "2:44 AM"
  }, {
    "user": 98,
    "text": "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    "date": "3/11/2022",
    "time": "1:36 AM"
  }, {
    "user": 64,
    "text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "date": "3/13/2022",
    "time": "8:30 AM"
  }, {
    "user": 12,
    "text": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    "date": "11/21/2021",
    "time": "1:46 PM"
  }, {
    "user": 68,
    "text": "Integer ac neque.",
    "date": "3/17/2022",
    "time": "1:32 AM"
  }, {
    "user": 90,
    "text": "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    "date": "1/20/2022",
    "time": "12:43 AM"
  }, {
    "user": 13,
    "text": "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "date": "8/14/2021",
    "time": "1:31 AM"
  }, {
    "user": 4,
    "text": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    "date": "6/8/2021",
    "time": "4:04 PM"
  }, {
    "user": 89,
    "text": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    "date": "12/27/2021",
    "time": "10:59 AM"
  }, {
    "user": 83,
    "text": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "date": "4/24/2022",
    "time": "3:26 PM"
  }, {
    "user": 85,
    "text": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    "date": "8/31/2021",
    "time": "2:57 PM"
  }, {
    "user": 29,
    "text": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "date": "12/12/2021",
    "time": "8:12 PM"
  }, {
    "user": 62,
    "text": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "date": "2/24/2022",
    "time": "10:56 PM"
  }, {
    "user": 16,
    "text": "Aenean sit amet justo. Morbi ut odio.",
    "date": "10/30/2021",
    "time": "4:56 PM"
  }, {
    "user": 8,
    "text": "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "date": "9/22/2021",
    "time": "4:23 PM"
  }, {
    "user": 77,
    "text": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "date": "10/3/2021",
    "time": "12:43 AM"
  }, {
    "user": 45,
    "text": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    "date": "7/20/2021",
    "time": "10:04 PM"
  }, {
    "user": 54,
    "text": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    "date": "9/28/2021",
    "time": "11:29 AM"
  }, {
    "user": 31,
    "text": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    "date": "2/28/2022",
    "time": "1:35 PM"
  }]
  const [searchTerm, setSearchTerm] = useState("");
  const [postList, setPostList] = useState(DUMMY_POSTS);
  const handleNewPost = (newPost) => {
    setPostList((old) => {
      return [newPost, ...old]
    });
  }
  let users = [{
    "user": "dtchaikovsky0",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 9
  }, {
    "user": "didel1",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 16
  }, {
    "user": "uhopkins2",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 5
  }, {
    "user": "dgiacomello3",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 19
  }, {
    "user": "eabramowitch4",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 17
  }, {
    "user": "mwarner5",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 9
  }, {
    "user": "mtall6",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 15
  }, {
    "user": "gelan7",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 16
  }, {
    "user": "mroze8",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 13
  }, {
    "user": "aborsay9",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 6
  }, {
    "user": "cegea",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 2
  }, {
    "user": "shukeb",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 10
  }, {
    "user": "opeckhamc",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 16
  }, {
    "user": "bguthrumd",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 17
  }, {
    "user": "dpatye",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 2
  }, {
    "user": "alortzf",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 8
  }, {
    "user": "bdrang",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 14
  }, {
    "user": "sreinbeckh",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 17
  }, {
    "user": "sstorckei",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 17
  }, {
    "user": "cslavinj",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 15
  }, {
    "user": "mmaccauleyk",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 2
  }, {
    "user": "shawkinsl",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 15
  }, {
    "user": "cfinlaterm",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 12
  }, {
    "user": "kmoxsonn",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 7
  }, {
    "user": "mjohnsono",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 3
  }, {
    "user": "rtamesp",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 11
  }, {
    "user": "tfendlowq",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 15
  }, {
    "user": "mfranklenr",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 13
  }, {
    "user": "bswadons",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 16
  }, {
    "user": "nbrewittt",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 7
  }, {
    "user": "mhastonu",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 10
  }, {
    "user": "tboundeyv",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 12
  }, {
    "user": "hpalfriew",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 17
  }, {
    "user": "gcheesex",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 9
  }, {
    "user": "jpordaly",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 10
  }, {
    "user": "qdulintyz",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 9
  }, {
    "user": "boldam10",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 11
  }, {
    "user": "fgutcher11",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 7
  }, {
    "user": "jpoure12",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 17
  }, {
    "user": "pshallo13",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 18
  }, {
    "user": "anovic14",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 15
  }, {
    "user": "cflahy15",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 18
  }, {
    "user": "dhadgraft16",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 19
  }, {
    "user": "lpampling17",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 14
  }, {
    "user": "lbonds18",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 18
  }, {
    "user": "rassaf19",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 17
  }, {
    "user": "askehan1a",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 5
  }, {
    "user": "kmashal1b",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 11
  }, {
    "user": "ivaneev1c",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 16
  }, {
    "user": "mpolley1d",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 8
  }, {
    "user": "kkinchlea1e",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 6
  }, {
    "user": "rwhittall1f",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 15
  }, {
    "user": "mmccutcheon1g",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 20
  }, {
    "user": "cdyett1h",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 20
  }, {
    "user": "ddanieli1i",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 4
  }, {
    "user": "mibarra1j",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 8
  }, {
    "user": "agyves1k",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 3
  }, {
    "user": "mjaqueme1l",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 10
  }, {
    "user": "kstuttman1m",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 11
  }, {
    "user": "fdinnington1n",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 14
  }, {
    "user": "agulley1o",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 17
  }, {
    "user": "markell1p",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 3
  }, {
    "user": "agrazier1q",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 14
  }, {
    "user": "jscoines1r",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 6
  }, {
    "user": "pvigneron1s",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 14
  }, {
    "user": "ghafner1t",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 18
  }, {
    "user": "urennison1u",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 16
  }, {
    "user": "toluby1v",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 19
  }, {
    "user": "sdinsell1w",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 3
  }, {
    "user": "rfairman1x",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 11
  }, {
    "user": "mspeere1y",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 2
  }, {
    "user": "jmcaneny1z",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 16
  }, {
    "user": "hekins20",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 9
  }, {
    "user": "bciottoi21",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 18
  }, {
    "user": "tguyan22",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 10
  }, {
    "user": "bbridgeland23",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 15
  }, {
    "user": "wdoodson24",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 15
  }, {
    "user": "ahuortic25",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 9
  }, {
    "user": "rcargon26",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 1
  }, {
    "user": "rballeine27",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 17
  }, {
    "user": "pminto28",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 4
  }, {
    "user": "bbrauner29",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 16
  }, {
    "user": "cpietersen2a",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 1
  }, {
    "user": "mniezen2b",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 5
  }, {
    "user": "xrehorek2c",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 18
  }, {
    "user": "cwilkennson2d",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 3
  }, {
    "user": "idiver2e",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 2
  }, {
    "user": "sadney2f",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 10
  }, {
    "user": "rgrealy2g",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 12
  }, {
    "user": "omeadus2h",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 1
  }, {
    "user": "ablaw2i",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 19
  }, {
    "user": "wtaylerson2j",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 16
  }, {
    "user": "gblune2k",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 18
  }, {
    "user": "sgrosvener2l",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 17
  }, {
    "user": "abissett2m",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 10
  }, {
    "user": "cgiraudat2n",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 6
  }, {
    "user": "bannett2o",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 14
  }, {
    "user": "ogreenacre2p",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 16
  }, {
    "user": "dhenker2q",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 1
  }, {
    "user": "jbaumler2r",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 17
  }]

  let res;
  // Switch profile here
  let currentUser = 1;

  return (
    <Container fluid="md">
      <Row className='p-4'>
        <Col className='d-flex justify-content-start align-items-center'>
          <NewPost currentUser={currentUser} user={users[currentUser]} onPost={handleNewPost}></NewPost>
        </Col>
        <Col className='d-flex justify-content-center align-items-center'>
          <Form.Control className="form-control mr-sm-2" type="search" placeholder="Search posts" onChange={(event) => {
            setSearchTerm(event.target.value)
          }} aria-label="Search posts" />
        </Col>
        <Col className='d-flex justify-content-end align-items-center'>
          <ProfilePic user={users[currentUser]}></ProfilePic>
          <span>{users[currentUser].user}</span>
        </Col>
      </Row>
      <Row className='p-4'>
        <Stack gap={4} className="col-12 mx-auto">
          {res = postList.filter((post) => {
            if (searchTerm === "") {
              return true;
            }
            if (searchTerm !== "" && post.text.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())) {
              return true;
            }
            return false;
          }).map((postObj, index) => {
            return <Post key={index} user={users[postObj.user]} postObj={postObj} />
          })
          }
        </Stack>
        { res.length === 0 ? (<Col className='text-center m-5 text-muted'> No results found.</Col>) : ("")}
      </Row>
    </Container>
  );
}

export default App;
