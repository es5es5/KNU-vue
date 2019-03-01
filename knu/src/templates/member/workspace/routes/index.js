import WorkspaceLayout from '@/templates/member/workspace/WorkspaceLayout'

import WorkspaceListRoutes from '@/templates/member/workspace/workspaceList/routes'

const WorkspaceRoutes = [
	{
		path: 'workspace',
		redirect: '/workspace/list',
		component: WorkspaceLayout,
		name: 'Workspace',
		children: [
			...WorkspaceListRoutes
		]
	}
]

export default WorkspaceRoutes
