import React from 'react'

function SearchResults({ resultsVideos, valueRequest }) {
    return (
        <div>
            {
                valueRequest ? <p> Результат по запросу: {valueRequest}</p> : <p> Некорректный запрос </p>
            }

            {
                valueRequest
                && resultsVideos.map(item => {
                    let link = `https://www.youtube.com/embed/${item.id.videoId}`;
                    return <iframe width="360" height="315" src={link} > </iframe>
                })
            }
        </div >
    );
}

export default SearchResults;


<iframe width="360" height="315" src="https://www.youtube.com/embed/DuudSp4sHmg" ></iframe>