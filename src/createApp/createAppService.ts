import { CreateApp } from "./createApp";

    // A post request should not contain an id.
    export type CreateAppParams = Pick<CreateApp, "url">;
    
    export class CreateAppService {
      public get(id: number, name?: string): CreateApp {
        return {
          url: "url string"
        };
      }
    
      public create(createAppCreationParams: CreateAppParams): CreateApp {
        return {
          url: "url created!",
          //...createAppCreationParams,
        };
      }
    }