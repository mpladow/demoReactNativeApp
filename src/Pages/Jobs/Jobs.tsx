import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, Modal, Pressable, StyleSheet, Platform } from 'react-native';
import mobStyles from '../../Styles/styles';
import { useAuth } from '../../Contexts/AuthContext';
import JobList from './JobList';

const Jobs = (props: any) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [reloadList, setReloadList] = useState(false)
    const [jobs, setJobs] = useState<JobListItem[]>([] as JobListItem[])
    const [jobLoading, setJobsLoading] = useState(false);


    const auth = useAuth();

    const onEmulateApiLoadingHandler = () => {
        getJobs();
    }

    const onListReloadedHandler = () => {
        setReloadList(false);
    }

    const getJobs = () => {
        setJobsLoading(true);
        setTimeout(() => {
            let job1 = { id: 1, name: "Job one", description: "description one" }
            let job2 = { id: 2, name: "Job two", description: "description two" }
            let res = [job1, job2]
            setJobs(res);
        }, 5000)
    }
    useEffect(() => {
        getJobs();
        return () => {
            setJobsLoading(false)
        }
    }, [])




    return (
        <View style={mobStyles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        {/* <Button title='Trigger loading of parent page' onPress={onEmulateApiLoadingHandler}></Button> */}
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View>
                <Text>User: </Text>
            </View>
            <Button title='Open Modal' onPress={() => setModalVisible(!modalVisible)} />
            <JobList jobs={jobs} loading={jobLoading}></JobList>
       </View >)

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default Jobs;

export type JobListItem = {
    id: number,
    name: string,
    description: string
}
