const mapStoreToProps = (store) => ({
  songs: store.songs.songs,
  images: store.images.images,
  userCount: store.sc.userCount,
  auth: store.auth,
});
export default mapStoreToProps;