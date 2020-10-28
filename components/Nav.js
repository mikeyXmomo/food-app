import Link from 'next/link';
import 'twin.macro';

export default function Nav({isOpen, setToggle}) {
	return (
		<nav tw="bg-fixed bg-white inset-0 flex justify-center">
			<div tw="w-4/5 flex justify-between items-center my-4 ">
				<div tw="sm:block">
					<img tw="md:w-2/3 w-1/2 cursor-pointer" src="/logo.png" />
				</div>
				<button tw="sm:hidden" onClick={setToggle}>
					<svg tw="w-8 h-8 text-gray-999" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
				<div>
					<ul tw="md:flex hidden text-gray-800 no-underline list-none">
						<li tw="font-monserrat font-medium text-base px-8  hover:text-orange-999 cursor-pointer">
							Home
						</li>
						<li tw="font-monserrat font-medium text-base px-8 hover:text-orange-999 cursor-pointer">
							Product
						</li>
						<li tw="font-monserrat font-medium text-base px-8 hover:text-orange-999 cursor-pointer">Faq</li>
						<li tw="font-monserrat font-medium text-base px-8 hover:text-orange-999 cursor-pointer">
							Contact
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
