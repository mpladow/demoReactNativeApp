import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import LearnQuestionContainer, { Question } from './LearnQuestionContainer';

const LearnContent = (props: any) => {
    const nav = useNavigation();

    const [content, setContent] = useState<Content>({} as Content)
    const [questions, setQuestions] = useState<Question[]>([] as Question[]);
    const [nextEnabled, setNextEnabled] = useState(true);
    const [showPrevious, setShowPrevious] = useState(true);
    const [isPreview, setIsPreview] = useState(false)


    // DEBUGGING TO EMULATE GETTING THE NEXT CONTENT
    const [currentId, setCurrentId] = useState(1)


    useEffect(() => {
        // get content from API
        GetContent(currentId);
        // hide Previous button if necessary
        //
    }, [])

    const onNextHandler = () => {
        setCurrentId(2);
        GetContent(currentId)
    }
    const onPreviousPressHandler = () => {
        // if allowed to go back
        // if this is the root page, d
    }

    const GetContent = (contentId: number) => {
        setTimeout(() => {
            let content: Content = {
                ContentId: contentId,
                Name: 'Page one of Content',
                Html: 'This is html that will be rendered using WebView.',
                ShowResult: false,
                HasQuestions: false,
                IsMeasurable: false,
                TimeDelay: 0,
                Sequence: 0
            }
            setContent(content);
        }, 3000)
    }

    const getQuestions = () => {

    }

    return (
        <View>
            <View>
                <Text>{content.Html}</Text>
                {content.HasQuestions && <LearnQuestionContainer questions={questions} />}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
                    <Button title='Previous' onPress={onPreviousPressHandler}></Button>
                    <Button title='Next' onPress={onNextHandler}></Button>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({})

export default LearnContent;

export type Content = {
    ContentId: number;
    Name: string;
    Html: string;
    ShowResult: boolean;
    HasQuestions: boolean;
    IsMeasurable: boolean;
    TimeDelay: number;
    Sequence: number;
}