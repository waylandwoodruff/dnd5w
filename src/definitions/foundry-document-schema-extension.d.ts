import { FoundryDocumentTemplate } from './foundry-types';

export interface FoundryDocumentSchemaExtension {
  types: string[];
  templates: FoundryDocumentTemplate[];
  [key: string]: any;
}