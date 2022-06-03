import { DarkIcon, LightIcon } from 'assets/icons'
import React from 'react'

export function Icon({ isDarkMode }: any) {
  return isDarkMode === 'dark' ? <DarkIcon /> : <LightIcon />
}
