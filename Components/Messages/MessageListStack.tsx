import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MessageList from "./MessageList";
import Message from "./Message";

const MessageListStack = () => {

    const MessageListStack = createNativeStackNavigator();

    return (<MessageListStack.Navigator screenOptions={{
        headerTitleAlign: 'center',
    }}>
        <MessageListStack.Screen name="MessageList" component={MessageList}></MessageListStack.Screen>
        <MessageListStack.Screen name='Message' component={Message}></MessageListStack.Screen>
    </MessageListStack.Navigator>)

}

export default MessageListStack;