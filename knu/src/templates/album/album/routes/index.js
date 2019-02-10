import AlbumLayout from '@/templates/album/album/AlbumLayout'

import CommonAlbumRoutes from '@/templates/album/album/common/routes'

const AlbumRoutes = [
	{
		path: 'album',
		redirect: '/album/common',
		component: AlbumLayout,
		name: 'Album',
		children: [
			...CommonAlbumRoutes
		]
	}
]

export default AlbumRoutes
