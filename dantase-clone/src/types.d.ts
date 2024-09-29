interface UpwardMediaType {
	id: string
	url: string
	video: boolean
	alt?: string
}
export interface UpwarType {
	data: UpwardMediaType[]
}
interface dataCompanyType {
	logo: string
	titleSpan: string
	restTitle: string
	paragraphs: string[]
	pills: string[]
	colorSpan: string
}

export interface CompanyType {
	data: dataCompanyType[]
}
