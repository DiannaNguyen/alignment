import React from 'react';
import {
	View,
	SafeAreaView,
	Text,
	FlatList,
	Image,
	TouchableOpacity,
	StyleSheet,
    Dimensions
} from 'react-native';
import Colors from '../consts/colors';
import signsData from '../consts/signsData';
const width = Dimensions.get('window').width / 3 - 5;

const Home = ({ navigation }) => {
	const Container = ({signs}) => {
		return (
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() => navigation.navigate('Horoscope', signs)}>
				<View style={styles.container}>
					<View style={{ height: 100, alignItems: 'center'}}>
						<Image
							source={signs.img}
							style={{ flex: 1, resizeMode: 'contain'}}
						/>
					</View>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 18,
							marginTop: 10,

                            color: Colors.dark,
						}}>
						{signs.zodiac}
					</Text>
					<View style={{ marginTop: 5, paddingBottom: 10 }}>
						<Text style={{ fontSize: 14, color: Colors.dark }}>{signs.date}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};
	return (
		<SafeAreaView style={{flex: 1, paddingHorizontal: 10, backgroundColor: Colors.light}}>
			<View style={styles.header}>
				<Text
					style={{
						fontSize: 22,
						color: Colors.white,
						fontWeight: 'bold',
						padding: 10,
                        marginTop: 5,
					}}>
					What is written in the stars today?
				</Text>
			</View>
			<FlatList
				columnWrapperStyle={{ justifyContent: 'space-between' }}
				numColumns={3}
				data={signsData}
				renderItem={({ item }) => {
					return <Container signs={item} />;
				}}
			/>
            <View style={styles.footer}>
                <Text style={{color: Colors.dark, fontSize: 12}}>Zodiac Images Designed by Lilla Bardenova via Dribbble</Text>
            </View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,
        alignItems: 'center',
        width,
        padding: 8,
    },
    header: {
        alignItems: 'center',
    },
    footer: {
        alignItems: 'center',
    }
});

export default Home;
