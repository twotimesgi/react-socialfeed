import './App.css';
import { Container, Row, Col, Stack, Form } from 'react-bootstrap';
import Post from './components/Post';
import NewPost from './components/NewPost';
import ProfilePic from './components/ProfilePic';
import React, { useState } from 'react';

function App() {
  let DUMMY_POSTS = [{
    "id": 1,
    "user": 68,
    "text": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "date": "06/20/2021",
    "time": "7:37 PM"
  }, {
    "id": 2,
    "user": 55,
    "text": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    "date": "08/20/2021",
    "time": "7:17 PM"
  }, {
    "id": 3,
    "user": 84,
    "text": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "date": "12/03/2021",
    "time": "9:55 PM"
  }, {
    "id": 4,
    "user": 83,
    "text": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    "date": "04/07/2022",
    "time": "6:08 PM"
  }, {
    "id": 5,
    "user": 94,
    "text": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "date": "04/28/2022",
    "time": "5:20 AM"
  }, {
    "id": 6,
    "user": 34,
    "text": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    "date": "02/10/2022",
    "time": "2:01 AM"
  }, {
    "id": 7,
    "user": 68,
    "text": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    "date": "11/30/2021",
    "time": "7:03 PM"
  }, {
    "id": 8,
    "user": 37,
    "text": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "date": "04/01/2022",
    "time": "7:34 PM"
  }, {
    "id": 9,
    "user": 2,
    "text": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    "date": "05/19/2021",
    "time": "4:25 AM"
  }, {
    "id": 10,
    "user": 86,
    "text": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    "date": "02/18/2022",
    "time": "6:27 AM"
  }, {
    "id": 11,
    "user": 34,
    "text": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    "date": "05/08/2022",
    "time": "3:41 AM"
  }, {
    "id": 12,
    "user": 41,
    "text": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    "date": "02/17/2022",
    "time": "10:26 AM"
  }, {
    "id": 13,
    "user": 12,
    "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "date": "01/24/2022",
    "time": "11:41 AM"
  }, {
    "id": 14,
    "user": 66,
    "text": "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    "date": "01/08/2022",
    "time": "7:46 AM"
  }, {
    "id": 15,
    "user": 87,
    "text": "Aenean sit amet justo. Morbi ut odio.",
    "date": "12/22/2021",
    "time": "12:15 AM"
  }, {
    "id": 16,
    "user": 12,
    "text": "Cras in purus eu magna vulputate luctus.",
    "date": "01/07/2022",
    "time": "6:38 AM"
  }, {
    "id": 17,
    "user": 19,
    "text": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "date": "08/16/2021",
    "time": "11:24 AM"
  }, {
    "id": 18,
    "user": 19,
    "text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    "date": "11/23/2021",
    "time": "7:08 PM"
  }, {
    "id": 19,
    "user": 85,
    "text": "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    "date": "07/09/2021",
    "time": "9:13 PM"
  }, {
    "id": 20,
    "user": 76,
    "text": "Integer ac neque.",
    "date": "07/27/2021",
    "time": "6:36 AM"
  }, {
    "id": 21,
    "user": 57,
    "text": "Suspendisse potenti.",
    "date": "04/05/2022",
    "time": "12:47 PM"
  }, {
    "id": 22,
    "user": 59,
    "text": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    "date": "10/26/2021",
    "time": "12:13 PM"
  }, {
    "id": 23,
    "user": 4,
    "text": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    "date": "09/09/2021",
    "time": "6:36 AM"
  }, {
    "id": 24,
    "user": 25,
    "text": "Maecenas tincidunt lacus at velit.",
    "date": "04/27/2022",
    "time": "11:59 AM"
  }, {
    "id": 25,
    "user": 57,
    "text": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    "date": "04/30/2022",
    "time": "7:19 AM"
  }, {
    "id": 26,
    "user": 13,
    "text": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    "date": "01/11/2022",
    "time": "4:07 PM"
  }, {
    "id": 27,
    "user": 35,
    "text": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "date": "01/04/2022",
    "time": "8:52 AM"
  }, {
    "id": 28,
    "user": 59,
    "text": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "date": "07/22/2021",
    "time": "10:18 AM"
  }, {
    "id": 29,
    "user": 82,
    "text": "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "date": "07/28/2021",
    "time": "12:35 PM"
  }, {
    "id": 30,
    "user": 43,
    "text": "Etiam pretium iaculis justo.",
    "date": "07/12/2021",
    "time": "4:42 PM"
  }, {
    "id": 31,
    "user": 6,
    "text": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    "date": "06/23/2021",
    "time": "7:11 AM"
  }, {
    "id": 32,
    "user": 38,
    "text": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    "date": "02/27/2022",
    "time": "4:04 AM"
  }, {
    "id": 33,
    "user": 36,
    "text": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "date": "10/15/2021",
    "time": "2:12 AM"
  }, {
    "id": 34,
    "user": 10,
    "text": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    "date": "04/08/2022",
    "time": "12:29 AM"
  }, {
    "id": 35,
    "user": 28,
    "text": "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "date": "07/08/2021",
    "time": "2:12 PM"
  }, {
    "id": 36,
    "user": 18,
    "text": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    "date": "11/13/2021",
    "time": "8:41 PM"
  }, {
    "id": 37,
    "user": 58,
    "text": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    "date": "06/19/2021",
    "time": "3:24 AM"
  }, {
    "id": 38,
    "user": 29,
    "text": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    "date": "01/25/2022",
    "time": "11:03 PM"
  }, {
    "id": 39,
    "user": 51,
    "text": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "date": "12/01/2021",
    "time": "2:59 PM"
  }, {
    "id": 40,
    "user": 79,
    "text": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    "date": "05/02/2022",
    "time": "2:36 AM"
  }, {
    "id": 41,
    "user": 10,
    "text": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    "date": "06/30/2021",
    "time": "8:41 AM"
  }, {
    "id": 42,
    "user": 50,
    "text": "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "date": "03/14/2022",
    "time": "6:28 PM"
  }, {
    "id": 43,
    "user": 26,
    "text": "Duis ac nibh.",
    "date": "06/10/2021",
    "time": "7:09 PM"
  }, {
    "id": 44,
    "user": 69,
    "text": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    "date": "04/22/2022",
    "time": "2:57 PM"
  }, {
    "id": 45,
    "user": 19,
    "text": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    "date": "12/06/2021",
    "time": "4:25 PM"
  }, {
    "id": 46,
    "user": 46,
    "text": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    "date": "03/08/2022",
    "time": "3:05 AM"
  }, {
    "id": 47,
    "user": 63,
    "text": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "date": "02/09/2022",
    "time": "7:48 AM"
  }, {
    "id": 48,
    "user": 57,
    "text": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    "date": "04/29/2022",
    "time": "5:03 AM"
  }, {
    "id": 49,
    "user": 8,
    "text": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "date": "03/29/2022",
    "time": "5:49 PM"
  }, {
    "id": 50,
    "user": 4,
    "text": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    "date": "10/01/2021",
    "time": "1:19 PM"
  }, {
    "id": 51,
    "user": 90,
    "text": "Nulla justo.",
    "date": "09/17/2021",
    "time": "5:00 PM"
  }, {
    "id": 52,
    "user": 33,
    "text": "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    "date": "10/25/2021",
    "time": "10:22 AM"
  }, {
    "id": 53,
    "user": 58,
    "text": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "date": "01/26/2022",
    "time": "1:59 AM"
  }, {
    "id": 54,
    "user": 74,
    "text": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    "date": "07/28/2021",
    "time": "4:15 PM"
  }, {
    "id": 55,
    "user": 50,
    "text": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    "date": "06/19/2021",
    "time": "2:27 AM"
  }, {
    "id": 56,
    "user": 11,
    "text": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    "date": "09/23/2021",
    "time": "11:27 AM"
  }, {
    "id": 57,
    "user": 31,
    "text": "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    "date": "03/04/2022",
    "time": "9:03 PM"
  }, {
    "id": 58,
    "user": 50,
    "text": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    "date": "11/30/2021",
    "time": "1:37 AM"
  }, {
    "id": 59,
    "user": 13,
    "text": "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    "date": "02/09/2022",
    "time": "3:14 AM"
  }, {
    "id": 60,
    "user": 74,
    "text": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    "date": "07/23/2021",
    "time": "7:13 AM"
  }, {
    "id": 61,
    "user": 17,
    "text": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "date": "05/12/2022",
    "time": "10:30 AM"
  }, {
    "id": 62,
    "user": 5,
    "text": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    "date": "11/25/2021",
    "time": "2:01 AM"
  }, {
    "id": 63,
    "user": 86,
    "text": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "date": "08/12/2021",
    "time": "2:27 PM"
  }, {
    "id": 64,
    "user": 55,
    "text": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    "date": "03/04/2022",
    "time": "1:13 AM"
  }, {
    "id": 65,
    "user": 5,
    "text": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    "date": "10/26/2021",
    "time": "1:13 AM"
  }, {
    "id": 66,
    "user": 93,
    "text": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    "date": "06/24/2021",
    "time": "11:01 PM"
  }, {
    "id": 67,
    "user": 77,
    "text": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "date": "09/08/2021",
    "time": "6:37 PM"
  }, {
    "id": 68,
    "user": 67,
    "text": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    "date": "09/15/2021",
    "time": "7:06 PM"
  }, {
    "id": 69,
    "user": 45,
    "text": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "date": "01/26/2022",
    "time": "3:55 PM"
  }, {
    "id": 70,
    "user": 94,
    "text": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    "date": "09/03/2021",
    "time": "11:19 PM"
  }, {
    "id": 71,
    "user": 39,
    "text": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    "date": "02/07/2022",
    "time": "2:43 PM"
  }, {
    "id": 72,
    "user": 64,
    "text": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    "date": "12/13/2021",
    "time": "6:07 AM"
  }, {
    "id": 73,
    "user": 83,
    "text": "Suspendisse potenti. In eleifend quam a odio.",
    "date": "12/31/2021",
    "time": "10:29 AM"
  }, {
    "id": 74,
    "user": 60,
    "text": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    "date": "01/10/2022",
    "time": "4:50 AM"
  }, {
    "id": 75,
    "user": 73,
    "text": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    "date": "12/01/2021",
    "time": "9:16 AM"
  }, {
    "id": 76,
    "user": 79,
    "text": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "date": "03/14/2022",
    "time": "5:28 PM"
  }, {
    "id": 77,
    "user": 53,
    "text": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    "date": "06/01/2021",
    "time": "11:06 AM"
  }, {
    "id": 78,
    "user": 51,
    "text": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "date": "12/11/2021",
    "time": "12:09 PM"
  }, {
    "id": 79,
    "user": 16,
    "text": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    "date": "07/27/2021",
    "time": "2:52 PM"
  }, {
    "id": 80,
    "user": 70,
    "text": "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "date": "07/04/2021",
    "time": "11:32 AM"
  }, {
    "id": 81,
    "user": 57,
    "text": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "date": "02/15/2022",
    "time": "8:15 PM"
  }, {
    "id": 82,
    "user": 80,
    "text": "Nam tristique tortor eu pede.",
    "date": "07/24/2021",
    "time": "8:01 PM"
  }, {
    "id": 83,
    "user": 22,
    "text": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    "date": "08/03/2021",
    "time": "8:08 AM"
  }, {
    "id": 84,
    "user": 55,
    "text": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "date": "12/12/2021",
    "time": "8:29 AM"
  }, {
    "id": 85,
    "user": 88,
    "text": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    "date": "08/05/2021",
    "time": "5:23 PM"
  }, {
    "id": 86,
    "user": 54,
    "text": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "date": "11/01/2021",
    "time": "10:08 PM"
  }, {
    "id": 87,
    "user": 92,
    "text": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "date": "05/14/2022",
    "time": "4:26 PM"
  }, {
    "id": 88,
    "user": 59,
    "text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "date": "12/13/2021",
    "time": "4:36 AM"
  }, {
    "id": 89,
    "user": 66,
    "text": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "date": "06/19/2021",
    "time": "7:36 AM"
  }, {
    "id": 90,
    "user": 97,
    "text": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    "date": "05/29/2021",
    "time": "5:30 PM"
  }, {
    "id": 91,
    "user": 55,
    "text": "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    "date": "09/30/2021",
    "time": "10:06 AM"
  }, {
    "id": 92,
    "user": 19,
    "text": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    "date": "10/26/2021",
    "time": "7:55 PM"
  }, {
    "id": 93,
    "user": 79,
    "text": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    "date": "12/19/2021",
    "time": "11:26 AM"
  }, {
    "id": 94,
    "user": 18,
    "text": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    "date": "06/14/2021",
    "time": "2:23 PM"
  }, {
    "id": 95,
    "user": 27,
    "text": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    "date": "07/28/2021",
    "time": "2:55 PM"
  }, {
    "id": 96,
    "user": 92,
    "text": "Integer ac leo. Pellentesque ultrices mattis odio.",
    "date": "04/07/2022",
    "time": "12:06 PM"
  }, {
    "id": 97,
    "user": 76,
    "text": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    "date": "05/04/2022",
    "time": "6:09 PM"
  }, {
    "id": 98,
    "user": 1,
    "text": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "date": "06/04/2021",
    "time": "3:59 PM"
  }, {
    "id": 99,
    "user": 48,
    "text": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    "date": "10/09/2021",
    "time": "9:25 AM"
  }, {
    "id": 100,
    "user": 86,
    "text": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "date": "05/20/2021",
    "time": "7:33 AM"
  }]

  const [searchTerm, setSearchTerm] = useState("");
  const [postList, setPostList] = useState(DUMMY_POSTS);
  
  const handleNewPost = (newPost) => {
    setPostList((old) => {
      return [newPost, ...old]
    });
  }

  const handleDelete = (id) => {
    let elemIndex;
    postList.forEach((postObj, index) => {
      if(postObj.id === id) elemIndex = index;
    })
    postList.splice(elemIndex, 1);
    setPostList([...postList]);
  }
  let users = [{
    "id": 1,
    "user": "adeblasi0",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 18 
  }, {
    "id": 2,
    "user": "amckeeman1",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 15
  }, {
    "id": 3,
    "user": "rbartosinski2",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 9
  }, {
    "id": 4,
    "user": "wwressell3",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 16
  }, {
    "id": 5,
    "user": "gthoresbie4",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 6
  }, {
    "id": 6,
    "user": "vgemnett5",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 10
  }, {
    "id": 7,
    "user": "fstanmore6",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 13
  }, {
    "id": 8,
    "user": "ablain7",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 16
  }, {
    "id": 9,
    "user": "sleatherborrow8",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 17
  }, {
    "id": 10,
    "user": "slegge9",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 5
  }, {
    "id": 11,
    "user": "pmcfaella",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 1
  }, {
    "id": 12,
    "user": "wcrucittib",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 19
  }, {
    "id": 13,
    "user": "ckopeckac",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 3
  }, {
    "id": 14,
    "user": "mpiatkowd",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 3
  }, {
    "id": 15,
    "user": "rmicahe",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 12
  }, {
    "id": 16,
    "user": "ahuntressf",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 5
  }, {
    "id": 17,
    "user": "apembertong",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 6
  }, {
    "id": 18,
    "user": "mdoyleyh",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 13
  }, {
    "id": 19,
    "user": "molesi",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 3
  }, {
    "id": 20,
    "user": "agoodlakej",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 7
  }, {
    "id": 21,
    "user": "lsheardk",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 4
  }, {
    "id": 22,
    "user": "mjanousl",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 16
  }, {
    "id": 23,
    "user": "mhastewellm",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 12
  }, {
    "id": 24,
    "user": "zginnn",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 1
  }, {
    "id": 25,
    "user": "hbohillso",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 20
  }, {
    "id": 26,
    "user": "kkingsnodep",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 7
  }, {
    "id": 27,
    "user": "pantonopoulosq",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 3
  }, {
    "id": 28,
    "user": "mbemmentr",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 7
  }, {
    "id": 29,
    "user": "mtredinnicks",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 17
  }, {
    "id": 30,
    "user": "ahearthfieldt",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 11
  }, {
    "id": 31,
    "user": "bwagenenu",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 16
  }, {
    "id": 32,
    "user": "dablottv",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 2
  }, {
    "id": 33,
    "user": "rwrathmellw",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 20
  }, {
    "id": 34,
    "user": "lcahillanex",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 12
  }, {
    "id": 35,
    "user": "hrilstony",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 2
  }, {
    "id": 36,
    "user": "ssorelz",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 17
  }, {
    "id": 37,
    "user": "wbulford10",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 4
  }, {
    "id": 38,
    "user": "ghearsey11",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 12
  }, {
    "id": 39,
    "user": "jgillian12",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 7
  }, {
    "id": 40,
    "user": "kwoodgate13",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 3
  }, {
    "id": 41,
    "user": "rpatience14",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 5
  }, {
    "id": 42,
    "user": "snisius15",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 19
  }, {
    "id": 43,
    "user": "dandryszczak16",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 8
  }, {
    "id": 44,
    "user": "omccord17",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 13
  }, {
    "id": 45,
    "user": "sragbourn18",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 6
  }, {
    "id": 46,
    "user": "bhens19",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 19
  }, {
    "id": 47,
    "user": "velnaugh1a",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 16
  }, {
    "id": 48,
    "user": "vthornebarrow1b",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 10
  }, {
    "id": 49,
    "user": "jlanglands1c",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 13
  }, {
    "id": 50,
    "user": "ajacklin1d",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 18
  }, {
    "id": 51,
    "user": "vfaivre1e",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 4
  }, {
    "id": 52,
    "user": "wellam1f",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 13
  }, {
    "id": 53,
    "user": "ikrysztowczyk1g",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 18
  }, {
    "id": 54,
    "user": "jerickssen1h",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 18
  }, {
    "id": 55,
    "user": "dlosbie1i",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 12
  }, {
    "id": 56,
    "user": "nmacdonough1j",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 16
  }, {
    "id": 57,
    "user": "palvin1k",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 9
  }, {
    "id": 58,
    "user": "zlownsbrough1l",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 9
  }, {
    "id": 59,
    "user": "mringe1m",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 8
  }, {
    "id": 60,
    "user": "ecescotti1n",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 17
  }, {
    "id": 61,
    "user": "gpanner1o",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 20
  }, {
    "id": 62,
    "user": "alandis1p",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 3
  }, {
    "id": 63,
    "user": "srainsdon1q",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 20
  }, {
    "id": 64,
    "user": "sspadotto1r",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 1
  }, {
    "id": 65,
    "user": "twasling1s",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 7
  }, {
    "id": 66,
    "user": "ekasher1t",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 14
  }, {
    "id": 67,
    "user": "hridewood1u",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 19
  }, {
    "id": 68,
    "user": "cburnard1v",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 6
  }, {
    "id": 69,
    "user": "ryitzovicz1w",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 9
  }, {
    "id": 70,
    "user": "rpatullo1x",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 10
  }, {
    "id": 71,
    "user": "obrolan1y",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 9
  }, {
    "id": 72,
    "user": "mloft1z",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 18
  }, {
    "id": 73,
    "user": "dannear20",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 17
  }, {
    "id": 74,
    "user": "mgoullee21",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 19
  }, {
    "id": 75,
    "user": "fadran22",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 2
  }, {
    "id": 76,
    "user": "jpeasnone23",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 17
  }, {
    "id": 77,
    "user": "cblueman24",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 20
  }, {
    "id": 78,
    "user": "cinglesent25",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 9
  }, {
    "id": 79,
    "user": "kgleave26",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 3
  }, {
    "id": 80,
    "user": "trodie27",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 5
  }, {
    "id": 81,
    "user": "sbouller28",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 10
  }, {
    "id": 82,
    "user": "wpelfer29",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 15
  }, {
    "id": 83,
    "user": "bingold2a",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 8
  }, {
    "id": 84,
    "user": "sblackshaw2b",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 17
  }, {
    "id": 85,
    "user": "agoater2c",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 15
  }, {
    "id": 86,
    "user": "cbreissan2d",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 9
  }, {
    "id": 87,
    "user": "lmilhench2e",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 10
  }, {
    "id": 88,
    "user": "lcestard2f",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 3
  }, {
    "id": 89,
    "user": "gtrahmel2g",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 18
  }, {
    "id": 90,
    "user": "bmckitterick2h",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 17
  }, {
    "id": 91,
    "user": "ebulger2i",
    "img": "http://dummyimage.com/150x150.png/dddddd/000000",
    "newMessages": 9
  }, {
    "id": 92,
    "user": "ocaghy2j",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 6
  }, {
    "id": 93,
    "user": "ndufty2k",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 8
  }, {
    "id": 94,
    "user": "tdubose2l",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 13
  }, {
    "id": 95,
    "user": "elaydon2m",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 3
  }, {
    "id": 96,
    "user": "rrimbault2n",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 3
  }, {
    "id": 97,
    "user": "dscown2o",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 20
  }, {
    "id": 98,
    "user": "ihapper2p",
    "img": "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
    "newMessages": 15
  }, {
    "id": 99,
    "user": "jdesvignes2q",
    "img": "http://dummyimage.com/150x150.png/cc0000/ffffff",
    "newMessages": 5
  }, {
    "id": 100,
    "user": "mhowden2r",
    "img": "http://dummyimage.com/150x150.png/ff4444/ffffff",
    "newMessages": 19
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
          <Form.Control className="form-control mr-sm-2" type="search" placeholder="Search posts or users" onChange={(event) => {
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
            if (searchTerm !== "" && (post.text.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()) || users[post.user].user.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()) )) {
              return true;
            }
            return false;
          }).map((postObj) => {
            return <Post current={users[currentUser]} onDelete={handleDelete} key={postObj.id} user={users[postObj.user]} postObj={postObj} />
          })
          }
        </Stack>
        { res.length === 0 ? (<Col className='text-center m-5 text-muted'> No results found.</Col>) : ("")}
      </Row>
    </Container>
  );
}

export default App;
