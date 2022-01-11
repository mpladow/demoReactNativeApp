import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const Radio = (props) => {
    // maps multiple options

    const [checked, setChecked] = useState(props.isChecked);

    const handleChecked = (e) => {
        setChecked(!checked);
    }

    useEffect(() => {
        console.log(props.isChecked, "INSIDE use effect")
        props.onChange({ 'name': props.name, 'checked': checked })
    }, [checked])


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={handleChecked } >{props.labelName}</Text>
            <TouchableOpacity onPress={handleChecked} >
                <View style={[{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: '#ddd',
                    alignItems: 'center',
                    justifyContent: 'center',
                }, props.style]}>
                    {
                        props.isChecked ?
                            <View style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#000',
                            }} />
                            : null
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Radio;