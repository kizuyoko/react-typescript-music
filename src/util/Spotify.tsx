import { Music } from "./MusicType";

const clientId = "7347e9208bbc4413bdf6d3357a771f7d";

//const redirectUri = 'http://localhost:5173/';
const redirectUri = 'https://react-typescript-music.vercel.app/';

let accessToken: string | undefined; 

interface SpotifyTrack {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { name: string };
  uri: string;
}

const Spotify = {
  async getAccessToken() {
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
      return null;
    }
  },

  async search (term: string | null) {
    const accessToken = await Spotify.getAccessToken();
    
    if (!accessToken) {
      console.error('Access token is not available.');
      return [];
    }

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      const jsonResponse = await response.json();
  
      if (!jsonResponse.tracks) {
        console.log('Response Error!');
        return [];
      }

      return jsonResponse.tracks.items.map((track: SpotifyTrack) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    } catch (error) {
      console.error('Error fetching data from Spotify API:', error);
      return [];
    };
  },

  savePlaylist: async (name: string, trackUris: Music[]) => {
    if (!name || !trackUris) {
      return;
    }
    const accessToken = Spotify.getAccessToken();
    
    if (!accessToken) {
      console.error('Access token is not available.');
      return;
    }
    
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId: string;

    try {
      const userResponse = await fetch('https://api.spotify.com/v1/me', {
        headers: headers,
      });

      const userJsonResponse: { id: string } = await userResponse.json();
      userId = userJsonResponse.id;

      const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ name: name })
      });

      const playlistJsonResponse: { id: string } = await createPlaylistResponse.json();
      const playlistId = playlistJsonResponse.id;

      await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ uris: trackUris })
      });

    } catch (error) {
      console.error('Error saving data from Spotify API:', error);
      return;
    }
  }
};

export default Spotify;