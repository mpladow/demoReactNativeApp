import React, { useContext, useEffect, useState } from 'react';
import {SafeAreaView,  View, FlatList, Pressable, Text, StyleSheet } from 'react-native';
import mobStyles from '../../Styles/styles';
import webStyles from '../../Styles/webStyles';
import PlatformContext from '../../Contexts/PlatformContext';
import ButtonLarge from '../../Components/Buttons/ButtonLarge';
import { useNavigation } from '@react-navigation/native';

const LearnHome = () => {
    // hook to use the navigation property from the parent nav container
    const nav = useNavigation();
    // used to get 'global' state properties related to the platform
    const context = useContext(PlatformContext);

    // state to store package list. 
    const [packageList, setPackageList] = useState<PackageDto[]>([] as PackageDto[])

    const getPackages = () => {
        // use service to call api 
        let package1: PackageDto = { PackageResultId: 1, Name: "Safety", Description: 'This package has been completed and styled accordingly', Completed: false, EnforceOrder: false, CertificateId: 1, Started: false, Failed: false }
        let package2: PackageDto = { PackageResultId: 2, Name: "Registration", Description: 'This description will be cut off by an ellipsis once it reaches TWO lines. This description will be cut off by an ellipsis once it reaches TWO lines. This description will be cut off by an ellipsis once it reaches TWO lines.', Completed: false, EnforceOrder: false, CertificateId: 1, Started: false, Failed: false }
        let package3: PackageDto = { PackageResultId: 3, Name: "Induction", Description: 'Description', Completed: false, EnforceOrder: false, CertificateId: 1, Started: false, Failed: false }
        let res = [package1, package2, package3];

        setPackageList(res)
    }

    // button handlers
    const onTrainingPressHandler = () => {
        alert("navigate to page that contains only training pages")
    }

    const onResourcesPressHandler = () => {
        alert("navigate to resources page")
    }

    // run when the page is loaded up for the first time
    useEffect(() => {
        getPackages();
        return () => {
            //
        }
    }, [])

    const onPackagePressHandler = (item: PackageDto) => {
        console.log(item.PackageResultId);
        nav.navigate("LearnContent", {id: item.PackageResultId})
    }
    // const {contentId, question, questionTypequestionAnswers: [{}]
    return (
        <SafeAreaView style={context.web ? webStyles.container : mobStyles.container}>
            {/*button container component*/}
            <View style={mobStyles.buttonsGroupLarge} >
                <ButtonLarge
                    title="Training"
                    description="Complete your assigned learning"
                    onPress={onTrainingPressHandler}
                />
                <ButtonLarge
                    title="Resources"
                    description="Company documents and policies"
                    onPress={onResourcesPressHandler}
                />
            </View>
            {/*list component -- this will be seperated into its own component*/}
            <View style={styles.pageSectionBottom}>
                <View style={{marginTop: 8, marginBottom: 8}}>
                    <Text style={mobStyles.headingLarge}>Incomplete Training (Flatlist)</Text>
                </View>
                <View style={mobStyles.list}>
                    <FlatList
                        style={{ height: '100%' }}
                        data={packageList}
                        keyExtractor={(item, index) => item.PackageResultId.toString()}
                        renderItem={
                            ({ item }) => (
                                <Pressable
                                    style={[mobStyles.listItem, item.Completed ? mobStyles.listItemUnstyled : mobStyles.listItemUnread]}
                                    onPress={() => onPackagePressHandler(item)}
                                >
                                    <View style={styles.innerContainer}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={[mobStyles.headingMed, { flex: 1 }]} >{item.Name}</Text>
                                            <Text style={{ fontSize: 10, textTransform: 'uppercase', opacity: .8 }}>12 days ago</Text>
                                        </View>
                                        <Text ellipsizeMode='tail'
                                            numberOfLines={2}>{item.Description}</Text>
                                    </View>
                                </Pressable>
                            )}
                    />
                </View>
            </View>
        </SafeAreaView >)
}

const styles = StyleSheet.create({
    pageSectionBottom: {
        flex: 4,
        flexDirection: 'column',
        width: '100%'
    },
    innerContainer: {
        height: '100%'
    }
})
export default LearnHome;

export type PackageDto = {
    PackageResultId: number,
    Name: string;
    Description: string;
    Completed: boolean;
    CertificateId: number;
    EnforceOrder: boolean;
    Started: boolean;
    Failed: boolean;
}

