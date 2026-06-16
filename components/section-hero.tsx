import { StyleSheet, View } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

interface SectionHeroProps {
  icon: string;
  title: string;
  subtitle: string;
  accentColor: string;
  backgroundColor: string;
  textColor?: string;
}

export function SectionHero({
  icon,
  title,
  subtitle,
  accentColor,
  backgroundColor,
  textColor = '#FFFFFF',
}: SectionHeroProps) {
  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <View style={[styles.iconCircle, { backgroundColor: accentColor }]}>
        <ThemedText style={styles.icon}>{icon}</ThemedText>
      </View>
      <ThemedText type="title" style={[styles.title, { color: textColor }]}>
        {title}
      </ThemedText>
      <ThemedText style={[styles.subtitle, { color: textColor, opacity: 0.92 }]}>{subtitle}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 18,
    paddingVertical: 22,
    paddingHorizontal: 18,
    borderRadius: 24,
    alignItems: 'center',
    overflow: 'hidden',
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  icon: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '600',
    maxWidth: 320,
  },
});
