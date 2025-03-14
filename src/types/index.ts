export type SeminarsItems = {
	date: string
	topic: string
	speaker: string
	cost: string
	format: string
	description: string
	learnWhat: string[]
	keyTopics: string[]
	forWhom: string[]
	contacts: Contact
}

type Contact = {
	phone: string
	email: string
}

export type AwardsAndBenefitsItems = {
	dot: string
	label: string
}

export type CoursesItems = {
	title: string
	description: string
	duration: string
	price: string
}

export type AdvantagesItems = {
	title: string
	desc: string
}

export type PatentItems = {
	title: string
	descr: string
	src: string
}

export type Teachers = {
	name: string
	bio: string
	achievements: string
	photo: string
}

export type Licenses = {
	title: string
	src: string
}

export type KnowledgeItems = {
	title: string
	category: string
	tags: string[]
	description: string
	type: string
	link: string
}
