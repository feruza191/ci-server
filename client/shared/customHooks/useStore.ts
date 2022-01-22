import { useContext } from 'react';

import { StoreContext } from '../store/StoreContext';

export function useStore() {
	const store = useContext(StoreContext);

	if (store === null) {
		throw new Error('Store cannot be null!');
	}

	return store;
}
