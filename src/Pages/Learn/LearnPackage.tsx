import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LearnPackageContent from './LearnPackageContent'

export default function LearnPackage() {
    const [contentList, setContentList] = useState([])

    const getPackage = () => {
        
    }
    return (
        <View>
        </View>
    )
}

const styles = StyleSheet.create({})

type Content = {
    Id: number;
    Html: string
}
