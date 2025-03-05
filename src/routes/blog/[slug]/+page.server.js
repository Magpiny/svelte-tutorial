import { error } from '@sveltejs/kit';
import { users } from '../data';

export function load({ params }) {
	const user = users.find((user) => user.slug == params.slug);

	if (!user) error(404);

	return { user };
}
