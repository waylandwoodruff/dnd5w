import { FoundryDocumentTemplateAttribute } from './foundry-types';

export interface ResourceAttribute {
  value: FoundryDocumentTemplateAttribute;
  max: FoundryDocumentTemplateAttribute;
  [key: string]: FoundryDocumentTemplateAttribute;
}