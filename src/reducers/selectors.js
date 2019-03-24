export const getAlbumsBySelectedUser = state => {
  if (!state.users.currentId) {
    return state.albums.albums;
  }
  return state.albums.albums.filter(album => album.userId === state.users.currentId);
};

export const getUserDetails = (state, userId) => {
  if (!userId) {
    return {};
  }
  return state.users.users.find(user => user.id === userId);
};

export const getUserDetailsByAlbumId = (state, albumId) => {
  const album = state.albums.albums.find(a => a.id === albumId);
  if (!album) {
    return {};
  }
  return getUserDetails(state, album.userId);
}

export const getPhotosInSelectedAlbum = state => {
  if (!state.albums.currentId) {
    return [];
  }
  return state.photos.photos.filter(photo => photo.albumId === state.albums.currentId);
}

export const getAlbumThumbnail = (state, albumId) => {
  return state.photos.photos.find(photo => photo.albumId === albumId);
}