import React, { useEffect } from 'react'
import { View, ImageBackground } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
const SplashScreenFirst = (props) => {
    useEffect(() => {
        setTimeout(async()=>{
             props.navigation.navigate('Home')
        }, 3000)
      }, [])
    return(
        <View style={{flex : 1,flexDirection : 'column'}}>
            <ImageBackground
                    source={require('../../assets/splash-screen-background.jpg')}
                    style={{flex : 1,flexDirection : 'column',justifyContent : 'center',alignItems : 'center'}}
                >
                <ActivityIndicator animating={true} color={'#000'} size={'small'} style={{position : 'absolute',bottom : 10}} />
            </ImageBackground>
        </View>
    )
}

export {SplashScreenFirst}