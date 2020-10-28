import tw, { css } from 'twin.macro';

const LinkSidebar = tw.a`
    flex items-center justify-center text-3xl my-4 no-underline list-none transition duration-200 ease-in-out cursor-pointer text-black hover:text-orange-999
`;

const Sidebar = ({isOpen, setToggle}) => {
	return (
		<div
			css={[
				tw`fixed z-50 w-full h-full bg-white grid items-center inset-0 transition duration-300 ease-in-out`,
				isOpen ? tw`opacity-100 top-0` : tw`opacity-0 -top-100`
			]}
		>
			<button tw="absolute right-0 mt-6 mr-6 top-0 bg-transparent text-3xl cursor-pointer outline-none" onClick={setToggle}>
				<svg tw="w-8 h-8 fill-current text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			<div tw="grid grid-cols-1 grid-rows-4 text-center">
				<LinkSidebar>Home</LinkSidebar>
				<LinkSidebar>Product</LinkSidebar>
				<LinkSidebar>Faq</LinkSidebar>
				<LinkSidebar>Contact</LinkSidebar>
			</div>
		</div>
	);
};

export default Sidebar;
