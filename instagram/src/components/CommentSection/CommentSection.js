import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import styled from 'styled-components';
import CommentInput from './CommentInput';
import LikeSection from './LikeSection';

const CommentSectionDiv = styled.div `
    margin: 10px 0;
    margin-bottom: 5px;
    margin-left: 10px;
`

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
            <CommentSectionDiv>

                <LikeSection likes={this.state.likes} increaseLikes={this.increaseLikes}/>

                {this.state.comments.map((element, index) => <Comment comment={element} key={index}/>)}
            
                <CommentInput commentInput={this.state.commentInput} handleChange={this.handleChange} addNewComment={this.addNewComment}/>
            </CommentSectionDiv>
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