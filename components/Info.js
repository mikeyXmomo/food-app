import tw, { css } from 'twin.macro';

const Info = ({ imgStart, heading, title, subtitle, img }) => {
	return (
		<div tw="w-full md:h-600 h-800 inset-0 flex justify-center my-8">
			<div css={[ tw`w-4/5 flex justify-between items-center`, imgStart ? tw`md:flex-row flex-col` : tw`md:flex-row-reverse flex-col` ]}>
				<div tw="md:w-1/2 w-full text-center">
					<img src={img} tw="max-w-full max-h-full" />
				</div>
				<div tw="flex flex-col justify-center text-center md:text-left md:justify-start md:w-1/2 w-full">
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
