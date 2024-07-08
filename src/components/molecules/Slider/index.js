import { View } from 'react-native'
import React from 'react'

import { SliderBox } from "react-native-image-slider-box";

const Slider = () => {

    const images = [
    require('../../../assets/sliderImg/slider1.jpg'),
    require('../../../assets/sliderImg/sliderr2.jpg'),
    require('../../../assets/sliderImg/slider3.jpg'),
    require('../../../assets/sliderImg/sliderr4.jpg'),
    require('../../../assets/sliderImg/slider5.jpg'),
    ]
    const style = ({
        position : "absolute",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        paddingVertical: 10
    })
    
    return (
        <View>
            <SliderBox
                images={images}
                sliderBoxHeight={200}
                dotColor = '#FFD400'
                autoplay = {true}
                autoplayInterval = {2000}
                // circleLoop
                paginationBoxStyle = {style}
                onCurrentImagePressed={index =>
                    console.warn(`image ${index} pressed`)
                }
                ImageComponentStyle={{borderRadius: 15, width: '90%'}}
            />
        </View>
    );
}

export default Slider;