import { useController, useForm } from 'react-hook-form';
import { ImageBackground, StyleSheet, Text, View, Button, Image, ScrollView, TextInput } from 'react-native';
import globalStyles from '../styles';


const Input = (props: any) => {

    return (
        <>
            {props.showLabel && <Text>{props.labelName}</Text>}
            
            <TextInput style={[globalStyles.cInput, props.error && styles.error, props.style]} {...props}
            />
            {props.errorText && (
                <Text style={styles.error}>{props.errorText}</Text>
            )}
        </>

    )
}

export default Input;

const styles = StyleSheet.create({
    error: {
        color: 'red',
        borderColor: 'red'
    }, 
    errorText: {
        color: 'red',
    }
})