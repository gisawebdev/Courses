import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import { useThemeContext } from '../context/theme/useThemeContext';

const SwitchScreen = () => {
	const {
		theme: { colors },
	} = useThemeContext();
	const [state, setState] = useState({
		isActive: true,
		isHungry: false,
		isHappy: true,
	});

	const { isActive, isHungry, isHappy } = state;

	const onChange = (value: boolean, field: string) => {
		setState({
			...state,
			[field]: value,
		});
	};

	return (
		<View style={{ marginHorizontal: 20 }}>
			<HeaderTitle title='Switches' />

			<View style={styles.switchRow}>
				<Text style={{ ...styles.switchText, color: colors.text }}>
					isActive
				</Text>
				<CustomSwitch
					isOn={isActive}
					onChange={(value) => onChange(value, 'isActive')}
				/>
			</View>
			<View style={styles.switchRow}>
				<Text style={{ ...styles.switchText, color: colors.text }}>
					isHungry
				</Text>
				<CustomSwitch
					isOn={isHungry}
					onChange={(value) => onChange(value, 'isHungry')}
				/>
			</View>
			<View style={styles.switchRow}>
				<Text style={{ ...styles.switchText, color: colors.text }}>
					isHappy
				</Text>
				<CustomSwitch
					isOn={isHappy}
					onChange={(value) => onChange(value, 'isHappy')}
				/>
			</View>

			<Text style={{ ...styles.switchText, color: colors.text }}>
				{JSON.stringify(state, null, 5)}
			</Text>
		</View>
	);
};

export default SwitchScreen;

const styles = StyleSheet.create({
	switchRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},
	switchText: {
		fontSize: 25,
	},
});
