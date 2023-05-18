export interface Category {
  id?: number;
  name: string;
  slug?: string;
  parent_id?: number;

  created_at?: Date;
  updated_at?: Date;
}
