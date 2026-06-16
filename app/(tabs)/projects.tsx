import { Alert, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ProjectsList } from '@/components/projects-list';
import { SectionHero } from '@/components/section-hero';
import { useThemeColor } from '@/hooks/use-theme-color';
import { projects, Project } from '@/constants/portfolio-data';

export default function ProjectsScreen() {
  const backgroundColor = useThemeColor({ light: '#F8FAFC', dark: '#101214' }, 'background');

  const handleProjectPress = (project: Project) => {
    const techList = project.tech.join(' · ');
    const statusLabel =
      project.status === 'in-progress'
        ? 'In Progress'
        : project.status.charAt(0).toUpperCase() + project.status.slice(1);

    Alert.alert(
      project.title,
      `${project.description}\n\n` +
        `Tech Stack\n${techList}\n\n` +
        `Status: ${statusLabel}\n\n` +
        `This is a school-based system developed as part of the BSIT – Business Analytics curriculum. ` +
        `It was designed with a focus on practical data workflows, user-friendly interfaces, and real-world use cases. ` +
        `Actual screenshots and full documentation are available upon request.`,
      [{ text: 'Close', style: 'cancel' }]
    );
  };

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <SectionHero
        icon="🗂️"
        title="Projects"
        subtitle="Tap a project card to view details"
        accentColor="#C62828"
        backgroundColor="#4A1F2A"
        textColor="#FFFFFF"
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <ProjectsList projects={projects} onProjectPress={(project) => handleProjectPress(project)} />

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
  footerSpacing: {
    height: 28,
  },
});