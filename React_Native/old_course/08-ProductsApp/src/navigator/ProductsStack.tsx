import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from '../screens/ProductsScreen';
import ProductScreen from '../screens/ProductScreen';

export type ProductsStackParams = {
	ProductsScreen: undefined;
	ProductScreen: { id?: string; name?: string };
};
const Stack = createStackNavigator<ProductsStackParams>();

export const ProductsStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				cardStyle: {
					backgroundColor: 'white',
				},
				headerStyle: {
					elevation: 0,
					shadowColor: 'transparent',
				},
			}}
		>
			<Stack.Screen
				name='ProductsScreen'
				component={ProductsScreen}
				options={{ title: 'Products' }}
			/>
			<Stack.Screen name='ProductScreen' component={ProductScreen} />
		</Stack.Navigator>
	);
};
