import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
    const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json');
    const children = await res.json() as Child[];

    return { children }
}) satisfies PageServerLoad;
