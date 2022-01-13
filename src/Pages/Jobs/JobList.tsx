import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import ListItem from '../../Components/Lists/ListItem'

const JobList = (props) => {
    const [loading, setLoading] = useState<boolean>(props.loading as boolean)
  

    // const triggerGetJobs = () => {
    //     if (props.reloadList) {
    //         getJobs();
    //     }
    // }
    const onJobPressedHandler = (id) => {
        alert(`job pressed for job id${id} `)
    }
    useEffect(() => {
        setLoading(false)
        // call api
        console.log("useEffect hit")

        return () => {
            // setLoading to false
            console.log('setloading to false')
            setLoading(false)
        }
    }, [])
    return (
        <>
            {
                loading ? <View 
                style={{ backgroundColor: 'green', height: '100%', width: '100%', flexDirection: 'column', alignItems: 'center',justifyContent: 'center', flex: 1 }}>
                    <Text>LOADING</Text>
                    </View> :
                    <View>
                        <FlatList data={props.jobs}
                            keyExtractor={(item, index) => item.id.toString()}
                            renderItem={({ item }) => (
                                <Pressable onPress={(id) => onJobPressedHandler(item.id)}>
                                    <View>
                                        <Text>{item.name}</Text>
                                        <Text>{item.description}</Text>
                                    </View>
                                </Pressable>
                            )} />
                    </View>
            }
        </>


    )
}


export default JobList

const styles = StyleSheet.create({})
