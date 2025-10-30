// src/components/ui/Button.tsx
import { clsx } from 'clsx'
import { Text, TouchableOpacity } from 'react-native'

type ButtonProps = {
  label: string
  onPress?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  className?: string
}

export function Button({
  label,
  onPress,
  variant = 'primary',
  className,
}: ButtonProps) {
  const base = 'flex-row items-center justify-center rounded-2xl px-4 py-3'

  const variants = {
    primary: 'bg-accent',
    outline: 'border border-accent bg-transparent',
    ghost: 'bg-transparent',
  } as const

  const textVariants = {
    primary: 'text-white',
    outline: 'text-accent',
    ghost: 'text-accent',
  } as const

  return (
    <TouchableOpacity
      onPress={onPress}
      className={clsx(base, variants[variant], className)}
      activeOpacity={0.8}
    >
      <Text className={clsx('text-base font-semibold', textVariants[variant])}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
