import { FoundryVersion } from './foundry-types';

/**
 * The compatibility field is an object key for capturing the sub-fields which define the limits of
 * your module's compatibility based on Foundry VTT version.
 * Source: https://foundryvtt.com/article/system-development/
 */
export interface SystemCompatibility {
  // The module will not function for Foundry versions earlier than this.
  minimum?: FoundryVersion;
  // The module has been verified to be compatible up to this Foundry version.
  verified?: FoundryVersion;
  // The module will not function for newer Foundry versions than this.
  maximum?: FoundryVersion;
}

