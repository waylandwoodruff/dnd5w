import { AnyObject } from './common';

export type FoundryVersion = number | string;
export type SystemVersion = number | string;

export enum FoundryDocument {
  Actor = 'Actor',
  Item = 'Item',
  Scene = 'Scene',
}

export type FoundryDocumentTemplateAttribute = number | string | AnyObject;
export type FoundryDocumentTemplate = { [key: string]: FoundryDocumentTemplateAttribute };

export type FoundryPackageType = 'module' | 'system' | 'world';

export type LanguageCode = string;
