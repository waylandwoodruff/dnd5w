import { FoundryPack } from './foundry-pack';
import { SystemAuthor } from './system-author';
import { SystemCompatibility } from './system-compatibility';
import { SystemDependency } from './system-dependency';
import { SystemLanguage } from './system-language';
import { SystemVersion } from './foundry-types';


/**
 * The system manifest interface Foundry VTT requires for every system in order to function. This
 * data model is intended for dynamic construction during development. When building the code, the
 * system manifest instance will be converted to the required json document in the output root
 * folder.
 * Source: https://foundryvtt.com/article/system-development/
 */
export interface SystemManifest {
  // Choose a unique system identifier. This should be an all lower-case string with no special
  // characters. This name must align with the name of the parent directory within which you create
  // the system.
  id: string;

  // Provide a human readable title for the game system which is displayed when selecting from
  // available systems in the World creation menu.
  title: string;

  // This field can contain a more lengthy description of the game system. This text will be used to
  // display help or contact information about your system and is also a good place to include any
  // special licensing or attribution information that you need to distribute.
  description: string;

  // The system version number can be a number or a string depending on what versioning scheme you
  // prefer to use. You should always increment the system version number if you make changes to the
  // Data Template which is described below. When the system version is changed, the platform will
  // automatically migrate all content to match the new Data Template schema.
  version: SystemVersion;

  /** ********************
   * OPTIONAL PROPERTIES *
   ******************** */

  authors?: SystemAuthor[];

  compatibility?: SystemCompatibility;

  // You can designate JavaScript files which should be included in the game session whenever this
  // System is being used. Each listed script path should be relative to the system root directory.
  // All scripts which exist will be automatically included in the game session and loaded in their
  // listed order. As a best practice, we recommend serving system scripts out of a subdirectory
  // named scripts, but this is not required.
  scripts?: string[];

  // In addition to including traditional JavaScript script files, you may also include JS files
  // which use the newer ES6 modules specification. These files are identified separately in the
  // system manifest so they may be correctly loaded as a module rather than a script.
  esmodules?: string[];

  // You can designate CSS files which should be included in the game session whenever this System
  // is being used. Each listed stylesheet path should be relative to the system root directory. All
  // stylesheets which exist will be automatically included in the game session and loaded in their
  // listed order. As a best practice, we recommend serving stylesheets out of a subdirectory named
  // styles, but this is not required.
  styles?: string[];

  packs?: FoundryPack[];

  relationships?: {
    requires?: SystemDependency[];
    systems?: SystemDependency[];
  };

  languages?: SystemLanguage[];

  // A system may request for a specialized socket namespace to be provided. If set to `true`, a
  // socket event will be handled by the server with the name `system.${id}` which transacts an
  // arbitrary data object by broadcasting that data to all connected clients. This allows the
  // system to have a reserved channel for messaging events which are needed to coordinate actions
  // across multiple connected clients.
  socket?: boolean;

  // Not every game system uses the concept of initiative, but this field provides the default dice
  // rolling formula that can be used to determine the turn order of Tokens within the combat
  // tracker. Example: "1d20 + @dexMod"
  initiative?: string;

  // This field designates the default amount of distance that a single grid space should typically
  // represent under this game system. This value configures the default value used when a new Scene
  // is created, but can always be changed for each Scene independently.
  gridDistance?: number;

  // This field designates the standard unit of measure used to describe distances under this game
  // system. This defines the default value used when new a new Scene is created, but can always be
  // changed for each Scene independently.
  gridUnits?: string;

  // An attribute path within the system data model that points to an object that contains both a
  // `value` and `max` key. The prototype Token for each Actor created in this system will
  // automatically have this resource assigned as it's primary bar. Omit this key or set it to
  // `null` for no default attribute.
  primaryTokenAttribute?: string;

  // An attribute path within the system data model that points to an object that contains both a
  // `value` and `max` key. The prototype Token for each Actor created in this system will
  // automatically have this resource assigned as it's secondary bar. Omit this key or set it to
  // `null` for no default attribute.
  secondaryTokenAttribute?: string;

  // A public URL that links to the repository or documentation pages for the game system. This link
  // will be displayed for users to allow them to find more information about your system.
  url?: string;

  // A stable URL that describes the latest release version of your system manifest file. This URL
  // is used for automatic system installation in the Foundry VTT setup screen. This manifest URL is
  // consulted during the system update check to see whether a new system version is available for
  // download. It is important that this address remain stable, otherwise updates will not be
  // detected.
  manifest?: string;

  // A public URL that provides a zip archive of your system. The archive at this URL is retrieved
  // during the automated system installation or update process.
  download?: string;
}