import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileModal from "../Profile/ProfileModal";
import Message from "./Message";
import MessageList from "./MessageList";

const MessageListStack = () => {

    const MessageListStack = createNativeStackNavigator();

    return (<MessageListStack.Navigator screenOptions={{
        headerTitleAlign: 'center'
    }}>
        <MessageListStack.Screen name="MessageList" component={MessageList}></MessageListStack.Screen>
        <MessageListStack.Screen name='Message' component={Message}></MessageListStack.Screen>

        <MessageListStack.Screen name='Profile' component={ProfileModal} />
    </MessageListStack.Navigator>)

}

export default MessageListStack;