import {
  Entity,
  EntityRepository,
  PartialEntityWithId,
} from "@/interfaces/EntityRepository";
import { generateRandomID } from "@/utils/helperFunctions";

interface ProductEntity extends Entity {
  name: string;
  price: number;
  description: string;
  categories: string[];
}

export class ProductRepository implements EntityRepository<ProductEntity> {
  private data: ProductEntity[] = [];

  async getAll(): Promise<ProductEntity[]> {
    return this.data;
  }
  async getById(id: string): Promise<ProductEntity | null> {
    return this.data.find((product) => product.id === id) ?? null;
  }
  async post(product: Omit<ProductEntity, "id">): Promise<string> {
    const newEntity: ProductEntity = {
      ...product,
      id: generateRandomID(),
    };
    this.data.push(newEntity);
    return "created successfully";
  }
  async patch(product: PartialEntityWithId<ProductEntity>): Promise<string> {
    const index = this.data.findIndex(
      (productToFind) => productToFind.id === product.id
    );
    if (index !== -1) {
      this.data[index] = {
        ...this.data[index],
        ...product,
      };
      return "updated successfully";
    }
    return "error during updating";
  }
  async put(product: Omit<ProductEntity, "id">): Promise<string> {
    const index = this.data.findIndex(
      (productToFind) => productToFind.id === product.id
    );
    if (index !== -1) {
      this.data[index] = product;
      return "overwritten successfully";
    }
    return "error during overwritting";
  }
  async delete(id: string): Promise<string> {
    const index = this.data.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
      return "deleted successfully";
    }
    return "error during deleting";
  }
}
