import React, { Component, useCallback, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import searchResults from './search'
import { ItemProvider, useItem } from './ItemProvider';

const SECTIONS=[
  {
    title: '배달(click)',
    content:'Lorem ipsum...'
  }
];
const AccordionView=()=>{
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
    //const [itemnumber, setItem] = useState(0);
    //this.state.activeSections.push();
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
        <Button title='구매' onPress={()=>{console.log(item);console.log}}></Button>
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
return (
  <AccordionView></AccordionView>
);
}
export default AccordionView;