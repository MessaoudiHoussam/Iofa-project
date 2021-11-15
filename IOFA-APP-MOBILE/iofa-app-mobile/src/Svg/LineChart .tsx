import React, {useState, useEffect, useRef} from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Animated, FlatList, 
        TouchableWithoutFeedback, TextInput, TouchableOpacity, ScrollView} from 'react-native'

import  Svg, { Text as TextSvg ,G, Line, Circle, Path, Rect} from 'react-native-svg';

//import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../depen/Colors';


const LineChart  = ({
    CharpSvgColor,
    CharpSvgVerticalLinesColor,
    CharpSvgPointsColor, 
    CharpSvgPointsLnesColor, 
    LineCharpData



}) => {

    const [yAxisLabels, setYAxisLabels ] = useState([]);


    useEffect(() => {
        
        const yLineLabels = LineCharpData.map((item, index) => {
            if (index ===0 ) {
                return Y_Min_Value
            }else {
           
              return  Math.floor(Y_Min_Value + gabBetweenYaxValues * index);
            }
        })
        setYAxisLabels(yLineLabels)
      }, [])

    
   

    


    const x_axis_X1_point = 40
    const x_axis_Y1_point = 250
    const x_axis_X2_point = 440
    const x_axis_Y2_point = 250


    const y_axis_X1_point = 40
    const y_axis_Y1_point = 250
    const y_axis_X2_point = 40
    const y_axis_Y2_point = 10


    const AnimatedLine = Animated.createAnimatedComponent(Line)
    const AnimatedCircle = Animated.createAnimatedComponent(Circle)
    const AnimatedSvg = Animated.createAnimatedComponent(Svg)

    const Animated_x_axis_width = useRef(new Animated.Value(x_axis_X1_point)).current;
    const Animated_y_axis_width = useRef(new Animated.Value(y_axis_Y1_point)).current;
    const Animated_Circle_Radius = useRef(new Animated.Value(0), ).current;

    useEffect(() => {
        
        start_X_Y_axis_Animation();
        start_axis_Circle_Animation();
    }, [])

    const  start_X_Y_axis_Animation = () => {
        Animated.timing(Animated_x_axis_width,{
            toValue : x_axis_X2_point,
            duration : 4500,
            useNativeDriver : true,
        }).start();
        Animated.timing(Animated_y_axis_width,{
            toValue : y_axis_Y2_point,
            duration : 4500,
            useNativeDriver : true,
        }).start();
    };

    const  start_axis_Circle_Animation = () => {
        Animated.timing(Animated_Circle_Radius ,{
            toValue : 5,
            duration : 4500,
            useNativeDriver : true,
        }).start();
        
    };

    const  render_X_Y_axis = () => {
        return (
            <G key='x-axis y-axis'>
               

                <AnimatedLine
                    key='x-axis'
                    x1={x_axis_X1_point}
                    y1={x_axis_Y1_point}
                    x2={Animated_x_axis_width}
                    y2={x_axis_Y2_point}
                    stroke={CharpSvgColor}
                    strokeWidth={5}
                />

                 <AnimatedLine
                    key='y-axis'
                    x1={y_axis_X1_point}
                    y1={Animated_y_axis_width}
                    x2={y_axis_X2_point}
                    y2={250}
                    stroke={CharpSvgColor}
                    strokeWidth={5}
                />

               

                <Rect
                 key='x-axis x1y2-circle'
                 x= {y_axis_X1_point -8}
                 y= {y_axis_Y2_point }
                 width = {16}
                 height = {4}
                 fill= {CharpSvgColor}
                 rx ={2}
                 />

                <AnimatedCircle
                 key='x-axis x1y1-circle '
                 cx= {x_axis_X1_point}
                 cy= {x_axis_Y1_point}
                 fill = {CharpSvgColor}
                 r = {Animated_Circle_Radius}
                 
                />
                
                <AnimatedCircle
                 key='x-axis x2y2-circle'
                 cx= {x_axis_X2_point}
                 cy= {x_axis_Y2_point}
                 fill = 'red'
                 r = {Animated_Circle_Radius}
                />

              
                

                
            </G>
        )
    }

    const render_X_Labels_Tricks =() => {
        return LineCharpData.map((item, indexI) => {
            return (
                <G
                 key = {`x-axis labels Ticks ${item} ${indexI}`}>
                    <Line
                     key = 'x-axis-Ticks'
                     x1={x_axis_X1_point +22 +(30 * indexI)}
                     y1={x_axis_Y1_point }
                     x2={x_axis_X1_point +22 +(30 * indexI) }
                     y2={x_axis_Y1_point+10}
                     stroke={CharpSvgColor}
                     strokeWidth={3}>
    
    
                    </Line>
                    <TextSvg
                      x={x_axis_X1_point +22 +(30 * indexI)}
                      y={x_axis_Y1_point + 20}
                      fill={CharpSvgColor}
                      textAnchor='middle'
                    >
                        {item.month}
                   </TextSvg>
                </G>
            )
    
        })

       
    } 

    const Y_Min_Value = 0;
    const Y_Max_Value = Math.max.apply(Math, LineCharpData.map((item) => item.value));
    const Gap_Between_Y_Labels_Tricks = (Y_Max_Value -  Y_Min_Value) / 9

    const gabBetweenYaxValues = (Y_Max_Value - Y_Min_Value) / 11



    const render_Y_Labels_Tricks =() => {

       return yAxisLabels.map((item, index) => {
            return (
                <G
                 key = {`y-axis labels Ticks ${item} ${index}`}>

                      <Line
                     key = {`y-axis Ticks vertical-line ${item} ${index}`}
                     x1={x_axis_X1_point + 1000} //End  
                     y1={230 - ( ((Gap_Between_Y_Labels_Tricks -5 )*index))}
                     x2={x_axis_X1_point+5 }
                     y2={230 - ( ((Gap_Between_Y_Labels_Tricks -5 )*index))}
                     stroke= {CharpSvgVerticalLinesColor}
                     strokeWidth={3}>
    
    
                    </Line>

                    <Line
                     key = {`y-axis Ticks ${item} ${index}`}
                     x1={x_axis_X1_point -7}
                     y1={230 - ( ((Gap_Between_Y_Labels_Tricks -5 )*index))}
                     x2={x_axis_X1_point+2 }
                     y2={230 - ( ((Gap_Between_Y_Labels_Tricks -5 )*index))}
                     stroke={CharpSvgColor}
                     strokeWidth={3}>
    
    
                    </Line>

                    

                    <TextSvg
                      x={x_axis_X1_point -24}
                      y={232 - ( ((Gap_Between_Y_Labels_Tricks -5 )*index))}
                      fill={CharpSvgColor}
                      textAnchor='middle'
                      fontSize = '14'
                      fontWeight  ='700'
                    >
                        {item}
                   </TextSvg>
                   
                </G>
            )
        })

      

    }

    const getDataAxPath = () => {
        const MaxValueInYax = yAxisLabels[ yAxisLabels.length - 1]
        if (MaxValueInYax) {
            let d = ''
            LineCharpData.map((item,index)=> {
              let xPointInside = x_axis_X1_point +22+ (30 * index)
  
              let yPointInside = (MaxValueInYax - item.value)
                                  *(Gap_Between_Y_Labels_Tricks / 30) +45
              if (index  === 0 ) {
                  d+= `M${xPointInside} ${yPointInside}`
              }else {
                  d+= `L${xPointInside} ${yPointInside}`
              }
          } )

          return d

        }          
    }

    const render_Graph_Path = () => {
        const dPath = getDataAxPath()
         return (
            <Path
            d= {dPath}
            strokeWidth = {2.5}
            stroke = {CharpSvgPointsLnesColor}

            />
        )
    }
    

    const render_Graph_Path_Cercles = () => {
        const MaxValueInYax = yAxisLabels[ yAxisLabels.length - 1]
        if (MaxValueInYax) {
            
           return LineCharpData.map((item,index)=> {
              let xPointInside = x_axis_X1_point +22+ (30 * index)
  
              let yPointInside = (MaxValueInYax - item.value)
                                  *(Gap_Between_Y_Labels_Tricks / 30) +45

            return (
               

                <G
                key ={`Linear chart G Circles ${index}`}
                >
                     <Rect
                 key='x-axis x2y2-circle'
                 x= {xPointInside -4}
                 y= {yPointInside -4}
                 width = {9}
                 height = {9}
                 fill= {CharpSvgPointsColor}
                 rx ={2}
                 />
                     
                </G>
            )
             
          } )


        }   
    }




    return (
        <ScrollView horizontal>
                <TouchableWithoutFeedback>
                
                <Svg height="300" width="450" style={styles.GrapgContainerSvg}>
                    {
                        render_X_Y_axis()
                    }
                    {
                        render_X_Labels_Tricks()
                    }

                    {
                        render_Y_Labels_Tricks()
                    }

                    { 
                        render_Graph_Path()
                    }
                    { 
                        render_Graph_Path_Cercles()
                    }

                    

                </Svg>

                </TouchableWithoutFeedback>

                </ScrollView>
    )
}

export default LineChart 

const styles = StyleSheet.create({
    
    GrapgContainerSvg : {
        backgroundColor: Colors.light,
        borderRadius :10,
        padding : 10,
        paddingVertical :50,
        paddingRight : 30,

    },

})
