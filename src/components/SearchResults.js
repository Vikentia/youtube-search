import React from 'react'

function SearchResults({ resultsVideos }) {
    return (
        <div>
            <p>SearchResults</p>
            {console.log(resultsVideos)}
            {
                resultsVideos.map(item => {
                    let link = `https://www.youtube.com/watch?v=id${item.id.videoId}`;
                    return <iframe width="420" src={link} > </iframe>
                })
            }
        </div >
    );
}

export default SearchResults

//video.id.videoId