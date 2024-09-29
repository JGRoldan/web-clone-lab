import type { UpwarType } from '@/types'
import { Image } from 'astro:assets'

export function ImageSlider({ data }: UpwarType) {
	return (
		<div className='mx-auto flex gap-5 snap-x snap-mandatory  w-full overflow-x-scroll overflow-y-hidden custom-scrollbar'>
			{data.map(({ url, alt, video }, key) => (
				<div
					className='grid w-full h-full flex-shrink-0 snap-center'
					key={key}
				>
					{video ? (
						<video
							src={url}
							autoPlay
							muted
							loop
							className='w-full object-cover'
						></video>
					) : (
						<img
							className='w-full object-cover'
							src={url}
							alt={alt}
							loading='lazy'
							decoding='async'
						/>
					)}
				</div>
			))}
		</div>
	)
}
