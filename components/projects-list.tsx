import { StyleSheet, View } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { ProjectCard } from './project-card';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  status: 'completed' | 'in-progress' | 'featured';
  imageUrl: string;
  imagePosition: string;
}

interface ProjectsListProps {
  projects: Project[];
  onProjectPress?: (project: Project) => void;
}

export function ProjectsList({ projects, onProjectPress }: ProjectsListProps) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
        Featured Projects
      </ThemedText>

      <View style={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            status={project.status}
            imageUrl={project.imageUrl}
            imagePosition={project.imagePosition}
            onPress={() => onProjectPress?.(project)}
          />
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 16,
    marginHorizontal: 20,
    letterSpacing: 0.5,
  },
  projectsContainer: {
    gap: 0,
  },
});
