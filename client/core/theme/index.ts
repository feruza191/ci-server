import textKeys from '../enums/TextKeys';
import { devices, sizes } from './devices';
import { CONSTANT_PALETTES } from './palette';
import { TextConfig, fontSizes, lineHeights, fontWeights } from './typography';

export const palette = CONSTANT_PALETTES;
export const device = devices;
export const size = sizes;

export const fontSize = fontSizes;
export const fontWeight = fontWeights;
export const lineHeight = lineHeights;

export const TextKey = textKeys;
export const Text = TextConfig;
