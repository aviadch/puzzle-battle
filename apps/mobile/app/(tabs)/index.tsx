import { Stack } from "expo-router";

import { Text, View } from 'react-native';
import { User } from '@puzzle-battle/shared';

export default function TabOneScreen() {
  const user: User = { id: '1', username: 'MobileUser' };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Tab One</Text>
      <View className="my-8 h-[1px] w-4/5 bg-gray-200" />
      <Text>Shared User: {user.username}</Text>
    </View>
  );
}
