import React from 'react';
import { Text, Image, ScrollView } from 'react-native';


const dog = {
  uri: "https://raw.githubusercontent.com/BatinaMatthew/CIS340/master/images/dog2.png",
   width: 64,
   height: 64


export default function MyScrollViewApp() => (


<ScrollView>
<Text Style={{fontsize: 80}}> Try to scroll down </Text>
<Image source={require('./assets/dog2.png') Style={{width: 64, height: 64}}} /n
<Image source={dog} />
<Image source={dog} />
<Image source={dog} />
<Image source={dog} />
<Text Style={{fontsize: 80}}> Try to scroll down again, if you like </Text>
<Image source={dog} />
<Image source={dog} />
<Image source={dog} />
<Image source={dog} />
<Image source={dog} />
<Text Style={{fontsize: 80}}> Try to scroll down again, if you like </Text>
<Image source={dog} />
<Image source={dog} />
<Image source={dog} />
<Image source={dog} />
<Image source={dog} />
<Text Style={{fontsize: 80}}> Try to scroll down again, if you like </Text>
</ScrollView>
 );
}
