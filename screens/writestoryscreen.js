import React from 'react';
import {StyleSheet,View,Text,image}from react-Navigative;
import {crateAppCaintainer}from react-Navigative;
import {BottomTabNavigation}from react-Navigative -tabs;

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style={StyleSheet.Component}>
                <header
                backgroundColor={'pink'}
                centerComponent={{
                    text:'storyHub',
                    style:{color:'black',fontSize:20
                }
                }}/>
                
                <TextInput
                style ={styles.formTextInput}
                placeholder={"Enter your story title"}
                onChangeText={(text)=>{
                    this.setState({
                        title:text
                        
                    })
                }}
                value={this.state.title}
              />
              <TextInput
                style ={styles.formTextInput}
                placeholder={"author name"}
                onChangeText={(text)=>{
                    this.setState({
                        author:text
                        
                    })
                }}
                value={this.state.author}

              />
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Enter your story"}
                onChangeText={(text)=>{
                    this.setState({
                        story:text
                        
                    })
                }}
                value={this.state.story}
              />
              
<TouchableOpacity
style={styles.submitButton}>
 <Text> submit </Text>
 </TouchableOpacity>
styles={styles.submitButton}
onpress={this.submitStory}

<text styles={styles.buttonText}></text>
<TouchableOpacity/>
            </View>
        )
    }
}