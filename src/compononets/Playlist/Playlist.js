import React, { useState } from "react";
import SaveToSpotifyButton from "../SaveToSpotifyButton/SaveToSpotifyButton";
import TrackList from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

function PlayList(props) {
  const [playlistName, setPlaylistName] = useState("playlist name");

  const setName = ({ target }) => {
    setPlaylistName(target.value);
  };

  const removeSongFromPlaylist = (track) => {
    const filtered = props.playlist.filter((item) => item !== track);
    props.setPlaylist(filtered);
  };

  console.log("inside playlist", props.playlist);

  return (
    <div className={styles.personalStyle}>
      <input value={playlistName} onChange={setName} />
      <TrackList tracks={props.playlist} function={removeSongFromPlaylist} type={"remove"}></TrackList>
      <SaveToSpotifyButton token={props.token} playlistName={props.playlistName} tracks={props.playlist} setPlaylist={props.setPlaylist}></SaveToSpotifyButton>
    </div>
  );
}

export default PlayList;
