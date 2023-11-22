// src/app.ts
//import express, {json, urlencoded} from "express";
import { RegisterRoutes } from "../build/routes";
import express, { Response as ExResponse, Request as ExRequest, json, urlencoded } from "express";
import swaggerUi from "swagger-ui-express";
import path from "path";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(
      swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
  });

app.use(express.static(path.join(__dirname, "../webApp/webtoappconverter/build"))); 

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../webApp/webtoappconverter/build", "index.html"));
  });

app.use(json());

RegisterRoutes(app);