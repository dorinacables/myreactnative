import { ScrollView, StyleSheet } from 'react-native';

import { PortfolioHeader } from '@/components/portfolio-header';
import { AboutSection } from '@/components/about-section';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { portfolioProfile } from '@/constants/portfolio-data';

export default function HomeScreen() {
  const accentColor = useThemeColor({}, 'tint');

  return (
    <ThemedView style={styles.container}>
      <PortfolioHeader
        name={portfolioProfile.name}
        tagline={portfolioProfile.tagline}
        initials={portfolioProfile.initials}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <AboutSection bio={portfolioProfile.bio} experience={portfolioProfile.focus} />

        <ThemedView style={styles.summaryCard}>
          <ThemedText type="defaultSemiBold" style={styles.summaryTitle}>
            Portfolio Snapshot
          </ThemedText>
          <ThemedText style={styles.summaryText}>
            I build school-based systems, data-driven tools, and mobile-friendly interfaces with a
            focus on practical workflows and clean presentation.
          </ThemedText>

          <ThemedView style={styles.pillRow}>
            <ThemedView style={[styles.pill, { borderColor: accentColor }]}>
              <ThemedText style={[styles.pillText, { color: accentColor }]}>Business Analytics</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.pill, { borderColor: accentColor }]}>
              <ThemedText style={[styles.pillText, { color: accentColor }]}>School Projects</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.pill, { borderColor: accentColor }]}>
              <ThemedText style={[styles.pillText, { color: accentColor }]}>Mobile + Web</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
  },
  summaryCard: {
    marginHorizontal: 4,
    borderRadius: 22,
    padding: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  summaryTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 14,
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  pill: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  pillText: {
    fontSize: 12,
    fontWeight: '700',
  },
});
