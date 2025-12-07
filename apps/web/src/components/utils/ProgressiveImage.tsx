"use client";

import { useEffect, useState } from "react";
import { twMerge, type ClassNameValue } from "tailwind-merge";

const useProgressiveImg = (
	lowQualitySrc: string,
	highQualitySrc: string
): [string, { blur: boolean }] => {
	const [src, setSrc] = useState(lowQualitySrc);
	useEffect(() => {
		setSrc(lowQualitySrc);
		const img = new Image();
		img.src = highQualitySrc;
		img.onload = () => {
			setSrc(highQualitySrc);
		};
	}, [lowQualitySrc, highQualitySrc]);
	return [src, { blur: src === lowQualitySrc }];
};

export default function ProgressiveImage({
	ting,
	normal,
	alt,
	className,
}: {
	ting: string;
	normal: string;
	alt: string;
	className?: ClassNameValue;
}) {
	const [src, { blur }] = useProgressiveImg(ting, normal);
	return (
		<img
			className={twMerge(className)}
			src={src}
			alt={alt}
			width={800}
			height={600}
			style={{
				filter: blur ? "blur(4px)" : "none",
				transition: blur ? "none" : "filter 0.3s ease-out",
			}}
		/>
	);
}
