import { Box, Divider, Drawer, List, Typography, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { SideBarItem } from './SideBarItem';

export const SideBar = ({ drawerWidth = 240 }) => {
	const { displayName } = useSelector((state) => state.auth);
	const { notes } = useSelector((state) => state.journal);

	return (
		<Box
			component='nav'
			sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
		>
			<Drawer
				variant='permanent'
				open
				sx={{
					display: { xs: 'block' },
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: `${drawerWidth}px`,
					},
				}}
			>
				<Toolbar>
					<Typography noWrap component='span' fontSize={22} fontWeight={500}>
						{displayName}
					</Typography>
				</Toolbar>
				<Divider />

				<List>
					{notes.map((note) => (
						<SideBarItem key={note.id} {...note} />
					))}
				</List>
			</Drawer>
		</Box>
	);
};
