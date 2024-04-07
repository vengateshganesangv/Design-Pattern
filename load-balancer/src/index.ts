import { RedirectionAPI } from "./apis/RedirectionAPI";
import { LoadBasedStrategy } from "./Manager/LoadBasedRedirectionManager";
import { Request } from "./Data/Request";

const loadBasedApi = new RedirectionAPI(new LoadBasedStrategy());

const mockRequest: Request = { path: "/api/data", method: "GET" };

try {
  const response = loadBasedApi.manageRedirection(mockRequest);
  console.log(response);
} catch (error) {
  console.error(error);
}
