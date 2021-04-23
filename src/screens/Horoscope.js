import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView } from 'react-native';
import Colors from '../consts/colors';

const Horoscope = ({ route }) => {
	const sign = route.params;
	const todayURL = `https://aztro.sameerkumar.website/?sign=${sign.zodiac}&day=today`;
	const yesterdayURL = `https://aztro.sameerkumar.website/?sign=${sign.zodiac}&day=yesterday`;

	const [date, setDate] = useState(' ');
	const [horoscopes, setHoroscopes] = useState(' ');
	const [compat, setCompat] = useState(' ');
	const [mood, setMood] = useState(' ');
	const [yesDate, setYesDate] = useState(' ');
	const [yesHoroscopes, setYesHoroscopes] = useState(' ');
	const [yesMood, setYesMood] = useState(' ');

	useEffect(() => {
		fetch(todayURL, { method: 'POST' })
			.then((response) => response.json())
			.then((json) => {
				const current_date = json.current_date;
				const description = json.description;
				const compat = json.compatibility;
				const mood = json.mood;
				setDate(current_date);
				setHoroscopes(description);
				setCompat(compat);
				setMood(mood);
			});

		fetch(yesterdayURL, { method: 'POST' })
			.then((response) => response.json())
			.then((json) => {
				const yesterday = json.current_date;
				const description = json.description;
				const mood = json.mood;
				setYesDate(yesterday);
				setYesHoroscopes(description);
				setYesMood(mood);
			});
	}, []);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: Colors.dark }}>
			<View style={styles.imageContainer}>
				<Image source={sign.img} style={{ resizeMode: 'contain', flex: 1 }} />
			</View>
			<View style={styles.mainContainer}>
				<View style={{ margin: 20, alignItems: 'center' }}>
					<Text
						style={{
							fontSize: 26,
							fontWeight: 'bold',
							color: Colors.pink,
						}}>
						{sign.zodiac}
					</Text>
					<Text
						style={{
							fontSize: 22,
							padding: 10,
							color: Colors.light,
						}}>
						{sign.date}
					</Text>
					<Text style={{ fontSize: 20, color: Colors.white }}>
						{sign.element}
					</Text>
				</View>
				<Text style={{marginLeft: 15, color: Colors.white, fontSize: 18 }}>Compatibility: {compat}</Text>
				<View style={styles.horoscopeContainer}>
					<Text
						style={{
							fontWeight: 'bold',
							marginTop: 15,
							marginLeft: 15,
							fontSize: 16,
							color: Colors.light,
						}}>
						{date}
					</Text>
					<Text
						style={{
							marginLeft: 15,
							marginTop: 5,
							fontSize: 14,
						}}>
						Mood: {mood}
					</Text>
					<Text
						style={{
							color: Colors.dark,
							fontSize: 20,
							margin: 15,
						}}>
						{horoscopes}
					</Text>
					<View>
						<Text
							style={{
								fontWeight: 'bold',
								marginTop: 15,
								marginLeft: 15,
								fontSize: 16,
								color: Colors.light,
							}}>
							{yesDate}
						</Text>
						<Text
							style={{
								marginLeft: 15,
								marginTop: 5,
								fontSize: 14,
							}}>
							Mood: {yesMood}
						</Text>
						<Text
							style={{
								color: Colors.dark,
								fontSize: 20,
								margin: 15,
							}}>
							{yesHoroscopes}
						</Text>
					</View>
					<View></View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Horoscope;

const styles = StyleSheet.create({
	imageContainer: {
		flex: 0.5,
		marginTop: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	horoscopeContainer: {
		backgroundColor: 'lightgrey',
		borderRadius: 20,
		margin: 18,
	},
});
