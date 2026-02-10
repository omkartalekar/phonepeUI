import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HorizontalPromos() {
  const promos = [
    { icon: '🎁', text: 'Refer → ₹200' },
    { icon: '💰', text: 'Start Gold savings @ ₹10' },
    { icon: '🏍️', text: '20% Off+ on Bike Insurance' },

    { icon: '🪙', text: 'Secure savings in pure Silver' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {promos.map((promo, index) => (
          <TouchableOpacity key={index} style={styles.promoCard}>
            <Text style={styles.iconText}>{promo.icon}</Text>
            <Text style={styles.promoText}>{promo.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingBottom: 10,
  },
  scrollContent: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  promoCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconText: {
    fontSize: 20,
    marginRight: 8,
  },
  promoText: {
    fontSize: 13,
    color: '#000',
  },
});
