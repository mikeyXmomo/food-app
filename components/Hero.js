import 'twin.macro';

const Hero = () => {
	return (
		<div tw="bg-black w-full h-full flex bg-white md:bg-food-hero justify-center inset-0 bg-no-repeat bg-center bg-cover">
			<div tw="w-full h-full flex justify-center inset-0 md:bg-black md:bg-opacity-50  ">
				<div tw="md:w-3/5 w-full h-600 flex flex-col py-8 text-center ">
					<h4 tw="md:text-white text-blue-999 my-4 font-monserrat font-bold text-base md:text-2xl leading-8 tracking-wide">
						Food app
					</h4>
					<h1 tw="md:text-white text-blue-999 my-4 font-poppins font-bold text-4xl md:text-5xl leading-relaxed tracking-wide ">
						Why stay hungry when you can order from Bella Onojie
					</h1>
					<h4 tw="md:text-white text-gray-999 my-4 font-monserrat text-2xl leading-8 tracking-wide">
						Download the Bella Onojie food app now on
					</h4>
					<div tw="pt-8">
						<button tw="py-2 px-12 mx-4 my-2 font-monserrat text-2xl text-white bg-orange-999 rounded-full border border-orange-999 hover:bg-transparent hover:border-white transition-all duration-300 ease-in-out">
							Playstore
						</button>
						<button tw="py-2 px-12 mx-4 my-2 font-monserrat text-2xl text-orange-999 md:text-white bg-transparent rounded-full border border-orange-999 md:border-white hover:bg-orange-999 hover:border-orange-999 transition-all duration-300 ease-in-out">
							App store
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
