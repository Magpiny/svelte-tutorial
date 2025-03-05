import { users } from './data';

export function load() {
	return {
		summaries: users.map((user) => ({
			slug: user.slug,
			name: user.name
		}))
	};
}
