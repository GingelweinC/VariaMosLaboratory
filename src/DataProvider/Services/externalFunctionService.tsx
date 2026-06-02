import axios from "axios";
import { EXTERNAL_CLIENT } from "../../Infraestructure/AxiosConfig";

/**
 * Service for calling external backend functions
 * Handles simulator, analyzer, and validator endpoints
 */
export class ExternalFunctionService {
  async callSimulationEngine(request: any): Promise<any> {
    try {
      const response = await EXTERNAL_CLIENT.post("/simulation/execute", request);
      return response.data;
    } catch (error) {
      console.error("Error calling simulation engine:", error);
      throw error;
    }
  }

  async callAnalyzer(request: any): Promise<any> {
    try {
      const response = await EXTERNAL_CLIENT.post("/analysis/execute", request);
      return response.data;
    } catch (error) {
      console.error("Error calling analyzer:", error);
      throw error;
    }
  }

  async callValidator(request: any): Promise<any> {
    try {
      const response = await EXTERNAL_CLIENT.post("/validation/execute", request);
      return response.data;
    } catch (error) {
      console.error("Error calling validator:", error);
      throw error;
    }
  }

  async getAvailableFunctions(functionType: string): Promise<any> {
    try {
      const response = await EXTERNAL_CLIENT.get(`/functions?type=${functionType}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching available functions:", error);
      throw error;
    }
  }
}

export default new ExternalFunctionService();
