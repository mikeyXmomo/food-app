import tw, { css } from 'twin.macro';
import Image from 'next/image'

const Info = ({ imgStart, heading, title, subtitle, img }) => {
	return (
		<div tw="w-full md:h-600 h-800 inset-0 flex justify-center my-8">
			<div css={[ tw`w-4/5 md:w-4/6 flex justify-between items-center`, imgStart ? tw`md:flex-row flex-col` : tw`md:flex-row-reverse flex-col` ]}>
				<div tw="md:w-1/2 w-full">
					<Image unsized="true" src={img} css={[tw`w-full md:w-4/5 max-h-full mx-auto`, imgStart ? tw`mx-auto md:-ml-20` : tw`mx-auto md:ml-20`]} />
				</div>
				<div tw="flex flex-col justify-center text-center md:text-left md:justify-center md:w-1/2 w-full">
					<h3 tw="font-monserrat font-bold text-orange-999 text-2xl leading-8 tracking-wide">
						{heading}
					</h3>
					<h2 tw="font-monserrat font-bold text-blue-999 text-4xl leading-10 tracking-wide my-6">
						{title}
					</h2>
					<h4 tw="font-monserrat font-medium text-2xl text-gray-999 leading-9 tracking-wide">
						{subtitle}
					</h4>
				</div>
			</div>
		</div>
	);
};

export default Info;
