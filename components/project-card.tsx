import { StyleSheet, View, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from './themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  status: 'completed' | 'in-progress' | 'featured';
  imageUrl: string;
  onPress?: () => void;
}

export function ProjectCard({ title, description, tech, status, imageUrl, onPress }: ProjectCardProps) {
  const backgroundColor = useThemeColor({ light: '#F9F9F9', dark: '#2A2A2A' }, 'background');
  const borderColor = useThemeColor({ light: '#E0E0E0', dark: '#404040' }, 'icon');
  const tintColor = useThemeColor({}, 'tint');
  const techTagBackgroundColor = useThemeColor({ light: '#E0F2F1', dark: '#004D40' }, 'background');
  const imageOverlayColor = useThemeColor({ light: 'rgba(10,20,30,0.2)', dark: 'rgba(0,0,0,0.35)' }, 'background');

  const statusBgColor = {
    completed: useThemeColor({ light: '#E8F5E9', dark: '#1B5E20' }, 'background'),
    'in-progress': useThemeColor({ light: '#FFF3E0', dark: '#E65100' }, 'background'),
    featured: useThemeColor({ light: '#E3F2FD', dark: '#0D47A1' }, 'background'),
  };

  const statusTextColor = {
    completed: useThemeColor({ light: '#2E7D32', dark: '#81C784' }, 'tint'),
    'in-progress': useThemeColor({ light: '#E65100', dark: '#FFB74D' }, 'tint'),
    featured: useThemeColor({ light: '#1565C0', dark: '#64B5F6' }, 'tint'),
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.cardContainer,
        {
          backgroundColor,
          borderColor,
          opacity: pressed ? 0.7 : 1,
        },
      ]}>
      <View style={styles.previewBox}>
        <Image source={{ uri: imageUrl }} style={styles.previewImage} contentFit="cover" />
        <View style={[styles.previewOverlay, { backgroundColor: imageOverlayColor }]} />
      </View>

      <View style={styles.cardHeader}>
        <ThemedText type="defaultSemiBold" style={styles.title}>
          {title}
        </ThemedText>
        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: statusBgColor[status],
            },
          ]}>
          <ThemedText
            style={[
              styles.statusText,
              {
                color: statusTextColor[status],
              },
            ]}>
            {status === 'in-progress' ? 'In Progress' : status.charAt(0).toUpperCase() + status.slice(1)}
          </ThemedText>
        </View>
      </View>

      <ThemedText style={styles.description}>{description}</ThemedText>

      <View style={styles.techContainer}>
        {tech.map((t, idx) => (
          <View
            key={`tech-${idx}`}
            style={[
              styles.techTag,
              {
                backgroundColor: techTagBackgroundColor,
              },
            ]}>
            <ThemedText
              style={[
                styles.techTagText,
                {
                  color: tintColor,
                },
              ]}>
              {t}
            </ThemedText>
          </View>
        ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 14,
  },
  previewBox: {
    position: 'relative',
    borderRadius: 14,
    marginBottom: 14,
    overflow: 'hidden',
  },
  previewImage: {
    height: 128,
  },
  previewOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 10,
  },
  title: {
    fontSize: 16,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
  },
  description: {
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 12,
    opacity: 0.85,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  techTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  techTagText: {
    fontSize: 11,
    fontWeight: '500',
  },
});
