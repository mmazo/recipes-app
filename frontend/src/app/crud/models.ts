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
};

export type CrudServiceConfig = {
  apiBaseUrl: string;
  idAttributeName: string;
  listPathName: string;
  withImage: boolean;
  withTags: boolean;
  translations: CrudLabels;
};

export const CRUD_LABELS_DEFAULT: CrudLabels = {
  listHeader: 'List',
  detailsHeader: 'Details',
  addActionLabel: 'Add',
  deleteActionLabel: 'Delete',
};
