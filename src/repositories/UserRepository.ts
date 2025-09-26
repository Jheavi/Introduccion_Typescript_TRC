import {
  Entity,
  EntityRepository,
  PartialEntityWithId,
} from "@/interfaces/EntityRepository";

interface UserEntity extends Entity {
  name: string;
  email: string;
  type: "admin" | "user";
  permissions: string[];
}

export class UserRepository implements EntityRepository<UserEntity> {
  async getAll(): Promise<UserEntity[]> {
    try {
      const response = await fetch("/api/users");
      if (response.ok) {
        const result: UserEntity[] = await response.json();
        return result;
      }
      return [];
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  async getById(id: string): Promise<UserEntity | null> {
    try {
      const response = await fetch("/api/users/" + id);
      if (response.ok) {
        const result: UserEntity = await response.json();
        return result;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async post(user: Omit<UserEntity, "id">): Promise<string> {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(user),
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
  async patch(user: PartialEntityWithId<UserEntity>): Promise<string> {
    try {
      const response = await fetch("/api/users/" + user.id, {
        method: "PATCH",
        body: JSON.stringify(user),
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
  async put(user: Omit<UserEntity, "id">): Promise<string> {
    try {
      const response = await fetch("/api/users", {
        method: "PUT",
        body: JSON.stringify(user),
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
      const response = await fetch("/api/users/" + id, {
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
