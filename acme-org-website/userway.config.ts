// userway.config.ts
import type { Config } from "@userway/cicd-cli";
export default {
 organization: "acme-kuuzi",
 project: "acme-homepage",
 token: process.env.USERWAY_TOKEN,
 reportPaths: ['./uw-a11y-reports']
} satisfies Config;