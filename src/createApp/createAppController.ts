import {
        Body,
        Controller,
        Get,
        Path,
        Post,
        Query,
        Route,
        SuccessResponse,
      } from "tsoa";
      import { CreateApp } from "./createApp";
      import { CreateAppService, CreateAppParams } from "./createAppService";
      
      @Route("createApp")
      export class CreateAppController extends Controller {
        @Get("{userId}")
        public async getUser(
          @Path() userId: number,
          @Query() name?: string
        ): Promise<CreateApp> {
          return new CreateAppService().get(userId, name);
        }
      
        @SuccessResponse("201", "Created") // Custom success response
        @Post()
        public async createCreateApp(
          @Body() requestBody: CreateAppParams
        ): Promise<void> {
          this.setStatus(201); // set return status 201
          new CreateAppService().create(requestBody);
          return;
        }
      }