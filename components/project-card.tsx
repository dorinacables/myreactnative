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
      {/* Thumbnail on the left */}
      <View style={styles.thumbnail}>
        <Image source={{ uri: imageUrl }} style={styles.thumbnailImage} contentFit="cover" />
        <View style={[styles.thumbnailOverlay, { backgroundColor: imageOverlayColor }]} />
      </View>

      {/* Content on the right */}
      <View style={styles.contentArea}>
        <View style={styles.badgeRow}>
          <View style={[styles.statusBadge, { backgroundColor: statusBgColor[status] }]}>
            <ThemedText style={[styles.statusText, { color: statusTextColor[status] }]}>
              {status === 'in-progress' ? 'In Progress' : status.charAt(0).toUpperCase() + status.slice(1)}
            </ThemedText>
          </View>
        </View>

        <ThemedText type="defaultSemiBold" style={styles.title}>
          {title}
        </ThemedText>

        <ThemedText style={styles.description}>{description}</ThemedText>

        <View style={styles.techContainer}>
          {tech.map((t, idx) => (
            <View key={`tech-${idx}`} style={[styles.techTag, { backgroundColor: techTagBackgroundColor }]}>
              <ThemedText style={[styles.techTagText, { color: tintColor }]}>{t}</ThemedText>
            </View>
          ))}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    marginHorizontal: 20,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  thumbnail: {
    width: 90,
    height: 90,
    borderRadius: 12,
    overflow: 'hidden',
    flexShrink: 0,
    position: 'relative',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
  thumbnailOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  contentArea: {
    flex: 1,
  },
  badgeRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
  },
  title: {
    fontSize: 14,
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    lineHeight: 17,
    marginBottom: 8,
    opacity: 0.85,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  techTag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  techTagText: {
    fontSize: 10,
    fontWeight: '500',
  },
});
