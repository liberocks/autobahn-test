export interface Issue {
  id: number;
  name: string;
  description?: string;
  score: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}
