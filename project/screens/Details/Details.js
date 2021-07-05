import * as React from 'react'
import { View, Text,Image,SafeAreaView } from 'react-native'
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';
import {commonStyle} from '../Common/style'
const Details = (props,route, navigation) => {
   
    const data  = props.route.params.data
    const renderVideo =() => {
        return <WebView source={{ uri: data.previewUrl }} />
    }
    const renderContent =() => {
        return <View>
                    <View style={[commonStyle.fextRow,commonStyle.paddingFive]}>
                        <Text style={commonStyle.fontWeightBold}>Artist Name : </Text>
                        <Text>{data.artistName}</Text>
                    </View> 
                    <View style={[commonStyle.fextRow,commonStyle.paddingFive]}>
                        <Text style={commonStyle.fontWeightBold}>Collectio Name : </Text>
                        <Text>{data.collectionName}</Text>
                    </View> 
                    <View style={[commonStyle.fextRow,commonStyle.paddingFive]}>
                        <Text  style={commonStyle.fontWeightBold}>Track Name : </Text>
                        <Text>{data.trackName}</Text>
                    </View> 
                    <View style={commonStyle.paddingFive}>
                        <Text style={commonStyle.fontWeightBold}>Description : </Text>
                        <Text>{data.longDescription}</Text>
                    </View> 
               </View>
    }
    return(
        <SafeAreaView style={{ flex: 1,padding:10 }}>
            {renderVideo()}
            {renderContent()}
        </SafeAreaView>
    )
}

export default Details