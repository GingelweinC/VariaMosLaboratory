import axios from "axios";
import { EXTERNAL_CLIENT } from "../../Infraestructure/AxiosConfig";

/**
 * Service for domain restrictions and validations
 * Communicates with backend validation services
 */
export class RestrictionService {
  async validateProductLineStructure(productLineData: any): Promise<any> {
    try {
      const response = await EXTERNAL_CLIENT.post("/validate/product-line", productLineData);
      return response.data;
    } catch (error) {
      console.error("Error validating product line:", error);
      throw error;
    }
  }

  async validateSimulationConfiguration(config: any): Promise<any> {
    try {
      const response = await EXTERNAL_CLIENT.post("/validate/simulation-config", config);
      return response.data;
    } catch (error) {
      console.error("Error validating simulation configuration:", error);
      throw error;
    }
  }
}

export default new RestrictionService();
