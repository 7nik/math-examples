import type { Handle } from "@sveltejs/kit";
const handle: Handle = function handle({ event, resolve }) {
	return resolve(event, {
		ssr: !event.url.pathname.startsWith('/Graph')
	});
}
export { handle };
