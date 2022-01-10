import { useController, useForm } from 'react-hook-form';
import { ImageBackground, Switch, StyleSheet, Text, View, Button, Image, ScrollView, TextInput } from 'react-native';
import globalStyles from '../../../Styles/styles';


const CSwitch = (props: any) => {

    return (
        <View>
            <Text>{ props.labelText}</Text>
            <Switch
                {...props}
            />
            {props.errorText && (
                <Text style={styles.error}>{props.errorText}</Text>
            )}
        </View>
    )
}

export default CSwitch;

const styles = StyleSheet.create({
    error: {
        color: 'red',
        borderColor: 'red'
    },
    errorText: {
        color: 'red',
    }
})