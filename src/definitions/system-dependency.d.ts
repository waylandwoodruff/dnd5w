import { FoundryPackageType } from './foundry-types';
import { SystemCompatibility } from './system-compatibility';

/**
 * Systems can require other modules, systems, or worlds be installed to allow their use. If a
 * module has been installed with dependencies, but its dependencies are missing, it cannot be
 * enabled.
 * Source: https://foundryvtt.com/article/system-development/
 */
export interface SystemDependency {
  // Dependency entries require the `id` attribute. If only an `id` is provided, additional details
  // about the module will be discovered from the Foundry VTT website listing.
  id: string;

  // The type attribute instructs FVTT that the dependency may be on a different type of package. By
  // default dependencies are assumed to be a module, so if you want to depend on a system or world
  // you should be explicit.
  type: FoundryPackageType;

  // The manifest attribute provides an explicit manifest url to be used for downloading the
  // dependency. If a manifest is not provided, the dependency package must exist in the Foundry
  // website directory.
  manifest?: string;

  // The compatibility of a dependency can be defined, ensuring that the dependency will not be
  // installed if it does not meet the defined requirements.
  compatibility?: SystemCompatibility;
}
