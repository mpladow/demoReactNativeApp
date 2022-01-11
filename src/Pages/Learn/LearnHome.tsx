import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import styles from '../../Styles/styles';
import webStyles from '../../Styles/webStyles';
import PlatformContext from '../../Contexts/PlatformContext';

const LearnHome = () => {
    const context = useContext(PlatformContext);
    return (
        <SafeAreaView style={context.web ? webStyles.container : styles.container}>
            <View>Learn Home View</View>
        </SafeAreaView>)
}

export default LearnHome;

