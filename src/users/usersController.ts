// src/users/usersController.ts
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  Response,
  Example,
  SuccessResponse,
} from "tsoa";
import { User } from "./user";
import { UsersService, UserCreationParams } from "./usersService";
import { InvalidName } from "./error";
 

interface ValidateErrorJSON {
  message: "Validation failed";
  details: { [name: string]: unknown };
}
// we are defining a /users/ route using @Route decorator
// similar as if we are using app.get('users/"userId')
@Route("users")
export class UsersController extends Controller {
  //description -> to let users better understand what this function is about
  /**
   * Retrieves the details of an existing user.
   * Supply the unique user ID from either and receive corresponding user details.
   * @param userId The user's identifier
   * @param name Provide a username to display
   */

  //example response 

  // Task 
  // add a constructor to be shared across the methods 
  @Example<User>({
    id: "52907745-7672-470e-a803-a2f8feb52944",
    name: "tsoa user",
    email: "hello@tsoa.com",
    phoneNumbers: [],
    status: "Happy",
  })
  @Get("{userId}")
  public async getUser(
    @Path() userId: string,
    @Query() name: string
  ): Promise<User | void> {
    try {
      const userDetails = new UsersService().get(userId, name);
      this.setStatus(200)
      return userDetails
    } catch(err) {
        if (err instanceof InvalidName) {
          return 
        }
    }
  }
  @Response<ValidateErrorJSON>(422, "Validation Failed")
  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    new UsersService().create(requestBody);
    return;
  }
}
