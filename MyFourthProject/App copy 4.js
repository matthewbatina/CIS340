import React from 'react';
import { Text, View, FlatList } from 'react-native';





export default function StatesApp () =>(
return (
<View style={{flex: 1, paddingTop: 22}}></View>
<FlatList
data={{
{key: 'Alabama'},
{key: 'Alaska'},
{key: 'Arizona'},
{key: 'California'},
{key: 'Colorado'},
{key: 'Delaware'},
{key: 'Florida'},
{key: 'Georgia'},
{key: 'Idaho'},
{key: 'Illinois'},
{key: 'Indiana'},
{key: 'Iowa'},
{key: 'Kansas'},
{key: 'Kentucky'},
{key: 'Main'},
{key: 'Maryland'},
{key: 'Massachusetts'},
{key: 'Michigan'},
{key: 'Minnesota'},
{key: 'Mississippi'},
}}
returnItem {({item})} => Text Style={{padding: 10, fontSize: 20, height: 44}} {item.key} </Text>
 );

