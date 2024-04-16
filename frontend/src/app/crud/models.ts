export interface CrudItem {
  id: number;
  name: string;
  description?: string;
  imageId?: number;
}

export type CrudLabels = {
  listHeader: string;
  detailsHeader: string;
  addActionLabel: string;
  deleteActionLabel: string;
}

export type CrudServiceConfig = {
  apiBaseUrl: string;
  idAttributeName: string;
  listPathName: string;
  withImage: boolean;
  withTags: boolean;
  translations: CrudLabels;
}
