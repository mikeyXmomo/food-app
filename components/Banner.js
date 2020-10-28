import 'twin.macro'

const Banner = () => {
	return (
		<div tw="w-full md:h-400 h-600 md:bg-black bg-blue-999 md:bg-food-banner md:bg-opacity-50 bg-center bg-cover bg-no-repeat">
			<div tw="w-full md:h-400 h-600 inset-0 flex justify-center items-center md:bg-black md:bg-opacity-50 ">
				<div tw="w-4/5 flex flex-col justify-center items-center text-white">
					<h2 tw="font-monserrat font-bold text-4xl text-center leading-10 tracking-wide my-4">
						Download the app now
					</h2>
					<h4 tw="font-monserrat font-medium text-2xl text-center leading-8 tracking-wide my-4">
						Available on your favorite store. Start your premium experience now
					</h4>
					<div tw="my-4 text-center">
						<button tw="px-12 py-4 mx-4 my-4 font-monserrat text-base bg-orange-999 border border-orange-999 rounded-xl">
							Playstore
						</button>
						<button tw="px-12 py-4 mx-4 my-4 font-monserrat text-base bg-transparent border border-white rounded-xl">
							App store
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
