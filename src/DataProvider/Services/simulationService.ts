import axios from "axios";
import { SIMULATIONS_CLIENT } from "../../Infraestructure/AxiosConfig";

/**
 * Service for simulation execution and management
 * Handles simulation runs, pause, resume, stop
 */
export class SimulationService {
  async getSimulationRuns(experimentId: string): Promise<any> {
    try {
      const response = await SIMULATIONS_CLIENT.get(`/experiments/${experimentId}/runs`);
      return response.data;
    } catch (error) {
      console.error("Error fetching simulation runs:", error);
      throw error;
    }
  }

  async startSimulation(experimentId: string, config: any): Promise<any> {
    try {
      const response = await SIMULATIONS_CLIENT.post(`/experiments/${experimentId}/run`, config);
      return response.data;
    } catch (error) {
      console.error("Error starting simulation:", error);
      throw error;
    }
  }

  async pauseSimulation(simulationId: string): Promise<void> {
    try {
      await SIMULATIONS_CLIENT.post(`/simulations/${simulationId}/pause`);
    } catch (error) {
      console.error("Error pausing simulation:", error);
      throw error;
    }
  }

  async resumeSimulation(simulationId: string): Promise<void> {
    try {
      await SIMULATIONS_CLIENT.post(`/simulations/${simulationId}/resume`);
    } catch (error) {
      console.error("Error resuming simulation:", error);
      throw error;
    }
  }

  async stopSimulation(simulationId: string): Promise<void> {
    try {
      await SIMULATIONS_CLIENT.post(`/simulations/${simulationId}/stop`);
    } catch (error) {
      console.error("Error stopping simulation:", error);
      throw error;
    }
  }

  async getSimulationStatus(simulationId: string): Promise<any> {
    try {
      const response = await SIMULATIONS_CLIENT.get(`/simulations/${simulationId}/status`);
      return response.data;
    } catch (error) {
      console.error("Error fetching simulation status:", error);
      throw error;
    }
  }
}

export default new SimulationService();
