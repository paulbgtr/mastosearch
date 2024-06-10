import type { GenericResponse } from "../types/GenericResponse";

export class MastodonInstancesAPI {
  private apiKey: string;
  private readonly baseURL = "https://instances.social/api/1.0/instances/list";

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private createURLWithParams = (params: Record<string, string>) => {
    const url = new URL(this.baseURL);

    for (const [key, value] of Object.entries(params)) {
      url.searchParams.append(key, value);
    }
    return url.toString();
  };

  private fetchInstances = async (url: string) => {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });

    const data = (await res.json()) as GenericResponse;
    return data.instances || [];
  };

  /**
   * A function which utilizes an external API to get a list of Mastodon instances that belong to a specific category.
   *
   * @param apiKey
   * @param category
   * @returns A list of Mastodon instances that belong to a specific category
   */
  public getInstancesByCategory = async (category: string) => {
    const url = this.createURLWithParams({ category });

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });

    const data = (await response.json()) as GenericResponse;
    return data.instances || [];
  };

  public getInstancesByFilters = async (
    userCount: string,
    prohibitedContent: string[]
  ) => {
    const url = this.createURLWithParams({
      min_active_users: userCount,
      prohibited_content: prohibitedContent.join(","),
    });

    return this.fetchInstances(url);
  };
}
