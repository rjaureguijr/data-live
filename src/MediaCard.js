import React from 'react';
import ReactDom from 'react-dom';
// import './media-card.css';

const MediaCard = ( {title, body, imageUrl} ) =>
    <div>
        <h2>{title}</h2>
        <img src={imageUrl}/>
        <p>{body}</p>
    </div>;


ReactDom.render(<MediaCard title="Testing" body="<strong>testttttt<strong>" />, document.querySelector('#root'));

export default MediaCard;