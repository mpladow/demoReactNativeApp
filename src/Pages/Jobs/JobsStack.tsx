import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Jobs from "./Jobs";
import { Pressable, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileModal from "../Profile/ProfileModal";


const JobsStack = () => {
    const nav = useNavigation();
    const JobsStack = createNativeStackNavigator();

    return (<JobsStack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerShown: true,
        headerRight: () => (
            <Pressable onPress={() => { nav.navigate('Profile') }}>
                <View style={styles.icon}></View>
            </Pressable>)
    }}>
        <JobsStack.Screen name="Jobs" component={Jobs}></JobsStack.Screen>
        <JobsStack.Screen name='Profile' component={ProfileModal} />

    </JobsStack.Navigator>)

}

export default JobsStack;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    icon: {
        backgroundColor: 'green', width: 35, height: 35, marginRight: 12, borderRadius: 25
    }
});