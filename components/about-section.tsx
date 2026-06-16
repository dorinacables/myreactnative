import { StyleSheet, View } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

interface AboutSectionProps {
  bio: string;
  experience: string;
}

export function AboutSection({ bio, experience }: AboutSectionProps) {
  const borderColor = useThemeColor({ light: '#E0E0E0', dark: '#333' }, 'icon');

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
        About Me
      </ThemedText>

      <View style={[styles.bioBox, { borderLeftColor: useThemeColor({}, 'tint'), borderLeftWidth: 4 }]}>
        <ThemedText style={styles.bioText}>{bio}</ThemedText>
      </View>

      <View style={[styles.experienceBox, { borderColor, borderWidth: 1 }]}>
        <ThemedText style={styles.experienceLabel}>Experience</ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.experienceText}>
          {experience}
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  bioBox: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(160, 210, 220, 0.08)',
  },
  bioText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  experienceBox: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
  },
  experienceLabel: {
    fontSize: 12,
    fontWeight: '500',
    opacity: 0.7,
    marginBottom: 4,
  },
  experienceText: {
    fontSize: 16,
  },
});
