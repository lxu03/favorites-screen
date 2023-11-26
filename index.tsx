import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useHeaderHeight} from '@react-navigation/elements';
import {
  Box,
  Card,
  HStack,
  Heading,
  ScrollView,
  Text,
  VStack,
  useTheme,
  Pressable
} from 'native-base';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootProp} from '../../../navigation/types';

import useColorScheme from '../../../hooks/useColorScheme';

interface CardDetailsProp {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CardDetails = ({icon, title, description}: CardDetailsProp) => {
  return (
    <Card>
      <HStack space={2}>
        {icon}
        <VStack flex={1}>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </VStack>
      </HStack>
    </Card>
  );
};

const HomeScreen = () => {
  const headerHeight = useHeaderHeight();
  const colorScheme = useColorScheme();
  const {colors} = useTheme();
  const navigation = useNavigation<RootProp>();
  return (
    <ScrollView flex={1}>
      <Box style={{height: headerHeight + 20}} />
      <VStack space={5} mx={3}>
        <CardDetails
          icon={
            <MaterialCommunityIcons
              name="meditation"
              size={60}
              color={colors[colorScheme].text}
            />
          }
          title="Practice"
          description="Master your understanding of the DMV material by practicing
          questions"
        />
        <Pressable onPress={() => navigation.navigate('Favorites')}>
        <CardDetails
          icon={
            <MaterialCommunityIcons
              name="cards-heart"
              size={60}
              color={colors[colorScheme].text}
            />
          }
          title="Favorites"
          description="Revisit your list of saed favorite practice questions"
        />
      </Pressable>
        <CardDetails
          icon={
            <MaterialCommunityIcons
              name="clipboard-account"
              size={60}
              color={colors[colorScheme].text}
            />
          }
          title="Exam"
          description="Take a timed exam that replicates the environment of an actual DMV test"
        />
      </VStack>
    </ScrollView>
  );
};

export default HomeScreen;
