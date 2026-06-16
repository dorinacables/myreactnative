import { StyleSheet, View } from 'react-native';
import { ThemedText } from './themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';

interface SkillChipProps {
  skill: string;
  level: 'expert' | 'advanced' | 'intermediate';
  icon?: string;
}

export function SkillChip({ skill, level, icon }: SkillChipProps) {
  const tintColor = useThemeColor({}, 'tint');
  
  const levelColor = {
    expert: tintColor,
    advanced: useThemeColor({ light: '#7CB342', dark: '#9CCC65' }, 'icon'),
    intermediate: useThemeColor({ light: '#FFA726', dark: '#FFB74D' }, 'icon'),
  };

  const backgroundColor = useThemeColor(
    { light: '#F5F5F5', dark: '#2A2A2A' },
    'background'
  );

  return (
    <View
      style={[
        styles.chip,
        {
          backgroundColor,
          borderColor: levelColor[level],
          borderWidth: 1.5,
        },
      ]}>
      {icon && <ThemedText style={styles.icon}>{icon}</ThemedText>}
      <ThemedText style={styles.skillText}>{skill}</ThemedText>
      <View
        style={[
          styles.levelIndicator,
          {
            backgroundColor: levelColor[level],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 8,
    fontSize: 18,
  },
  skillText: {
    fontSize: 13,
    fontWeight: '500',
    marginRight: 8,
  },
  levelIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});
