import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";
import React, { Component, useState } from "react";

import searchResults from './search';
import Accordion from "react-native-collapsible/Accordion";

const styles = StyleSheet.create({
    container : {
        margin : 20,
    },
    textInput : {
        fontSize : 20,
        marginBottom : 20,
    },
    iconContainer : {
        backgroundColor : '#e7e7e7',
        padding : 7,
        borderRadius : 10,
        marginRight : 15,
    },
    locationText : {
        
    },
    row : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingVertical : 15,
        borderBottomWidth : 1,
        borderColor : 'lightgrey',
    },
    description:{
        fontSize: 25,
        margin: 8,
        color: 'black'
    },
    inventory:{
        fontSize: 15,
        margin : 3,
        color: 'blue'
    },
    explanation:{
        fontSize: 22,
        margin : 5,
        color: 'gray'
    },
    price:{
        fontSize: 20,
        marginTop: 2,
        marginRight: 20,
        color: 'red'
    }
});


const FindScreen2 = (props: any) => {
    const SECTIONS=searchResults;
    const [inputText, setInputText] = useState('');
    class AccordionView extends Component {
        state = {
          activeSections: [],
        };
      
        _renderSectionTitle = (section:any) => {
          return;
        };
      
        _renderHeader = (section:any) => {
          return (section.description.includes(inputText)?
              <Text style={styles.description}>{(section.description.includes(inputText))?section.description:""}</Text>
              :<View></View>
          );
        };
      
        _renderContent = (section:any) => {
          //const [itemnumber, setItem] = useState(0);
          return ((section.description.includes(inputText))?
                <View style={{flex: 1,alignContent: 'space-between'}}>
                    
                  <Text style={styles.explanation}>{(section.description.includes(inputText))?section.explanation:""}</Text>
                  <View style={{flexDirection:'column', justifyContent: "space-between"}}>
                  <Text style={styles.inventory}>{(section.description.includes(inputText))?section.inventory:""}</Text>
                  <Text style={styles.price}>{(section.description.includes(inputText))?section.price:""}</Text>
                  </View>
                </View>
                : <View></View>
          );
        };
      
        _updateSections = (activeSections: any) => {
          this.setState({ activeSections });
        };
      
        render() {
          return (
            
            <Accordion
              sections={SECTIONS}
              activeSections={this.state.activeSections}
              //renderSectionTitle={this._renderSectionTitle}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
              onChange={this._updateSections}
            />
          );
        }
      }
      return (
        <View>
            <TextInput
                style={styles.textInput}
                placeholder="상품을 검색하세요"
                value={inputText}
                onChangeText={setInputText}
            />
            <AccordionView></AccordionView>
        </View>
    )
}

export default FindScreen2;