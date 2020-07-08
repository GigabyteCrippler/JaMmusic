import React from 'react';
import { Song } from '../../redux/mapStoreToProps';

const pageH4 = (pageTitle: string) => (
  <h4
    style={{
      textAlign: 'center',
      margin: '20px',
      fontWeight: 'bold',
      marginBottom: '0px',
      fontSize: '16pt',
    }}
    id="headerTitle"
  >
    {pageTitle}
  </h4>
);

const setIndex = (songs: any[], category: string) => {
  let categorySongs: any[] = [];
  const otherSongs: any[] = [];
  for (let i = 0; songs.length > i; i += 1) {
    // eslint-disable-next-line security/detect-object-injection
    if (songs[i].category === category) categorySongs.push(songs[i]);
    else otherSongs.push(songs[i]);// eslint-disable-line security/detect-object-injection
  }
  categorySongs = categorySongs.concat(otherSongs);
  return categorySongs;
};

function copyRight() { // eslint-disable-line class-methods-use-this
  return (<span>All Original Songs &copy;2019 &ndash; 2020 Web Jam LLC</span>);
}

function textUnderPlayer(song: any) {
  return (
    <section
      className="col-12 mt-1"
      style={{
        fontSize: '0.8em', marginTop: 0, marginBottom: '0', paddingTop: 0, paddingBottom: 0,
      }}
    >
      <strong>
        {song !== null ? song.title : null}
        {song !== null && song.composer !== undefined && song.category !== 'original' ? ` by ${song.composer}` : null}
        {song !== null && song.artist !== undefined ? ` - ${song.artist}` : null}
      </strong>
      <p style={{
        textAlign: 'center', fontSize: '8pt', marginTop: '4px', marginBottom: 0,
      }}
      >
        {song !== null && song.album !== undefined ? song.album : null}
        {song !== null && song.year !== undefined ? `, ${song.year}` : null}
      </p>
      <p style={{
        textAlign: 'center', fontSize: '8pt', marginTop: '2px', marginBottom: 0,
      }}
      >
        {song !== null && song.category === 'original' ? copyRight() : null}
      </p>
    </section>
  );
}

function setPlayerStyle(song: Song) {
  let playerStyle = {
    backgroundColor: '#2a2a2a',
    textAlign: 'center',
    backgroundImage: `url(${song.image})`,
    backgroundPosition: 'center',
    backgroundSize: '80%',
    backgroundRepeat: 'no-repeat',
  };

  if (song.image === undefined || song.image === '') {
    playerStyle = {
      backgroundImage: 'url("/static/imgs/webjamlogo1.png")',
      backgroundColor: '#2a2a2a',
      textAlign: 'center',
      backgroundPosition: 'center',
      backgroundSize: '80%',
      backgroundRepeat: 'no-repeat',
    };
    if (song.url[8] === 's' || song.url[12] === 'y') {
      playerStyle = {
        backgroundImage: '',
        backgroundColor: '#eee',
        textAlign: 'center',
        backgroundPosition: 'center',
        backgroundSize: '80%',
        backgroundRepeat: 'no-repeat',
      };
    }
  }
  return playerStyle as Record<string, unknown>;
}

export default {
  pageH4,
  setIndex,
  textUnderPlayer,
  copyRight,
  setPlayerStyle,
};
