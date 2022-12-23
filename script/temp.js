import { Octokit } from "octokit";

const auth = (await $`gh auth token`).toString().trim();
const octokit = new Octokit({ auth });

await octokit.request(
	`PUT /repos/JoshuaKGoldberg/testing-typescript-node-package/branches/main/protection`,
	{
		allow_deletions: false,
		allow_force_pushes: true,
		allow_fork_pushes: false,
		allow_fork_syncing: true,
		block_creations: false,
		branch: "main",
		enforce_admins: false,
		owner: "JoshuaKGoldberg",
		repo: "testing-typescript-node-package",
		required_conversation_resolution: true,
		required_linear_history: false,
		required_pull_request_reviews: null,
		required_status_checks: {
			checks: [
				{ context: "build" },
				{ context: "compliance" },
				{ context: "lint" },
				{ context: "markdown" },
				{ context: "package" },
				{ context: "packages" },
				{ context: "prettier" },
				{ context: "prune" },
				{ context: "spelling" },
				{ context: "test" },
			],
			strict: false,
		},
		restrictions: null,
	}
);
