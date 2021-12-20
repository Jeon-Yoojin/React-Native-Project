import { BUILDER_KEYS } from '@babel/types';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, ScrollView, Dimensions, Button } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: "black"
    },
    button: {
        width: Dimensions.get('window').width,
        height: 250,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    image:{
        width: Dimensions.get('window').width,
        height: 100,
        flex:1
    },
    apply:{
        fontSize: 20,
        fontStyle: 'bold',
        color: 'white',
        borderRadius: 2
    }
});


const FindScreen2 = (props: any) => {
    return (
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
            <View>
                    <TouchableOpacity style={styles.button} onPress={()=>{}}>
                        <Image style={styles.image} source={require('./images/rice.jpg')}/>
                        <Text style={styles.text}>매달 쌀 한 포대씩 정기배송!</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{color: 'red', marginLeft: 5, marginRight: 10}}>20% 할인</Text>
                            <Text style={{marginLeft: 5, marginRight: 10}}>60,000원</Text>
                        </View>
                        <View style={{margin: 5}}>
                        <Button title='배달신청' onPress={()=>console.log("신청완료")}></Button>
                        </View>
                    </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles.button} onPress={()=>{}}>
                        <Image style={styles.image} source={require('./images/bath2.jpg')}/>
                        <Text style={styles.text}>욕실용품SET(치약+화장지) 정기배송!</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{color: 'red', marginLeft: 5, marginRight: 10}}>10% 할인</Text>
                            <Text style={{marginLeft: 5, marginRight: 10}}>20,000원</Text>
                        </View>
                        <View style={{margin: 5}}>
                            <Button title='배달신청'onPress={()=>console.log("신청완료")}></Button>
                        </View>
                    </TouchableOpacity>
            </View>            
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>{}}>
                    <Image style={styles.image} source={require('./images/fresh.jpg')}/>
                    <Text style={styles.text}>신선상품 매주 정기배송!</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{color: 'red', marginLeft: 5, marginRight: 10}}>5% 할인</Text>
                            <Text style={{marginLeft: 5, marginRight: 10}}>5,000원</Text>
                        </View>
                        <View style={{margin: 5}}>
                        <Button title='배달신청'onPress={()=>console.log("신청완료")}></Button>
                        </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>{}}>
                    <Image style={styles.image} source={require('./images/drink.png')}/>
                    <Text style={styles.text}>음료수/생수 달마다 정기배송!</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{color: 'red', marginLeft: 5, marginRight: 10}}>10% 할인</Text>
                            <Text style={{marginLeft: 5, marginRight: 10}}>30,000원</Text>
                        </View>
                        <View style={{margin: 5}}>
                            <Button title='배달신청'onPress={()=>console.log("신청완료")}></Button>
                        </View>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    )
}

export default FindScreen2;
