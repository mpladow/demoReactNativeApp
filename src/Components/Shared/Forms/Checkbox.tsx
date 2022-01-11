import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const Checkbox = (props) => {
    // maps multiple options
    const [checked, setChecked] = useState(false);

    const handleChecked = (e) => {
        setChecked(!checked);
    }

    useEffect(() => {
        props.onChange({ 'name': props.name, 'checked': checked })
    }, [checked])


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={handleChecked } >{props.labelName}</Text>
            <TouchableOpacity onPress={handleChecked} >
                <View style={[{
                    height: 24,
                    width: 24,
                    borderRadius: 0,
                    borderWidth: 2,
                    borderColor: '#ddd',
                    alignItems: 'center',
                    justifyContent: 'center',
                }, props.style]}>
                    {
                        checked ?
                            <View style={{
                                height: 12,
                                width: 12,
                                borderRadius: 0,
                                backgroundColor: '#000',
                            }} />
                            : null
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Checkbox;