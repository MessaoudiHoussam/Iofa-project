import React, {useState, useEffect, useRef} from 'react'
import { StyleSheet, Text, View, TextInput, Animated} from 'react-native'
import  Svg, { Text as TextSvg ,G, Line, Circle, Path, Rect} from 'react-native-svg';


const DonutChartComponentR_N_S = ({

    percentageDonutChart  = 100 ,
    radiusDonutChart  = 40 ,
    strokeWidthDonutChart = 11,
    durationDonutChart = 500, 
    colorDonutChart = "tomato",
    delayDonutChart= 0,
    textColorDonutChart= 'black',
    maxDonutChart = 120



}) => {
    const circleRefDountChart = React.useRef<Text>();
    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);


    {/*const percentageDonutChart  = 100   // max value to this 
    const radiusDonutChart  = 80
    const strokeWidthDonutChart = 11
    const durationDonutChart = 500
    const colorDonutChart = "tomato"
    const delayDonutChart= 0
    const textColorDonutChart= 'black'
    const maxDonutChart = 120*/}

    const animatedDonutChart = React.useRef(new Animated.Value(0)).current;
    const circleRefDonutChart = React.useRef<Text>();
    const inputRefDonutChart = React.useRef<TextInput>();
    const circumference = 2 * Math.PI * radiusDonutChart;
    const circleCircumferenceDountChartOriginall = 2 * Math.PI * radiusDonutChart

    const halfCircle = radiusDonutChart + strokeWidthDonutChart;



    const animation = (toValue) => {
        return Animated.timing(animatedDonutChart, {
          delay: 1000,
          toValue,
          duration : durationDonutChart,
          useNativeDriver: true,
        }).start(() => {
          animation(toValue === 0 ? percentageDonutChart : 0);
        });
      };

    React.useEffect(() => {
        animation(percentageDonutChart);
        animatedDonutChart.addListener((v) => {
          const maxPerc = 100 * v.value / maxDonutChart;
          const strokeDashoffset = circumference - (circumference * maxPerc) / 100;

          if (inputRefDonutChart?.current) {
            inputRefDonutChart.current.setNativeProps({
              text: `${Math.round(v.value)}%`,
            });
          }
         
          if (circleRefDonutChart?.current) {
            circleRefDonutChart.current.setNativeProps({
              strokeDashoffset,
            });
          }
        });
    
        return () => {
            animatedDonutChart.removeAllListeners();
        };
    });

    return (
       
           
        <View style ={styles.DanutChartSvgContainer}>
        <Svg
            height={radiusDonutChart * 2}
            width={radiusDonutChart * 2}
            viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
            <G
            rotation="-240"
            origin={`${halfCircle}, ${halfCircle}`}>
            <Circle
                ref={circleRefDonutChart}
                cx="27%"
                cy="25%"
                r={radiusDonutChart}
                fill="transparent"
                stroke={colorDonutChart}
                strokeWidth={strokeWidthDonutChart}
                strokeLinecap="round"
                strokeDashoffset={circumference}
                strokeDasharray={circumference}
            />
            <Circle
               cx="27%"
               cy="25%"
                r={radiusDonutChart}
                fill="transparent"
                stroke={colorDonutChart}
                strokeWidth={strokeWidthDonutChart }
                strokeDashoffset={circleCircumferenceDountChartOriginall /7}
                strokeDasharray={circleCircumferenceDountChartOriginall }
                strokeLinecap="round"


                strokeLinejoin="round"
                strokeOpacity=".3"
            />
            </G>
        </Svg>
       
        <AnimatedTextInput
            ref={inputRefDonutChart}
            underlineColorAndroid="transparent"
            editable={false}
            defaultValue="0"
            style={[
            StyleSheet.absoluteFillObject,
            { fontSize: radiusDonutChart / 2, color:colorDonutChart },
            styles.TextValueDonutChart,
            ]}
         />

</View>
    )
}

export default DonutChartComponentR_N_S

const styles = StyleSheet.create({



    DanutChartSvgContainer : {

    },


    
    TextValueDonutChart: { 
        fontWeight: '900',
        marginLeft : 30
    
    },

})
