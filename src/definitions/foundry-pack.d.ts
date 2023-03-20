import { FoundryDocument } from './foundry-types';

/**
 * Game systems may come bundled with Compendium packs which add pre-generated content for Actors,
 * Items, or other supported Document types. Compendium packs are defined as objects which have
 * their own internal metadata. For each included compendium.
 * Source: https://foundryvtt.com/article/system-development/
 */
export interface FoundryPack {
  // The compendium pack name; this should be a unique lower-case string with no special characters.
  name: string;

  // The compendium pack label - this should be a human readable string label which is displayed in
  // the Compendium sidebar in-game.
  label: string;

  // Since you are creating compendium content specifically for your system, be sure to reference
  // that the content inside each compendium pack requires the system by providing the system name
  // that you chose.
  system?: string;

  // The module attribute of each compendium pack designates which content module provided the pack,
  // since this pack is coming from the system itself we can once again provide the system name.
  module?: string;

  // The path for each compendium pack should designate a database file with the `.db` extension. As
  // a best practice, we recommend placing these database files within the `packs` subdirectory. You
  // do not need to create these files yourself. If a system includes a compendium pack, the
  // database file for that pack will be created automatically when the system is loaded, if it does
  // not already exist.
  path: string;

  // Each compendium pack must designate a specific Document type that it contains. Valid documents
  // include `Actor`, `Item`, or `Scene`.
  type: FoundryDocument;
}
