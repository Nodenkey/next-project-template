export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<button className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
				<p className='fixed left-0 top-0 flex w-full space-x-2.5 hover:space-x-3.5 justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 duration-300 hover:border-gray-400 lg:border-gray-400 lg:p-4 lg:dark:bg-zinc-800/30'>
					<span>View the docs</span> <span className='text-3xl -mt-8 h-1 duration-200'>&rarr;</span>
				</p>
			</button>

			<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
				<h2 className='font-bold text-3xl lg:text-5xl text-center'>Next js starter template</h2>
			</div>
			<div />
		</main>
	);
}
