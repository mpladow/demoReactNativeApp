import React from 'react'
import { Button } from 'react-native'
import UppyFilePicker from '@uppy/react-native';


export default function FileSelect(props) {

    const onClickUpload = () => {
    }

    return (
        <Button title='Upload this guy' onPress={onClickUpload} />
    )
}