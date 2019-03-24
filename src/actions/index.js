export { 
  getAlbums,
  getAlbumsPending,
  getAlbumsFulfilled,
  getAlbumsRejected,
} from './albums';

export { 
  getPhotos,
  getPhotosPending,
  getPhotosFulfilled,
  getPhotosRejected,
} from './photos';

export { 
  getUsers,
  getUsersPending,
  getUsersFulfilled,
  getUsersRejected,
} from './users';

export const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}