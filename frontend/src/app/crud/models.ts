export interface CrudItem {
  id: number;
  name: string;
  description?: string;
  imageId?: number;
}

export type CrudServiceConfig = {
  apiBaseUrl: string;
  idAttributeName: string;
  listPathName: string;
}
