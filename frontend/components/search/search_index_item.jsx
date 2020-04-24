import React from 'react';
import { Link } from 'react-router-dom';

const SearchIndexItem = ({ video }) => (
    <div className='search-index-item flex'>
        <div className='search-thumbnail-container'>
            <Link to={`/videos/${video.id}`}>
                <img src={video.thumbnailUrl} />
            </Link>
        </div>
        <section className='search-item-details flex'>
            <h2>{video.title}</h2>
            <div className='show-item-credentials flex'>
                <Link to={`/users/${video.uploader.id}`}
                    className='username'>{video.uploader.username}</Link>
                <p>{`• ${video.shorthandViews} • ${video.timeSinceUpload}`}</p>
            </div>
            <p className='search-item-description'>{video.description}</p>
        </section>
    </div>
);

export default SearchIndexItem;