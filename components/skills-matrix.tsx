import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { SkillChip } from './skill-chip';

interface Skill {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate';
  icon?: string;
}

interface SkillsMatrixProps {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export function SkillsMatrix({ frontend, backend, tools }: SkillsMatrixProps) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
        Technical Skills
      </ThemedText>

      {/* Frontend */}
      <View style={styles.categoryContainer}>
        <ThemedText style={styles.categoryLabel}>Frontend</ThemedText>
        <View style={styles.chipRow}>
          {frontend.map((skill, idx) => (
            <SkillChip key={`frontend-${idx}`} skill={skill.name} level={skill.level} icon={skill.icon} />
          ))}
        </View>
      </View>

      {/* Backend */}
      <View style={styles.categoryContainer}>
        <ThemedText style={styles.categoryLabel}>Backend & Mobile</ThemedText>
        <View style={styles.chipRow}>
          {backend.map((skill, idx) => (
            <SkillChip key={`backend-${idx}`} skill={skill.name} level={skill.level} icon={skill.icon} />
          ))}
        </View>
      </View>

      {/* Tools */}
      <View style={styles.categoryContainer}>
        <ThemedText style={styles.categoryLabel}>Tools & DevOps</ThemedText>
        <View style={styles.chipRow}>
          {tools.map((skill, idx) => (
            <SkillChip key={`tools-${idx}`} skill={skill.name} level={skill.level} icon={skill.icon} />
          ))}
        </View>
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
    marginBottom: 18,
    letterSpacing: 0.5,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryLabel: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
    opacity: 0.7,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
