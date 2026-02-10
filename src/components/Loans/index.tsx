import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { LOANS_ITEMS } from '../../constants/iconItems';

export default function Loans() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Loans</Text>
      
      <View style={styles.row}>
        {LOANS_ITEMS.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>{item.icon}</Text>
            </View>
            <Text style={styles.itemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.promoRow}>
        <TouchableOpacity style={styles.mainCard}>
          <Text style={styles.promoText}>Get a loan of up to ₹10 lakh</Text>
          <Text style={styles.cardIcon}>💰</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moreCard}>
          <Text style={styles.moreText}>More →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
