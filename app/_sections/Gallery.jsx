"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "../_constants";

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState(galleryImages[0]);
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);


	const handleImageClick = (src) => {
		setSelectedImage(src);
	};

	const handleThumbnailClick = (src) => {
		setSelectedImage(src);
		setIsLightboxOpen(true);
	};

	const closeLightbox = () => {
		setIsLightboxOpen(false);
	};

	return (
		<section className='p-4'>
			<div className='max-w-6xl mx-auto'>
				<div className='flex justify-end gap-2'>
					<button className='bg-[#00357B] py-4 px-12 rounded-md text-sm font-semibold hover:scale-105 transition-all'>
						EXTERIORS
					</button>
					<button className='border border-[#00357B] text-[#00357B] py-4 px-12 rounded-md text-sm font-semibold hover:scale-105 transition-all'>
						INTERIORS
					</button>
				</div>

				{/* Lightbox overlay */}

				{isLightboxOpen && (
					<div
						className='fixed top-0 left-0 w-full h-full bg-[#000000]/50 backdrop-blur shadow-xl flex justify-center items-center z-50 '
						onClick={closeLightbox}
					>
						<p className='absolute bottom-20 sm:top-6 text-[#fff]/70'>
							Click anywhere to EXIT
						</p>
						<div className='relative object-contain w-[350px] sm:w-[600px]  md:w-[80%] h-[180px] sm:h-[300px] md:h-[80%] '>
							<Image
								src={selectedImage}
								alt='Selected'
								fill
								className='rounded-xl'
							/>
						</div>
					</div>
				)}

				{/* Main image (clickable for lightbox) */}
				<p className='text-[#00357B] text-center text-sm mt-8 mb-4'>
					Tap below image to view in full screen.
				</p>
				<div
					className='relative w-full h-52 sm:h-64 md:h-[400px] lg:h-[500px] transition cursor-pointer'
					onClick={() => handleThumbnailClick(selectedImage)}
				>
					<Image
						src={selectedImage}
						alt='Selected'
						fill
						className='rounded-xl object-cover'
					/>
				</div>

				{/* Thumbnail grid */}
				<div className='grid grid-cols-4 gap-4 mt-8 mb-6'>
					{galleryImages
						.filter((src) => src !== selectedImage)
						.map((src, index) => (
							<div
								key={index}
								onClick={() => handleImageClick(src)}
								className='relative w-full h-16 sm:h-28 md:h-32 cursor-pointer transition hover:scale-105'
							>
								<Image
									src={src}
									alt={`Image ${index + 1}`}
									fill
									className='object-cover rounded-lg'
								/>
							</div>
						))}
				</div>
				<p className='text-[#00357B] text-center text-sm'>
					Click an image to view it larger above.
				</p>
			
			</div>
		</section>
	);
};

export default Gallery;
