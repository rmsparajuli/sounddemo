import {
    StyleSheet
} from 'react-native'
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#99AAAB"

    },
    _forText: {
        fontSize:28,
        fontWeight:'bold',
    },
    _forButton: {
        
        // backgroundColor:selectColors[1],
        borderWidth:1,
        borderColor:'blue',
        justifyContent:'center',
        alignItems:"center",
        width:'50%',
        height:100,
        padding:1

    },
    _insideContainer:{
        flexWrap:'wrap',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'blue',
        borderRadius:10,
        margin:2
        

    }

})