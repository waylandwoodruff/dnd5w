import { SystemManifest } from './definitions';

export const DnD5wSystemManifest: SystemManifest = {
  id: 'dnd5w',
  title: 'Dungeons and Dragons 5.W',
  description: `D&D 5e system for Foundry VTT employing Wayland's house rules.`,
  version: '0.0.0',

  authors: [
    {
      name: 'Wayland Woodruff',
      email: 'waylandwoodruff@gmail.com',
    },
  ],
  compatibility: {
    minimum: '10',
  },
}