import { Text, View } from 'react-native';

import Headers from './widgets/headers';

export const ScreenContent = () => {
  return (
    <View className="h-dvw mx-[5px] my-[30px] flex w-dvw flex-col">
      <Headers />
    </View>
  );
};
