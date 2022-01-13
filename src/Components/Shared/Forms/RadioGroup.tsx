import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { View, Text, StyleSheet } from 'react-native';
import Radio from './Radio';

const RadioGroup = ({ options, control, name, labelName, row }) => {

    const { field } = useController({
        control, name
    })
    const [selectedValue, setSelectedValue] = useState(0);

    const changeRadioHandler = (item) => {
        // this assumes the value returned is a string/number

        // send data to react hook form
        field.onChange(item);

        // update local state
        setSelectedValue(item);
    };
    return (
        <View>
            <Text>{labelName}</Text>
            <View style={row === true ? styles.groupRow : styles.groupColumn}>
                {options.map((item, index) => {
                    let isChecked = selectedValue == item ? true : false
                    console.log(isChecked, "is it checked?")
                    return (
                        <View style={styles.rowItem}>
                            <Radio onChange={() => changeRadioHandler(item)}
                                labelName={item}
                                name={item}
                                isChecked={isChecked} />
                        </View>
                    )

                })}
            </View>
        </View>
    )
}

export default RadioGroup;

const styles = StyleSheet.create({
    groupRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowItem: {
        paddingRight: 8
    },
    groupColumn: {
        flexDirection: 'column'

    }

})