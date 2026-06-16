import { Alert, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { SectionHero } from '@/components/section-hero';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function ContactScreen() {
  const backgroundColor = useThemeColor({ light: '#0F1714', dark: '#0F1714' }, 'background');
  const accentColor = '#1B5E20';

  const handlePress = () => {
    Alert.alert(
      'Contact Dorina Cables',
      '📧 Email\ndorina.cables@gmail.com\n\n' +
        '📱 Phone\n+63 (555) 123-4567\n\n' +
        '🐙 GitHub\ngithub.com/dorinacbls\n\n' +
        '💼 LinkedIn\nlinkedin.com/in/dorinacables\n\n' +
        '📘 Facebook\nfacebook.com/dorinacables\n\n' +
        'Feel free to reach out for inquiries, collaborations, or project-related messages!',
      [{ text: 'Got it', style: 'cancel' }]
    );
  };

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <SectionHero
        icon="📞"
        title="Contact"
        subtitle="Tap the button below to see my contact details"
        accentColor={accentColor}
        backgroundColor="#17301F"
        textColor="#FFFFFF"
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <ThemedView style={styles.contactCard}>
          <ThemedText type="defaultSemiBold" style={styles.contactTitle}>
            Get In Touch
          </ThemedText>
          <ThemedText style={styles.contactText}>
            Interested in collaborating or have a project inquiry? Press the button below to view my full contact information.
          </ThemedText>

          <Pressable
            onPress={handlePress}
            style={({ pressed }) => [
              styles.contactButton,
              {
                backgroundColor: accentColor,
                opacity: pressed ? 0.82 : 1,
                transform: [{ scale: pressed ? 0.97 : 1 }],
              },
            ]}>
            <ThemedText style={styles.contactButtonText}>📬  View Contact Details</ThemedText>
          </Pressable>
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
  contactCard: {
    marginHorizontal: 20,
    padding: 22,
    borderRadius: 20,
    backgroundColor: '#1A2522',
  },
  contactTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  contactText: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 24,
    opacity: 0.88,
    color: '#E8F5E9',
  },
  contactButton: {
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  footerSpacing: {
    height: 28,
  },
});