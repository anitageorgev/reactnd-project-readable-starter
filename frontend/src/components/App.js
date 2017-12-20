import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createPost} from '../actions';
import Modal from 'react-modal'
import './App.css';
// import AddComment from 'react-icons/lib/md/add-circle-outline';
// import PostList from './PostList';
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o';
// import Loading from 'react-loading';
import { fetchCategories, fetchAllPosts, fetchPostsByCategory } from '../utils/api';

class App extends Component {
  state ={
    newPostModal : false,
    title : null,
    body: null,
    author: null,
    category: null,
    loadingPosts : false,
    tempPost : null,
  }

  openNewPostModal = () => {
    this.setState(() => ({newPostModal: true}));

    // fetchCategories()
    // .then((res) => console.log('fetch categories',res));
    
    fetchAllPosts()
    .then((tempPost) => this.setState(() => ({tempPost})))
    .then(() => createPost('react', this.state.tempPost));

    // fetchPostsByCategory('react')
    // .then((res) => console.log('fetch by category: ', res));

  }

  closeNewPostModal = () => {
    this.setState(()=> ({
      newPostModal : false,
      // title : null,
      // body: null,
      // author : null,
      // category: null
    }));
  }

  getAllPosts =() => {

    this.setState(({loadingPosts : true}));
    // fetchAllPosts()
  }

  render() {
    const { newPostModal} = this.state;
    const { listOfPosts , createPost} = this.props;

    console.log('Rendering App');
    console.log(this.state);
    console.log('props' , this.props);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readable</h1>
        </header>

        <div className ='readable'>
          <div>
            <button onClick={() => this.openNewPostModal()} className='icon-btn'>
              <CalendarIcon size={30}/>
            </button>
            <button onClick={() => {
            createPost({category:'react', post: this.state.tempPost})
            this.closeNewPostModal()}
            } className='icon-btn'>
              <CalendarIcon size={60}/>
            </button>
          </div>
          <Modal 
            classname='modal' 
            overlayClassName='overlay'
            isOpen={newPostModal} 
            onRequestClose={this.closeNewPostModal}
            contentlabel= 'Modal'
          >
            <p> Penny for your thoughts? </p>
            <input type='text' placeholder ='Title'/>
            <input type='text' placeholder ='Body'/>
            <input type='text' placeholder ='Author'/>
            <input type='text' placeholder ='Category'/>
            <button > Add Post</button>
          </Modal>

          <p>{JSON.stringify(listOfPosts)}</p>
        </div>


        {/* <PostList/> */}
        {/* <button onClick={console.log('hi')}> <AddComment size={30}/> </button> */}
      </div>
    );
  }
}

function mapStateToProps({listOfPosts, tempPost}){
  console.log('mapping state to props');
    return {
      listOfPosts : tempPost
    };

}

function mapDispatchToProps (dispatch) {
  return{
    createPost: (data) => dispatch(createPost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
