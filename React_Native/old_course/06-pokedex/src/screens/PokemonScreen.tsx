import { StackScreenProps } from '@react-navigation/stack';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Platform,
	Image,
	ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParams } from '../navigator/Stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> {}

const PokemonScreen = ({ navigation, route }: Props) => {
	const { top } = useSafeAreaInsets();
	const { simplePokemon, color } = route.params;
	const { id, name, picture } = simplePokemon;

	const { isLoading, pokemon } = usePokemon(id);
	console.log(pokemon);
	return (
		<View style={{ flex: 1 }}>
			<View style={{ ...styles.headerContainer, backgroundColor: color }}>
				<TouchableOpacity
					activeOpacity={0.8}
					style={{ ...styles.backButton, top: top + 5 }}
					onPress={() => navigation.goBack()}
				>
					<Ionicons
						name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'arrow-back'}
						size={35}
						color='white'
					/>
				</TouchableOpacity>

				<Text style={{ ...styles.pokemonName, top: top + 40 }}>
					{name + '\n'} #{id}
				</Text>

				<Image
					source={require('../../assets/img/pokebola-blanca.png')}
					style={{ ...styles.pokeball }}
				/>

				<FadeInImage uri={picture} style={styles.pokemonImage} />
			</View>

			{isLoading ? (
				<View style={styles.loadingIndicator}>
					<ActivityIndicator color={color} size={50} />
				</View>
			) : (
				<PokemonDetails pokemon={pokemon} />
			)}
		</View>
	);
};

export default PokemonScreen;

const styles = StyleSheet.create({
	headerContainer: {
		height: 370,
		zIndex: 2,
		borderBottomLeftRadius: 1000,
		borderBottomRightRadius: 1000,
		alignItems: 'center',
	},
	backButton: {
		position: 'absolute',
		left: 20,
	},
	pokemonName: {
		color: 'white',
		fontSize: 40,
		alignSelf: 'flex-start',
		textTransform: 'capitalize',
		left: 20,
	},
	pokeball: {
		width: 250,
		height: 250,
		bottom: -20,
		opacity: 0.7,
	},
	pokemonImage: {
		width: 250,
		height: 250,
		position: 'absolute',
		bottom: -15,
	},
	loadingIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
