const clientId = "7347e9208bbc4413bdf6d3357a771f7d";

const redirectUri = 'http://localhost:5173/';

let accessToken: string | undefined; 

interface SpotifyTrack {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { name: string };
  uri: string;
}

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } 
    
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];

      const expiresIn = Number(expiresInMatch[1]);

      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', '', '/'); 
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location.href = accessUrl;
    }
  },

  search(term: string | null) {
    const accessToken = Spotify.getAccessToken();
    
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        console.log('Response Error!')
        return [];
      }
      return jsonResponse.tracks.items.map((track: SpotifyTrack) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },
};

export default Spotify;