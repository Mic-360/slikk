import { IconCircleCheck, IconHanger, IconShieldCheck, IconTruckReturn } from '@tabler/icons-react';

export const BENEFITS = [
	{
		icon: IconShieldCheck,
		label: 'Secure Payments',
		desc: '100% protection',
	},
	{
		icon: IconCircleCheck,
		label: 'Genuine Product',
		desc: 'Verified quality',
	},
	{
		icon: IconHanger,
		label: 'Try & Buy',
		desc: 'Convenience first',
	},
	{
		icon: IconTruckReturn,
		label: '7 Day Return',
		desc: 'Hassle-free',
	},
];

export const NAVIGATION = {
	help: [
		{ label: 'Contact Us', href: '/help' },
		{ label: "FAQ's", href: '/help' },
		{ label: 'Track Order', href: '/orders' },
		{ label: 'Careers', href: '/careers' },
		{ label: 'Sitemap', href: '/sitemap.xml' },
	],
	quickLinks: [
		{ label: 'Offer Zone', href: '/offers' },
		{ label: 'Brands', href: '/brandlist' },
	],
	categories: [
		{ label: 'Top Wear', href: '/products?category=top%20wear' },
		{ label: 'Bottom wear', href: '/products?category=Bottom%20wear' },
		{ label: 'Athleisure', href: '/products?category=Athleisure' },
		{ label: 'Co-ords', href: '/products?category=Co-ords' },
		{ label: 'Dresses', href: '/products?category=Dresses' },
		{ label: 'Sleep Wear', href: '/products?category=Sleepwear' },
		{ label: 'Inner Wear', href: '/products?category=Innerwear' },
		{ label: 'Jumpsuits', href: '/products?category=Jumpsuits' },
	],
	policies: [
		{ label: 'Terms and Conditions', href: '/termsandconditions' },
		{ label: 'Privacy Policy', href: '/privacy' },
		{ label: 'Refund Policy', href: '/refund' },
		{ label: 'Return & Exchange Policy', href: '/returnExchange' },
		{ label: 'Shipping Policy', href: '/shipping' },
	],
};

export const CATALOGUE_ITEMS = [
  {
	id: 1,
	name: 'MOKOBARA',
	image:
	  'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/1de040b4d8e846028ee783c0c57af51d_Mokabora%20(1).png',
	link: 'https://www.slikk.club/products?banner_id=5943&namex=MOKOBARA',
	color: 'bg-[#FDF8F4]',
  },
  {
	id: 2,
	name: 'The Indian Garage Co',
	image:
	  'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/aa30258be83d4ec899a3aaf12d4cbe5f_the%20indian%20garage%20co.webp',
	link: 'https://www.slikk.club/products?banner_id=5856&namex=The%20Indian%20Garage%20Co',
	color: 'bg-[#F2F4F7]',
  },
  {
	id: 3,
	name: 'The Souled Store',
	image:
	  'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/570b00efe6ab4838ac76bb1c5edf0eb7_souled_store.webp',
	link: 'https://www.slikk.club/products?banner_id=4883&namex=The%20Souled%20Store',
	color: 'bg-[#FFF9F9]',
  },
  {
	id: 4,
	name: 'Bauge',
	image:
	  'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/3eed69d30d5341309719f6a0f51d063b_BaugeBagsy.png',
	link: 'https://www.slikk.club/products?banner_id=5386&namex=Bauge',
	color: 'bg-[#F8F9FF]',
  },
  {
	id: 5,
	name: 'Soch',
	image:
	  'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/2ad35585ff224786a235eab54290d2ef_soch-1.png',
	link: 'https://www.slikk.club/products?banner_id=5904&namex=Soch',
	color: 'bg-[#FFF5F5]',
  },
  {
	id: 6,
	name: 'Backpacks',
	image:
	  'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/d7a653cf9e5946f4aa015403aaf2c56e_Gear%20Wesley%20FGear%20Square%20(1).webp',
	link: 'https://www.slikk.club/products?banner_id=5828&namex=Backpacks',
	color: 'bg-[#F5FBF5]',
  },
];

export const FESTIVE_ITEMS = [
	{
		id: 1,
		name: 'Festive Kurtas For Her',
		image:
			'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/76a8e115927e46ddab7afaae007f4694_festive_kurtas.webp',
		link: 'https://www.slikk.club/products?banner_id=5922&namex=Festive%20Kurtas%20For%20Her',
	},
	{
		id: 2,
		name: 'Festive Sarees',
		image:
			'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/ec71dfeed85b415a8c8228ba81cebbed_festive_sarees_2x.webp',
		link: 'https://www.slikk.club/products?banner_id=5921&namex=Festive%20Sarees',
	},
	{
		id: 3,
		name: 'Half Sarees',
		image:
			'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/0edfc7de0ab84ca7aaa05e2b6158c804_half%20sarees.webp',
		link: 'https://www.slikk.club/products?banner_id=5944&namex=Half%20Sarees',
	},
	{
		id: 4,
		name: 'Festive Mundu',
		image:
			'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/3bf473d3d1444c0e80a2485fb87ea795_festive_mund_2x.webp',
		link: 'https://www.slikk.club/products?banner_id=5925&namex=Festive%20Mundu',
	},
];

export type CuratedItem = {
  id: number;
  name: string;
  image: string;
  href: string;
};

export type CuratedTrack = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  ctaHref: string;
  items: CuratedItem[];
};

export const CURATED_TRACKS: CuratedTrack[] = [
	{
		id: 'for-her',
		badge: 'For Her',
		title: 'The Curated — Her Edit',
		subtitle:
			'Everything from elevated everyday fits to statement accessories.',
		heroImage:
			'/her.png',
		heroAlt: 'Curated women fashion banner',
		ctaHref: '/products?banner_id=3931&namex=Tops',
		items: [
			{
				id: 3931,
				name: 'Tops',
				href: 'https://www.slikk.club/products?banner_id=3931&namex=Tops',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/f683ccdf165e47d2ac14dce86e35f414_tops_4x.webp',
			},
			{
				id: 3930,
				name: 'Dresses',
				href: 'https://www.slikk.club/products?banner_id=3930&namex=Dresses',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/93324dce5ff846d2b0e260c773c1c7b6_dresses_4x.webp',
			},
			{
				id: 3933,
				name: 'Bottoms',
				href: 'https://www.slikk.club/products?banner_id=3933&namex=Bottoms',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/6465e35d46c0436094528b58a3b21976_bottoms_4x.webp',
			},
			{
				id: 3932,
				name: 'Kurtas',
				href: 'https://www.slikk.club/products?banner_id=3932&namex=Kurtas',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/fb2f14bb747243f38cd824fc7da31a0e_kurtas_4x.webp',
			},
			{
				id: 3934,
				name: 'Modern Jewellery',
				href: 'https://www.slikk.club/products?banner_id=3934&namex=Modern Jewellery',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/6bd3ba89fb15402c9538b4b83419267e_western_jewellery_4x.webp',
			},
			{
				id: 3935,
				name: 'Handbags',
				href: 'https://www.slikk.club/products?banner_id=3935&namex=Handbags',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/3798f9776692411494289871ab1c7ffd_handbags_4x.webp',
			},
			{
				id: 3936,
				name: 'Beauty',
				href: '/home?sub_page=Beauty',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/3f5d12eee15840e0a72f8d5efb68e53b_beauty_4x.webp',
			},
			{
				id: 5672,
				name: 'Footwear',
				href: 'https://www.slikk.club/products?banner_id=5672&namex=Footwear',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/2007eb1373e34ba0995a7f83722bcdbc_Flats.png',
			},
		],
	},
	{
		id: 'for-him',
		badge: 'For Him',
		title: 'The Curated — His Edit',
		subtitle: 'Clean staples, occasion picks, and travel-ready essentials.',
		heroImage:
			'/him.png',
		heroAlt: 'Curated men fashion banner',
		ctaHref: 'https://www.slikk.club/products?banner_id=3924&namex=Shirts',
		items: [
			{
				id: 3924,
				name: 'Shirts',
				href: 'https://www.slikk.club/products?banner_id=3924&namex=Shirts',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/dfcfb3b45fe74263ac157037f490c774_shirts_4x.webp',
			},
			{
				id: 3925,
				name: 'T-shirts',
				href: 'https://www.slikk.club/products?banner_id=3925&namex=T-shirts',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/0bbc187d6c8d4ba9b5bb403b6fddde4c_tshirts_4x.webp',
			},
			{
				id: 3927,
				name: 'Kurta',
				href: 'https://www.slikk.club/products?banner_id=3927&namex=Kurta',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/60d60e3e723e4c8693845cdd2914de4e_kurta.webp',
			},
			{
				id: 3926,
				name: 'Bottomwear',
				href: 'https://www.slikk.club/products?banner_id=3926&namex=Bottomwear',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/90b2af516fcf4ba2b63b890113d583ae_bottoms_4x.webp',
			},
			{
				id: 3929,
				name: 'Perfumes',
				href: 'https://www.slikk.club/products?banner_id=3929&namex=Perfumes',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/422d85377d494897a537789a89083a4f_fragrances_4x.webp',
			},
			{
				id: 3928,
				name: 'Footwear',
				href: 'https://www.slikk.club/products?banner_id=3928&namex=Footwear',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/8bd249f232db4a769599e57bdda67cd3_footwear_4x.webp',
			},
			{
				id: 4775,
				name: 'Trolley',
				href: 'https://www.slikk.club/products?banner_id=4775&namex=Trolley',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/a3f29dbf97944da4b482209c6091d143_trolley_4x.webp',
			},
			{
				id: 4776,
				name: 'Backpacks',
				href: 'https://www.slikk.club/products?banner_id=4776&namex=Backpacks',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/b1b968a3ce094daa82a55ba0fa25e4fe_backpacks_4x.webp',
			},
		],
	},
];

export type ProductCard = {
	id: number;
	name: string;
	href: string;
	image: string;
};

export type CollectionTrack = {
	id: 'bags' | 'jewellery' | 'home' | 'beauty' | 'athleisure';
	name: string;
	tagline: string;
	heroImage: string;
	heroAlt: string;
	accentGradientClass: string;
	badgeClass: string;
	products: ProductCard[];
};

export const COLLECTIONS: CollectionTrack[] = [
	{
		id: 'bags',
		name: 'Bags',
		tagline: 'Carry-everywhere styles with everyday swagger.',
		heroImage:
			'/bags.png',
		heroAlt: 'Bags collection hero',
		accentGradientClass: 'from-indigo-400/45 via-sky-300/20 to-transparent',
		badgeClass:
			'border-indigo-100/50 bg-indigo-200/20 text-indigo-50 backdrop-blur-sm',
		products: [
			{
				id: 4092,
				name: 'Slings',
				href: 'https://www.slikk.club/products?banner_id=4092&namex=Slings',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/384524e2e9b344e8a55054cdf375612a_slings_4x.webp',
			},
			{
				id: 4090,
				name: 'Totes',
				href: 'https://www.slikk.club/products?banner_id=4090&namex=Totes',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/c9ddc4f9238e4b4bb2dc37434d5f6e1e_totes_4x.webp',
			},
			{
				id: 4091,
				name: 'Party Bags',
				href: 'https://www.slikk.club/products?banner_id=4091&namex=Party%20Bags',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/0199a06d4254475aa2cfed7e3e3b710f_party_bags_4x.webp',
			},
			{
				id: 4094,
				name: 'Trolleys',
				href: 'https://www.slikk.club/products?banner_id=4094&namex=Trolleys',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/f0c93db9421549edab4866b30daa61eb_Trolley.png',
			},
			{
				id: 4089,
				name: 'Backpacks',
				href: 'https://www.slikk.club/products?banner_id=4089&namex=Backpacks',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/65ecab2e44864c6d8d1d81ec94b7a692_Backpacks.png',
			},
			{
				id: 4093,
				name: 'Duffle Bags',
				href: 'https://www.slikk.club/products?banner_id=4093&namex=Duffle%20Bags',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/5da0f037c7c7497cb6523d696b7211a4_Duffel%20Bag.png',
			},
		],
	},
	{
		id: 'jewellery',
		name: 'Jewellery',
		tagline: 'Tiny sparkles, major main-character moments.',
		heroImage:
			'/jewellry.png',
		heroAlt: 'Jewellery collection hero',
		accentGradientClass: 'from-fuchsia-400/45 via-pink-300/20 to-transparent',
		badgeClass:
			'border-fuchsia-100/50 bg-fuchsia-200/20 text-fuchsia-50 backdrop-blur-sm',
		products: [
			{
				id: 4827,
				name: 'Earrings',
				href: 'https://www.slikk.club/products?banner_id=4827&namex=Earrings',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/7d8458b069b84e5c921c1f77cef40382_earrings.png',
			},
			{
				id: 4826,
				name: 'Necklace',
				href: 'https://www.slikk.club/products?banner_id=4826&namex=Necklace',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/b9a9c2c772a446c39f9a7a8b18db5dd0_necklaces.png',
			},
			{
				id: 4830,
				name: 'Jewellery Sets',
				href: 'https://www.slikk.club/products?banner_id=4830&namex=Jewellery%20Sets',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/51f71a6e689445a8a29b1b5571eadc38_jewellery%20sets.png',
			},
			{
				id: 4828,
				name: 'Rings',
				href: 'https://www.slikk.club/products?banner_id=4828&namex=Rings',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/372cd744dacf41898fa98efef8cccd29_rings.png',
			},
			{
				id: 4831,
				name: 'Bracelets',
				href: 'https://www.slikk.club/products?banner_id=4831&namex=Bracelets',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/5f46576006f14b2ca4a40de03d5470a3_bracelets.png',
			},
			{
				id: 4829,
				name: 'Body Jewellery',
				href: 'https://www.slikk.club/products?banner_id=4829&namex=Body%20Jewellery',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/f7ca2b6336eb4676aa8e7227fc494c8a_body%20jewellery.png',
			},
		],
	},
	{
		id: 'home',
		name: 'Home',
		tagline: 'Mood-setting corners for every room in your story.',
		heroImage:
			'/home.png',
		heroAlt: 'Home collection hero',
		accentGradientClass: 'from-emerald-400/45 via-lime-300/20 to-transparent',
		badgeClass:
			'border-emerald-100/50 bg-emerald-200/20 text-emerald-50 backdrop-blur-sm',
		products: [
			{
				id: 2987,
				name: 'Bedsheets',
				href: 'https://www.slikk.club/products?banner_id=2987&namex=Bedsheets',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/d3149911ee654260becb84176d2b088e_Bedsheets.png',
			},
			{
				id: 2983,
				name: 'Lights & Lamps',
				href: 'https://www.slikk.club/products?banner_id=2983&namex=Lights%20%26%20Lamps',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/77a871755d38431fba0499ac7c0ddd0e_Lights%20Lamps.png',
			},
			{
				id: 2986,
				name: 'Show pieces',
				href: 'https://www.slikk.club/products?banner_id=2986&namex=Show%20pieces',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/f80c0dd844c542729c58ebbbeff9ba63_Showpieces.png',
			},
			{
				id: 2569,
				name: 'Decor Finds',
				href: 'https://www.slikk.club/products?banner_id=2569&namex=Decor%20Finds',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/a820f20a20304ae8ac3f12cc40b6a385_Decor%20finds.png',
			},
			{
				id: 2571,
				name: 'Curtains',
				href: 'https://www.slikk.club/products?banner_id=2571&namex=Curtains',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/af279747c7414bcabc61bdfb98486eae_Curtains.png',
			},
			{
				id: 2570,
				name: 'Home Basics',
				href: 'https://www.slikk.club/products?banner_id=2570&namex=Home%20Basics',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/40779a6e060f4bbd91fb5789329b280a_home%20basics.png',
			},
			{
				id: 5664,
				name: 'Bath mats',
				href: 'https://www.slikk.club/products?banner_id=5664&namex=Bath%20mats',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/cf2f0af4ad22413698d8f19be89f9c03_mats.png',
			},
			{
				id: 2984,
				name: 'Candles',
				href: 'https://www.slikk.club/products?banner_id=2984&namex=Candles',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/581215fdcf2a4da29fe9faf7876af790_Candles.png',
			},
			{
				id: 2985,
				name: 'Bottles',
				href: 'https://www.slikk.club/products?banner_id=2985&namex=Bottles',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/4847c5a7b08c4eb1ac1358aaff6a78ee_Bottles.png',
			},
		],
	},
	{
		id: 'beauty',
		name: 'Beauty',
		tagline: 'Glow kits, glam picks, and mirror-ready finishes.',
		heroImage:
			'/beauty.png',
		heroAlt: 'Beauty collection hero',
		accentGradientClass: 'from-rose-400/45 via-orange-300/20 to-transparent',
		badgeClass:
			'border-rose-100/50 bg-rose-200/20 text-rose-50 backdrop-blur-sm',
		products: [
			{
				id: 2532,
				name: 'Lipsticks',
				href: 'https://www.slikk.club/products?banner_id=2532&namex=Lipsticks',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/e68387e9dec74f0d9a95700a2d26fd84_Lipsticks3.png',
			},
			{
				id: 2537,
				name: 'Skincare',
				href: 'https://www.slikk.club/products?banner_id=2537&namex=Skincare',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/070d0e8c85e1461a8c1be8ff12d6d603_skincare_4x.webp',
			},
			{
				id: 2534,
				name: 'Fragrances',
				href: 'https://www.slikk.club/products?banner_id=2534&namex=Fragrances',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/b637e10c584341528ce4a33c15c864bc_fragrances_4x.webp',
			},
			{
				id: 2536,
				name: 'Hair care',
				href: 'https://www.slikk.club/products?banner_id=2536&namex=Hair%20care',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/d8c53e8c123248a9a0bd14712db6144d_haircare_4x.webp',
			},
			{
				id: 2533,
				name: 'Appliances',
				href: 'https://www.slikk.club/products?banner_id=2533&namex=Appliances',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/6b266c67509443f8852cae1ff733c6b2_appliances_4x.webp',
			},
			{
				id: 2535,
				name: 'Nails',
				href: 'https://www.slikk.club/products?banner_id=2535&namex=Nails',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/b2849a7ae0da403b8a0b530431e66f01_nails_4x.webp',
			},
		],
	},
	{
		id: 'athleisure',
		name: 'Athleisure',
		tagline: 'From warm-up to wind-down, move in style.',
		heroImage:
			'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/47fa467eaac5444c9cb88d457d1649aa_athleisure_web.webp',
		heroAlt: 'Athleisure collection hero',
		accentGradientClass: 'from-cyan-400/45 via-blue-300/20 to-transparent',
		badgeClass:
			'border-cyan-100/50 bg-cyan-200/20 text-cyan-50 backdrop-blur-sm',
		products: [
			{
				id: 5156,
				name: 'Active Tees & T-shirts',
				href: 'https://www.slikk.club/products?banner_id=5156&namex=Active%20Tees%20%26%20T-shirts',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/53ebc03d7bdf4f198b3df2b82bd03612_active_tees_t_shirts.webp',
			},
			{
				id: 5151,
				name: 'Leggings',
				href: 'https://www.slikk.club/products?banner_id=5151&namex=Leggings',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/3cb86e4baa094966b7de6d7ff036c6e6_leggings.webp',
			},
			{
				id: 5152,
				name: 'Sports Bra',
				href: 'https://www.slikk.club/products?banner_id=5152&namex=Sports%20Bra',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/b86b32dc63a84d91b92fa601411aa4c5_sports_bra.webp',
			},
			{
				id: 5155,
				name: 'Shorts',
				href: 'https://www.slikk.club/products?banner_id=5155&namex=Shorts',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/45ce820063124b0898ca6f2e55faadb5_shorts.webp',
			},
			{
				id: 5153,
				name: 'Sweatpants',
				href: 'https://www.slikk.club/products?banner_id=5153&namex=Sweatpants',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/2741130c28d14cb5af0185498dc68215_sweatpants.webp',
			},
			{
				id: 5154,
				name: 'Active Outerwear',
				href: 'https://www.slikk.club/products?banner_id=5154&namex=Active%20Outerwear',
				image:
					'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/350fa81148b14445be71c798247044c3_active_outwear.webp',
			},
		],
	},
];