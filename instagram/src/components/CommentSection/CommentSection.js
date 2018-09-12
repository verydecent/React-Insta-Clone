import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.css';
import CommentInput from './CommentInput';
import LikeSection from './LikeSection';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            commentInput: "",
            likes: props.likes
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state.input)
    }

    addNewComment = event => {
        event.preventDefault();
        this.setState({ 
            comments: [
                ...this.state.comments, // A copy of the previously listed comments 
                { username: "Sunflower", text: this.state.commentInput,  } // Adding on top of those comments, we add the new comment 
            ],
            commentInput: "" // This is supposed to clear the comment input, but it's not
         })
    }

    increaseLikes = event => {
        event.preventDefault();
        this.setState({ likes: this.state.likes + 1 })
        console.log('Like button Count:', this.state.likes);
    }

    render() {
        return (
            <div className="CommentSectionDiv">

            <LikeSection likes={this.state.likes} increaseLikes={this.increaseLikes}/>

            {this.state.comments.map((element, index) => <Comment comment={element} key={index}/>)}
            
            <CommentInput commentInput={this.state.commentInput} updateComment={this.handleChange} submitComment={this.addNewComment}/>
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;