import { Image, View } from 'react-native';
import { styles } from './styles';

export default function HeaderBanner() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/banner.png')} 
        style={styles.bannerImage}
        resizeMode="cover"
      />
    </View>
  );
}
