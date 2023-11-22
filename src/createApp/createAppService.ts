//import { main } from "../../builder/prepareApp";
import { CreateApp, ExpoConfig, jsonBase } from "./createApp";

import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';
const { spawn } = require('child_process');

    // A post request should not contain an id.
    export type CreateAppParams = {url: string, name: string, icon?: string;} //Pick<CreateApp, "url" | "icon" | "name">;
    const prepareApp = (payload: CreateAppParams) => {
      const jsonFile: ExpoConfig = {
          ...jsonBase,
          expo: {
              ...jsonBase.expo,
              name: payload.name,
              android: {
                ...jsonBase.expo.android,
                package: ('com.' + payload.name + '.app')
              }
          }
      }
      const appUriContent: string =  `export const appUri: string = "${payload.url}"`
      const dirPath = path.join(__dirname, '../../templateApp');
      fs.writeFileSync(path.join(dirPath, 'AppUri.ts'), appUriContent );
      fs.writeFileSync(path.join(dirPath, 'app.json'), JSON.stringify(jsonFile) );

      console.log(dirPath);
      //fs.writeFileSync(path.join(dirPath, (name +'.ts')), interfaceContent);
  
  }


  function executeShellCommand(command: string): Promise<void> {
      return new Promise((resolve, reject) => {
          exec(command, (error, stdout, stderr) => {
              if (error) {
                  console.error(`Erreur d'exécution : ${error.message}`);
                  reject(error);
                  return;
              }
              if (stderr) {
                  console.error(`Erreur : ${stderr}`);
                  reject(new Error(stderr));
                  return;
              }
              console.log(`Sortie : ${stdout}`);
              resolve();
          });
      });
  }

function runEasBuild() {
  const dirPath = path.join(__dirname, '../../templateApp');

  const easBuild = spawn("eas", ["build", "--profile", 'productionAPK', '--platform', 'android'], {
    cwd: dirPath,
    stdio: ['pipe', 'inherit', 'inherit'], // 'pipe' pour stdin
  });

  easBuild.stdin.setEncoding('utf-8');

  easBuild.stdout.on('data', async(data: string) => {
    console.log(`stdout: ${data}`);
    if (data.includes('What would you like your Android application id to be?')) {
      easBuild.stdin.write('\r'); 
    }
    if (data.includes('Generate a new Android Keystore?')) {
      easBuild.stdin.write('y'); 
    }
  });

  
    easBuild.on("close", (code: any) => {});
  }


    export class CreateAppService {
      public get(id: number, name?: string): CreateApp {
        return {
          url: "url string"
        };
      }
    
      public async create(payload: CreateAppParams): Promise<CreateApp> {
        prepareApp(payload);
        runEasBuild();
        return {
          url: "url created!",
          //...createAppCreationParams,
        };
      }
    }