import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from './Checkbox';
import Radio from './Radio';

const CheckboxGroup = ({ options, control, name, labelName, row }) => {

    const { field } = useController({
        control, name
    })
    const [value, setValue] = useState(field.value || []);

    const changeCheckboxHandler = (result, item, index) => {
        console.log(result.name, 'name');
        console.log(result.checked, 'checked');
        console.log(item);

        const valueCopy = [...value];

        // update checkbox value
        valueCopy[index] = result.checked ? result.name : null;

        // send data to react hook form
        field.onChange(valueCopy);

        // update local state
        setValue(valueCopy);
    };
    return (
        <View>
            <Text>{labelName}</Text>
            <View style={row === true ? styles.groupRow : styles.groupColumn}>
                {options.map((item, index) => {
                    return (
                        <View style={styles.rowItem}>
                            <Checkbox onChange={(result, item) => changeCheckboxHandler(result, item, index)}
                                labelName={item}
                                name={item} />
                        </View>
                    )

                })}
            </View>
        </View>
    )
}

export default CheckboxGroup;

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