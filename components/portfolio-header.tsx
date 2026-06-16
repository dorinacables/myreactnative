import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

const AVATAR_URL = 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png';

interface PortfolioHeaderProps {
  name: string;
  tagline: string;
  initials?: string;
}

export function PortfolioHeader({ name, tagline }: PortfolioHeaderProps) {
  const tintColor = useThemeColor({}, 'tint');
  const backgroundColor = useThemeColor({ light: '#F0F8FF', dark: '#1a3a52' }, 'background');

  return (
    <ThemedView style={[styles.headerContainer, { backgroundColor }]}>
      {/* Avatar Image */}
      <View style={[styles.avatarCircle, { borderColor: tintColor }]}>
        <Image
          source={{ uri: AVATAR_URL }}
          style={styles.avatarImage}
          contentFit="cover"
        />
      </View>

      {/* Name and Tagline */}
      <View style={styles.textContainer}>
        <ThemedText type="title" style={styles.name}>
          {name}
        </ThemedText>
        <ThemedText
          style={[
            styles.tagline,
            {
              color: tintColor,
            },
          ]}>
          {tagline}
        </ThemedText>
      </View>

      {/* Decorative Element */}
      <View
        style={[
          styles.decorative,
          {
            backgroundColor: tintColor,
            opacity: 0.1,
          },
        ]}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 32,
    paddingHorizontal: 20,
    marginBottom: 24,
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 4,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    textAlign: 'center',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    maxWidth: 280,
  },
  decorative: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    bottom: -50,
    right: -50,
  },
});
