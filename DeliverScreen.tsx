import { View, TextInput, FlatList, Text, StyleSheet, Dimensions, Button } from "react-native";
import React, { Component, useCallback, useState } from "react";

import searchResults from './search';
import deliverlist from './deliverlist';
import { TouchableOpacity } from "react-native-gesture-handler";
import Accordion from "react-native-collapsible/Accordion";
import {ItemProvider} from "./ItemProvider";

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
        fontSize: 25,
        color: 'black',
        margin: 5
    },
    row : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingVertical : 15,
        borderBottomWidth : 1,
        borderColor : 'lightgrey',
    }
});

const SECTIONS=[
    {
      title: '주문하기',
      content:'Lorem ipsum...'
    }
  ];
const FindScreen2 = (props: any) => {let ordernum = 0;
    const [item, setItem] = useState(0);
    const increaseItem = useCallback(()=>{
      return setItem((fs:number) => {return ++fs;});
    }, []);
    const decreaseItem = useCallback(()=>{
      return setItem((fs:number) => {return --fs;});
    }, []);
    
    class AccordionView extends Component {
    state = {
        activeSections: [],
      };
    
      _renderSectionTitle = (section:any) => {
        return;
      };
    
      _renderHeader = (section:any) => {
        return (
          <View>
            <Text style={{fontSize: 18, padding: 5}}>{section.title}</Text>
          </View>
        );
      };
    
      _renderContent = (section:any) => {
        return (
          <ItemProvider item={item} increaseItem={increaseItem} decreaseItem={decreaseItem}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={decreaseItem}>
              <Text style={{ fontSize: 30, color: '#474747' }}>-</Text>
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 20, fontSize: 30, color: 'black' }}>{item}</Text>
            <TouchableOpacity onPress={increaseItem}>
              <Text style={{ fontSize: 30, color: '#474747' }}>+</Text>
            </TouchableOpacity>
            <View style={{marginLeft: 20, marginTop: 5, justifyContent: 'flex-end'}}>
            <Button title='추가' onPress={()=>{ordernum = item;}}></Button>
            </View>
          </View>
          </ItemProvider>
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
    const [inputText, setInputText] = useState('');
    return (
        <View>
            <TextInput
                style={styles.textInput}
                placeholder="상품을 검색하세요"
                value={inputText}
                onChangeText={setInputText}
            />
                <FlatList
                    data={searchResults}
                    renderItem={({ item }) =>
                    item.description.includes(inputText)?
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styles.row}>
                            <View style={{width: Dimensions.get('window').width,flexDirection: 'column', justifyContent: 'space-between'}}>
                            <Text style={styles.locationText}>{(item.description.includes(inputText))?item.description:""}</Text>
                            <TouchableOpacity onPress={()=> {const itemname = item.description;
                            for(let i=0;i<deliverlist.length;i++){
                                if(itemname==deliverlist[i].description){
                                    deliverlist[i].order = deliverlist[i].order + ordernum;
                                    ordernum=0;
                                };
                            }
                            }}>
                                <AccordionView></AccordionView>
                            </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View> : <View></View>
                    }
                />
        </View>
    )
}

export default FindScreen2;