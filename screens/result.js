import react from "react";
import { Image,StyleSheet,Text,View } from "react-native";
import { TouchableOpacity } from "react-native";
import Title from "../components/title";

const Result = ({ navigation, route }) => {
    const {score} = route.params

    return (
     <View style={styles.container}>
            <Title titleText='RESULTS' />
            <Text style={styles.scoreText}>{score }</Text>
            <View style={styles.bannerContainer}>
                <Image source={require('../assets/Timeline-pana.png')}
                    style={styles.banner}
                    resizeMode="contain" 
                />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
};



export default Result

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    button: {
        width: '100%',
        backgroundColor: '#1A759F',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
    scoreText: {
        fontSize: 24,
        fontWeight: '800',
        alignSelf: 'center',
    }
})
