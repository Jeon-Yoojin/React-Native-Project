import * as React from 'react';
import { useCallback, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: "black"
    },
    button: {
        width: 160,
        height: 230,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
});

export default function HomeScreen({ navigation }) {
    const [itemnumber, setItemnumber] = useState(15);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 23, alignItems: "center", color: 'gray', marginLeft: 10}}>똑똑한 쇼핑</Text>
                <Text style={{fontSize: 50, margin: 15, marginLeft: 40, color: 'orange', alignItems: "center"}}>S-Mart</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FindScreen2')}>
                        <Icon name="search" size={65}/>
                        <Text style={styles.text}>상품찾기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DeliverScreen')}>
                        <Icon name="delivery-dining" size={65}/>
                        <Text style={styles.text}>배달</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SubScreen')}>
                        <Icon name="360" size={65}/>
                        <Text style={styles.text}>정기구독</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyScreen')}>
                        <Icon name = "person-pin" size={65}/>
                        <Text style={styles.text}>My</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}