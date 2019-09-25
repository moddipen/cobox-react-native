import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewround: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    viewroundtextstyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14 - 2,
        lineHeight: 14 - (Platform.OS === 'ios' ? 2 * 0 : 0),
    },
    textwallet: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },
    checkboxst :{
        width: 100,
        height: 50,
    }
});

export default styles;