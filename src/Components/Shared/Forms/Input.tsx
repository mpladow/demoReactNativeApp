import { useController, useForm } from 'react-hook-form';
import { ImageBackground, StyleSheet, Text, View, Button, Image, ScrollView, TextInput } from 'react-native';
import mobStyles from '../../../Styles/styles'


const Input = (props: any) => {
    return (
        <View style={styles.inputContainer}>
            {props.showLabel && <Text>{props.labelName}</Text>}
            <TextInput secureTextEntry={props.isPassword && true} style={[mobStyles.cInput, props.error && styles.error, props.style]} {...props}
            />
            {props.errorText && (
                <Text style={[styles.error, {marginTop: 4, marginBottom: 4}]}>{props.errorText}</Text>
            )}
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
width: '100%'
    },
    error: {
        color: 'red',
        borderColor: 'red'
    },
    errorText: {
        color: 'red',
    }
})