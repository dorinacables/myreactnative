import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SkillsMatrix } from '@/components/skills-matrix';
import { SectionHero } from '@/components/section-hero';
import { useThemeColor } from '@/hooks/use-theme-color';
import { backendSkills, frontendSkills, toolsSkills } from '@/constants/portfolio-data';

export default function SkillsScreen() {
  const backgroundColor = useThemeColor({ light: '#FAFBFF', dark: '#111315' }, 'background');

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <SectionHero
        icon="🧠"
        title="Skills Matrix"
        subtitle="Frontend, backend, and tools I use"
        accentColor="#5E35B1"
        backgroundColor="#33275D"
        textColor="#FFFFFF"
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <SkillsMatrix frontend={frontendSkills} backend={backendSkills} tools={toolsSkills} />

        <ThemedView style={styles.noteCard}>
          <ThemedText type="defaultSemiBold" style={styles.noteTitle}>
            What I usually work with
          </ThemedText>
          <View style={styles.noteList}>
            <ThemedText style={styles.noteItem}>• Frontend interfaces using React Native and web basics</ThemedText>
            <ThemedText style={styles.noteItem}>• Database-driven systems with SQL and PHP</ThemedText>
            <ThemedText style={styles.noteItem}>• Programming logic with Java, Python, and C++</ThemedText>
          </View>
        </ThemedView>

        <View style={styles.footerSpacing} />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 12,
    paddingBottom: 24,
  },
  noteCard: {
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 18,
    marginBottom: 18,
  },
  noteTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  noteList: {
    gap: 8,
  },
  noteItem: {
    fontSize: 14,
    lineHeight: 20,
  },
  footerSpacing: {
    height: 28,
  },
});