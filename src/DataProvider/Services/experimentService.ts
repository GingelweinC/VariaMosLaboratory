import axios from "axios";
import { EXPERIMENTS_CLIENT } from "../../Infraestructure/AxiosConfig";

/**
 * Service for experiment management
 * Handles CRUD operations for experiments
 */
export class ExperimentService {
  async getExperimentsByUser(userId: string): Promise<any> {
    try {
      const response = await EXPERIMENTS_CLIENT.get(`/users/${userId}/experiments`);
      return response.data;
    } catch (error) {
      console.error("Error fetching experiments:", error);
      throw error;
    }
  }

  async getExperiment(experimentId: string): Promise<any> {
    try {
      const response = await EXPERIMENTS_CLIENT.get(`/experiments/${experimentId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching experiment:", error);
      throw error;
    }
  }

  async createExperiment(experimentData: any): Promise<any> {
    try {
      const response = await EXPERIMENTS_CLIENT.post("/experiments", experimentData);
      return response.data;
    } catch (error) {
      console.error("Error creating experiment:", error);
      throw error;
    }
  }

  async updateExperiment(experimentId: string, experimentData: any): Promise<any> {
    try {
      const response = await EXPERIMENTS_CLIENT.put(`/experiments/${experimentId}`, experimentData);
      return response.data;
    } catch (error) {
      console.error("Error updating experiment:", error);
      throw error;
    }
  }

  async deleteExperiment(experimentId: string): Promise<void> {
    try {
      await EXPERIMENTS_CLIENT.delete(`/experiments/${experimentId}`);
    } catch (error) {
      console.error("Error deleting experiment:", error);
      throw error;
    }
  }
}

export default new ExperimentService();
