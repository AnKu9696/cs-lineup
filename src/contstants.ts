import smoke from 'assets/grenadeIcons/smoke.svg';
import hegrenade from 'assets/grenadeIcons/hegrenade.svg';
import flash from 'assets/grenadeIcons/flash.svg';
import molotov from 'assets/grenadeIcons/molotov.svg';

export const MAPS = [
  'mirage',
  'nuke',
  'anubis',
  'inferno',
  'vertigo',
  'overpass',
  'ancient',
];
export const GRENADE_TYPES: string[] = [
  'smoke',
  'hegrenade',
  'flash',
  'molotov',
];
export const GRENADE_MAP: Record<string, string> = {
  smoke,
  flash,
  molotov,
  hegrenade,
};

export const MAP_SIZE = 1024;
export const GRENADE_LABEL_SIZE = Math.floor(MAP_SIZE * 0.04);
export const DEFAULT_SCALE = { x: 1, y: 1 };
export const HOVERED_SCALE = { x: 1.2, y: 1.2 };
export const HOVERED_COORDINATES =
  (GRENADE_LABEL_SIZE * 1.2 - GRENADE_LABEL_SIZE) / 2;

export const GRANADE_COUT_TEXT_SIZE = 20;
export const GRANADE_COUT_CONTAINER_SIZE = 23;
export const CORDINATES_SHIFT = GRANADE_COUT_CONTAINER_SIZE / 2;
