


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import Sidebar from '../../Component/Sidebar';
import "./App.css"
import CreatePost from '../../Component/CreatePost';
import Post from '../../Component/Post';
import PostList from '../../Component/PostList';
import { useState } from 'react';

function App() {

  const [selectedTab,setSelectedTab]=useState("Home");
  const [current,setCurrent]=useState("active");
  

  return (
    

      <div className='app-container'>
           <Sidebar  setSelectedTab={setSelectedTab}  setCurrent={setCurrent} current={current} selectedTab={selectedTab} ></Sidebar>
        
        <div className='Content'>
        <Header></Header>
        {selectedTab=="Home"?  <PostList></PostList>: <CreatePost></CreatePost>}

       
      
        <Footer></Footer>

        </div>
      </div> 

  );
}

export default App
