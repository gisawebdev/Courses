import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
	const opacity = useRef(new Animated.Value(0)).current;
	const position = useRef(new Animated.Value(0)).current;

	const fadeIn = (duration: number = 300) => {
		Animated.timing(opacity, {
			toValue: 1,
			duration,
			useNativeDriver: true,
		}).start();
	};
	const fadeOut = () => {
		Animated.timing(opacity, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	const movingPosition = (
		startPosition: number,
		endPosition: number,
		duration: number = 300,
	) => {
		position.setValue(startPosition);
		Animated.timing(position, {
			toValue: endPosition,
			duration: 800,
			useNativeDriver: true,
			// easing: Easing.bounce,
		}).start();
	};

	return {
		opacity,
		position,
		fadeIn,
		fadeOut,
		movingPosition,
	};
};
