import { QueryClient } from "@tanstack/react-query";

/**
 * Singleton instance of QueryClient.
 *
 * This is necessary to use the same context in both the main application and the ladle.
 */
const queryClient = new QueryClient();

export default queryClient;
