import React, { Component} from 'react';
import {  Text, View, FlatList, StyleSheet } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import deliverlist from './deliverlist';

const styles = StyleSheet.create({
  description : {
      fontSize: 20,
      color: 'black',
      margin: 8
  }}
)
const SECTIONS=[
  {
    title: '장바구니',
    content:''
  }
];
const MyScreen=()=>{
class AccordionView extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = (section:any) => {
    return ;
  };

  _renderHeader = (section:any) => {
    return (
      <View style={{}}>
      <View style={{marginLeft: 10, marginRight: 10}}>
        <Text style={{fontSize: 30, backgroundColor: 'lightblue'}}>{section.title}</Text>
      </View>
      </View>
    );
  };

  _renderContent = (section:any) => {
    return (
    <View style={{ flexDirection: 'column' }}>
      <FlatList
                  data={deliverlist}
                  renderItem={({ item }) =>
                  item.order!=0?
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.description}>{item.description} </Text>
                    <Text style={styles.description}>{item.order}개 주문</Text>
                  </View> : <View></View>
                  }
              />
    </View>);
                  }
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
export default MyScreen;