import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PromoSlider() {
  return (
    <View style={styles.container}>
      <View style={styles.cardsRow}>
        <TouchableOpacity style={styles.mainCard}>
          <Text style={styles.promoText}>Up to ₹1000 on CC Billpay</Text>
          <Text style={styles.iconText}>💳</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moreCard}>
          <Text style={styles.moreText}>More →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  cardsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  mainCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  promoText: {
    fontSize: 14,
    color: '#000',
    flex: 1,
  },
  iconText: {
    fontSize: 24,
    marginLeft: 10,
  },
  moreCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  moreText: {
    fontSize: 14,
    color: '#7c3aed',
    fontWeight: '600',
  },
});
