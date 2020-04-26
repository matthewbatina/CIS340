import React from 'react';
import {Text} from 'react-native';

export default function App() {
  
  function getFullName{fName, mName, sName}{
return fName + " " + mName + " " + sName;

  }
  const pet = "dog"
  return (
      <Text>
        {"\n\n\n\n\n\n"}
        Hello, I am a student in CIS340! {"\n"}
        My full name is getFullName{"Matt", "Richard", "Batina"} {"\n"}
        I have a {pet}!
      </Text>
      
  );
}
