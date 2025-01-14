import AccessoriesImage from "@/images/7oh-powder.png";
import ApparelImage from "@/images/7ohpills.png";

export const config = {
	categories: [
		{ name: "Kratom", slug: "kratom", image: ApparelImage },
		// { name: "Other", slug: "other", image: AccessoriesImage },
		{ name: "Sample", slug: "sample", image: AccessoriesImage },
	],

	social: {
		x: "https://x.com/yourstore",
		facebook: "https://facebook.com/yourstore",
	},

	contact: {
		email: "support@yourstore.com",
		phone: "+1 (555) 111-4567",
		address: "123 Store Street, City, Country",
	},
};

export type StoreConfig = typeof config;
export default config;
