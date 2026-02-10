import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { HORIZONTAL_PROMOS } from '../../constants/promoItems';

export default function HorizontalPromos() {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {HORIZONTAL_PROMOS.map((promo, index) => (
          <TouchableOpacity key={index} style={styles.promoCard}>
            <Text style={styles.iconText}>{promo.icon}</Text>
            <Text style={styles.promoText}>{promo.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
