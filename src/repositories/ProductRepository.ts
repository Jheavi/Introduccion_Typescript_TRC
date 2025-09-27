import {
  Entity,
  EntityRepository,
  PartialEntityWithId,
} from "@/interfaces/EntityRepository";

interface ProductEntity extends Entity {
  name: string;
  price: number;
  description: string;
  categories: string[];
}

export class ProductRepository implements EntityRepository<ProductEntity> {
  async getAll(): Promise<ProductEntity[]> {
    try {
      const response = await fetch("/api/products");
      if (response.ok) {
        const result: ProductEntity[] = await response.json();
        return result;
      }
      return [];
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  async getById(id: string): Promise<ProductEntity | null> {
    try {
      const response = await fetch("/api/products/" + id);
      if (response.ok) {
        const result: ProductEntity = await response.json();
        return result;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async post(product: Omit<ProductEntity, "id">): Promise<string> {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(product),
      });
      if (response.ok) {
        return "created successfully";
      }
      return "error during creationg";
    } catch (error) {
      console.error(error);
      return "error during creationg";
    }
  }
  async patch(product: PartialEntityWithId<ProductEntity>): Promise<string> {
    try {
      const response = await fetch("/api/products/" + product.id, {
        method: "PATCH",
        body: JSON.stringify(product),
      });
      if (response.ok) {
        return "updated successfully";
      }
      return "error during updating";
    } catch (error) {
      console.error(error);
      return "error during updating";
    }
  }
  async put(product: Omit<ProductEntity, "id">): Promise<string> {
    try {
      const response = await fetch("/api/products", {
        method: "PUT",
        body: JSON.stringify(product),
      });
      if (response.ok) {
        return "overwritten successfully";
      }
      return "error during overwritting";
    } catch (error) {
      console.error(error);
      return "error during overwritting";
    }
  }
  async delete(id: string): Promise<string> {
    try {
      const response = await fetch("/api/products/" + id, {
        method: "DELETE",
      });
      if (response.ok) {
        return "deleted successfully";
      }
      return "error during deleting";
    } catch (error) {
      console.error(error);
      return "error during deleting";
    }
  }
}
