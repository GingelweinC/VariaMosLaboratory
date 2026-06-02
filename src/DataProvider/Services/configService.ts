import { Config } from "../../Config";

/**
 * Service for application configuration
 * Exposes environment-based settings
 */
export class ConfigService {
  getApiUrl(): string {
    return Config.API_URL;
  }

  getEnvironment(): string {
    return Config.ENVIRONMENT;
  }

  getLoginUrl(): string {
    return Config.LOGIN_URL;
  }

  getTimeout(): number {
    return Config.TIMEOUT;
  }

  getFeatureFlags(): Record<string, boolean> {
    return {
      ENABLE_COLLABORATION: false, // Not implemented yet
      ENABLE_ANALYTICS: true,
      ENABLE_EXPORT: true,
    };
  }
}

export default new ConfigService();
