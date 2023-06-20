// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		baseURL: "/nuxt-demo",
	},
	ssr: false,
	typescript: {
		strict: true,
		typeCheck: true,
	},
	experimental: {
		payloadExtraction: false,
	},
});
