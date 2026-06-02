import axios from "axios";
import { RESULTS_CLIENT } from "../../Infraestructure/AxiosConfig";

/**
 * Service for simulation results and analysis
 * Handles result retrieval, export, and metrics
 */
export class ResultsService {
  async getSimulationResults(simulationId: string): Promise<any> {
    try {
      const response = await RESULTS_CLIENT.get(`/simulations/${simulationId}/results`);
      return response.data;
    } catch (error) {
      console.error("Error fetching simulation results:", error);
      throw error;
    }
  }

  async getMetrics(simulationId: string): Promise<any> {
    try {
      const response = await RESULTS_CLIENT.get(`/simulations/${simulationId}/metrics`);
      return response.data;
    } catch (error) {
      console.error("Error fetching metrics:", error);
      throw error;
    }
  }

  async getAnalysisReport(experimentId: string): Promise<any> {
    try {
      const response = await RESULTS_CLIENT.get(`/experiments/${experimentId}/report`);
      return response.data;
    } catch (error) {
      console.error("Error fetching analysis report:", error);
      throw error;
    }
  }

  async exportResults(simulationId: string, format: "csv" | "json" | "pdf"): Promise<Blob> {
    try {
      const response = await RESULTS_CLIENT.get(
        `/simulations/${simulationId}/export?format=${format}`,
        { responseType: "blob" }
      );
      return response.data;
    } catch (error) {
      console.error("Error exporting results:", error);
      throw error;
    }
  }

  async compareSimulations(simulationIds: string[]): Promise<any> {
    try {
      const response = await RESULTS_CLIENT.post("/compare", { simulationIds });
      return response.data;
    } catch (error) {
      console.error("Error comparing simulations:", error);
      throw error;
    }
  }
}

export default new ResultsService();
