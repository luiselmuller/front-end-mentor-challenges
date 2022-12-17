export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bg-stars.svg","favicon.png","pattern-hills.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-3ba9a6e6.js","imports":["_app/immutable/start-3ba9a6e6.js","_app/immutable/chunks/index-87d57fde.js","_app/immutable/chunks/singletons-f3ca6a3d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
