import { FoundryDocumentTemplateAttribute } from './foundry-types';

export interface FoundrySchemaAttribute {
  templates: string[];
  [key: string]: FoundryDocumentTemplateAttribute;
}