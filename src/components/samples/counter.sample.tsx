'use client';

import { useHookstate, useHookstateEffect } from '@hookstate/core';

import useClientSide from '@/core/hooks/utils/useClientSide';
import { useGlobalStatePersist } from '@/store/persist';

export default function CounterSample() {
	const gStateP = useGlobalStatePersist();
	const counter = useHookstate(gStateP.sample.counter);
	const { isBrowser } = useClientSide(); // prevent hydration error

	useHookstateEffect(() => {
		console.log('Counter: ', counter.get({ noproxy: true }));
	}, [counter]);

	return (
		<div className="text-center">
			<div>Counter: {isBrowser && counter.value}</div>

			<div className="mt-6 flex items-center gap-4">
				<button
					className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
					onClick={() => {
						counter.set((n: number) => n - 1);
					}}
				>
					Decrement
				</button>
				<button
					className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
					onClick={() => {
						counter.set((n: number) => n + 1);
					}}
				>
					Increment
				</button>
			</div>
		</div>
	);
}
