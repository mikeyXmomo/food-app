import 'twin.macro'
import Image from 'next/image'

const Apps = () => {
	return (
		<div tw="w-full h-full inset-0 flex justify-center items-center">
			<div tw="max-w-md md:-mt-56 -mt-12">
				<Image unsized="true" src="/apps.svg" tw="max-h-full max-w-full -ml-8" />
				<h1 tw="font-poppins text-black font-semibold text-2xl md:text-4xl leading-8 antialiased tracking-wide text-center ">
					How the app work
				</h1>
			</div>
		</div>
	);
};

export default Apps;
