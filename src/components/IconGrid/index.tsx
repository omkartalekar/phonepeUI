import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { IconGridProps } from './types';

export default function IconGrid({ title, items }: IconGridProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      
      <View style={styles.row}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>{item.icon}</Text>
            </View>
            <Text style={styles.itemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
