import { CLIENT_ID, SCOPE } from "@env";

const baseUrl = {
  github: `https://github.com`,
  httpLocalMachine: `http://192.168.0.142:4000`,
};

const endPoints = {
  githubLoginOAuth: `${baseUrl.github}/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`,
};

export { endPoints, baseUrl };
