export interface Entity {
  id: string;
}

export type PartialEntityWithId<T extends Entity> = Pick<T, "id"> & Partial<T>;

export interface EntityRepository<T extends Entity> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  post(entity: Omit<T, "id">): Promise<string>;
  patch(entity: PartialEntityWithId<T>): Promise<string>;
  put(entity: Omit<T, "id">): Promise<string>;
  delete(id: string): Promise<string>;
}
