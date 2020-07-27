import React, { Component } from 'react';
import  Post  from "./components/comentlist";
import c from  "classnames"
class App extends Component {
    state = {
      like: 20,  
            dislike: 3,
            likeActive :false,
            dislikeActive: false,
            records: [
              {"id":"1","content":"first post","comments":[{"comment":"first comment"}]},
              {"id":"2","content":"second post","comments":[{"comment":"second comment"}, {"comment":"third comment"}]}
              ]
    }


  setDislike(){
    this.setState({
dislikeActive:!this.state.dislikeActive,
dislike: this.state.dislikeActive ? this.state.dislike - 1 : this.state.dislike + 1

    });
  }
    setLike(){
      this.setState({
  likeActive:!this.state.likeActive,
  like:this.state.likeActive ?this.state.like - 1 : this.state.like+1
  
      });
    }
      handleDislike(){
        if(this.state.likeActive){
          this.setDislike();
          this.setLike();
        }
        this.setDislike()
      }
      handleLike(){
        if(this.state.dislikeActive){
          this.setDislike();
          this.setLike();
        }
       this.setDislike(); 
      }


  
  render() {
       return (
         <div className="comments fullwidth">
           <ul>
           {this.state.records.map((post, i) => ( 
             <div>
        <Post post={post} key={i}/>
<div className="buttonsection">   
                  <span>Like</span>
        <button onClick={()=>this.handleLike()} className={c({['active']:this.state.likeActive})}>{this.state.like}</button>
             <span>Dislike</span> <button onClick={()=>this.handleDislike()} className={c({['active']:this.state.dislikeActive})}>{this.state.dislike}</button>
          </div>
       </div>



        )
        
        )}

        
   </ul>
   </div>
    );
  }
}

export default App;
