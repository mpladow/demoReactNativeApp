import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LearnQuestionContainer = (props) => {
    const [questions, setQuestions] = useState<Question[]>(props.questions as Question[]);

    const getQuestions = () => {
        // get Questions API
        let q1: Question = {
            QuestionId: 1,
            ParentId: 0,
            Name: 'Question 1',
            Html: 'This is a basic Text Input question',
            Text: 'text',
            Type: '',
            Page: 0,
            Required: true,
            ConfirmQuestionId: 0,
            ConfirmQuestionValue: '',
            RequiredQuestionId: 0,
            RequiredQuestionValue: '',
            ValidationId: 0,
            ValidationMin: 0,
            ValidationMax: 0,
            RandomiseAnswers: false,
            Answers: [],
            NumberOfCorrect: 0,
            AnsweredCorrectly: false
        }
        let q2: Question = {
            QuestionId: 1,
            ParentId: 0,
            Name: 'Question 2',
            Html: 'Another input question',
            Text: 'text',
            Type: '',
            Page: 0,
            Required: false,
            ConfirmQuestionId: 0,
            ConfirmQuestionValue: '',
            RequiredQuestionId: 0,
            RequiredQuestionValue: '',
            ValidationId: 0,
            ValidationMin: 0,
            ValidationMax: 0,
            RandomiseAnswers: false,
            Answers: [],
            NumberOfCorrect: 0,
            AnsweredCorrectly: false
        }
        let res = [q1, q2];

        setQuestions(res);
    }
    useEffect(() => {
        getQuestions();
    }, [])

    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default LearnQuestionContainer

const styles = StyleSheet.create({})

export type Question = {
    QuestionId: number;
    ParentId: number;
    Name: string;
    Html: string;
    Text: string;
    Type: string;
    Page: number;
    Required: boolean;
    ConfirmQuestionId: number;
    ConfirmQuestionValue: string;
    RequiredQuestionId: number;
    RequiredQuestionValue: string;
    ValidationId: number;
    ValidationMin: number;
    ValidationMax: number;
    RandomiseAnswers: boolean;
    Answers: Array<Answer>;
    NumberOfCorrect: number;
    AnsweredCorrectly: boolean;
}

export type Answer = {
    QuestionId: number;
    Value: string;
    Text: string;
    AnswerId: number;
    Type: string
}
