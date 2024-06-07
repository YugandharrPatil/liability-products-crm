import React from "react";

export default function ProductDescription({ description }: { description: string[] }) {
	return (
		<div className="max-w-5xl mx-auto">
			{description.map((para: string, index: number) => (
				<p key={index} className="my-4">
					{para}
				</p>
			))}
		</div>
	);
}
