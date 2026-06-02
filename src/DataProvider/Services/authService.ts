import axios from "axios";
import { ResponseModel } from "@variamosple/variamos-components";
import { AUTH_CLIENT } from "../../Infraestructure/AxiosConfig";

/**
 * Service for user authentication
 * Handles login, logout, session validation
 */
export class AuthService {
  async login(credentials: { email: string; password: string }): Promise<ResponseModel<any>> {
    try {
      const response = await AUTH_CLIENT.post("/login", credentials);
      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await AUTH_CLIENT.post("/logout");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }

  async validateSession(): Promise<ResponseModel<any>> {
    try {
      const response = await AUTH_CLIENT.get("/validate-session");
      return response.data;
    } catch (error) {
      console.error("Error validating session:", error);
      throw error;
    }
  }
}

export default new AuthService();
