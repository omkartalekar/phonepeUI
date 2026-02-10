import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { RECHARGE_BILLS_ITEMS } from '../../constants/iconItems';

export default function RechargeBills() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Recharge & Bills</Text>
      
      <View style={styles.row}>
        {RECHARGE_BILLS_ITEMS.map((item, index) => (
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
          <Text style={styles.promoText}>Up to ₹1000 on CC Billpay</Text>
          <Text style={styles.cardIcon}>💳</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moreCard}>
          <Text style={styles.moreText}>More →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
