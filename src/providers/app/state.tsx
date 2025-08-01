'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface IStateContext {
	state?: object;
	setState?: React.Dispatch<React.SetStateAction<object>>;
}

export const StateContext = createContext<IStateContext>({});

export const useStateContext = () => useContext(StateContext);

export function StateProvider({ children }: { children: React.ReactNode }) {
	const [state, setState] = useState({});

	useEffect(() => {
		console.log('STATE: ', state);
	}, [state]);

	return (
		<StateContext.Provider value={{ state, setState }}>
			{children}
		</StateContext.Provider>
	);
}
