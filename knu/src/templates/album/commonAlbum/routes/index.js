import CommonAlbumList from '@/templates/album/commonAlbum/views/CommonAlbumList'

const CommonAlbumRoutes = [{
	path: 'album',
	redirect: '/album',
	component: CommonAlbumList,
	name: 'CommonAlbum'
	// children: [
	// 	...somethingChildRoutes
	// ]
}]

export default CommonAlbumRoutes
