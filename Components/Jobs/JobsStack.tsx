import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Jobs from "./Jobs";


const JobsStack = () => {

    const JobsStack = createNativeStackNavigator();

    return (<JobsStack.Navigator screenOptions={{ headerTitleAlign: 'center'}}>
        <JobsStack.Screen name="Jobs" component={Jobs}></JobsStack.Screen>
    </JobsStack.Navigator>)

}

export default JobsStack;