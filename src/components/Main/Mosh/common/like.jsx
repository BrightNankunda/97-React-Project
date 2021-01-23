import React, { Component } from 'react';



class Like extends Component {
    render() { 
        const {liked, onLike} = this.props;
        let classes = "btn btn-";
        classes += liked ? "success" : "secondary"
        // if(!liked) {
        //     return classes += "success"
        // }
        let like = this.props.liked ? 'Liked' : 'Like'
        return (
            
                <button onClick={onLike} className={classes}>{like}</button>
                
            
        );
    }
}
 
export default Like;