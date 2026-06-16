import { StyleSheet, Pressable, Alert } from 'react-native';
import { ThemedText } from './themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';

interface ContactButtonProps {
  email: string;
  phone?: string;
}

export function ContactButton({ email, phone }: ContactButtonProps) {
  const tintColor = useThemeColor({}, 'tint');
  const backgroundColor = useThemeColor({ light: '#F0F8FF', dark: '#1a3a52' }, 'background');

  const handlePress = () => {
    let message = `Contact Information:\n\n📧 Email: ${email}`;
    if (phone) {
      message += `\n📱 Phone: ${phone}`;
    }
    message += '\n\nFeel free to reach out!';

    Alert.alert('Get In Touch', message, [
      {
        text: 'Copy Email',
        onPress: () => {
          // In a real app, you'd use react-native-clipboard
          Alert.alert('Success', 'Email copied to clipboard!');
        },
      },
      {
        text: 'Close',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: tintColor,
          opacity: pressed ? 0.85 : 1,
        },
      ]}>
      <ThemedText
        style={[
          styles.buttonText,
          {
            color: '#fff',
          },
        ]}>
        Get In Touch 💬
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    marginVertical: 24,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
