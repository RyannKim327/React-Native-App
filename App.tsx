import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <ScreenContent />
      <StatusBar style="auto" />
    </View>
  );
}
