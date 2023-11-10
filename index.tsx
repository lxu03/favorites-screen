import {useNavigation} from '@react-navigation/native';
import {
  Text,
  VStack,
  HStack,
  Pressable,
  Box,
  ScrollView,
  Card,
} from 'native-base';
import {MaterialCommunityIcons} from '@expo/vector-icons';


const FavoritesScreen = () => {
    return (
      <ScrollView flex={1}>
        <Box style={{height: 20}} />
          <VStack space={2} mx={3}>
            {favoriteCard()}
            {favoriteCard()}
            {favoriteCard()}
          </VStack>
      </ScrollView>
    );
  };
  
  export default FavoritesScreen;

function favoriteCard() {
  var color = "#dc143c";

  return <Card>
    <VStack>
      <HStack alignItems={"center"} space={175}>
        <Text>Placeholder</Text>
        <Pressable
          onPress={() => {
          } }>
          <MaterialCommunityIcons
            name="cards-heart"
            size={60}
            color={color} />
        </Pressable>
      </HStack>
    </VStack>
  </Card>;
}
