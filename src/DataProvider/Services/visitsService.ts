import axios from "axios";
import { ANALYTICS_CLIENT } from "../../Infraestructure/AxiosConfig";

/**
 * Service for tracking user visits and analytics
 * Records experiment access and simulation runs
 */
export class VisitsService {
  async trackExperimentAccess(experimentId: string): Promise<void> {
    try {
      await ANALYTICS_CLIENT.post("/visits/experiment", { experimentId });
    } catch (error) {
      console.error("Error tracking experiment access:", error);
    }
  }

  async trackSimulationRun(experimentId: string, duration: number): Promise<void> {
    try {
      await ANALYTICS_CLIENT.post("/visits/simulation", { experimentId, duration });
    } catch (error) {
      console.error("Error tracking simulation run:", error);
    }
  }

  async getUserActivity(userId: string): Promise<any> {
    try {
      const response = await ANALYTICS_CLIENT.get(`/visits/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user activity:", error);
      throw error;
    }
  }
}

export default new VisitsService();
