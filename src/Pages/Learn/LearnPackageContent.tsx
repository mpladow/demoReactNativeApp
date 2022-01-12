import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function LearnPackageContent() {
    const [question, setQuestion] = useState();
    const [answers, setAnswers] = useState();

    useEffect(() => {
        // get question from API
        // 
        setQuestion("This is a question");
    }, [])

    const updateQuestionHandler = () => {
        setQuestion()
    }
    
    return (
        <View>
            <Text>This is the content</Text>
            <Button onPress={updateQuestionHandler}>Update question</Button>
        </View>
    )
}

const styles = StyleSheet.create({})
