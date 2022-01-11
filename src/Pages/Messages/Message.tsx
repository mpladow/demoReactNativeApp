import { useState, useEffect, useContext } from "react";
import { SafeAreaView, Text } from "react-native";
import { Message as MessageType} from "../../Definitions/types";
import PlatformContext from "../../Contexts/PlatformContext";
import webStyles from "../../Styles/webStyles";
import appStyles from '../../Styles/styles';

const Message = (props:any) => {

    const platformContext = useContext(PlatformContext);
    const [message, setMessage] = useState<MessageType>({} as MessageType)

    useEffect(() => {
        let id = props.route.params['id'];
        // make API call, we can use Fetch API or Axios API to make api calls
        // fetch('http://api.com.au/{id}')

        let res: MessageType = { id: id, title: `Message title with id of ${id}`, message: 'Message description' }
        setMessage(res);
    }, [])

    return (<SafeAreaView style={platformContext.web ? webStyles.container : appStyles.container}>
        <Text style={appStyles.textLarge}>{message.title}</Text>
        <Text>{message.message}</Text>
    </SafeAreaView>)
}
export default Message;

