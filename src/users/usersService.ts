// src/users/usersService.ts
import { User, UUID } from "./user";
import { InvalidName } from "./error";

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;

export class UsersService {
  public get(id: UUID, name: string): User {

    if (name.length > 10) {
      throw new InvalidName({name})

    }
    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }

  

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000).toString(), // Random
      status: "Happy",
      ...userCreationParams,
    };
  }
}