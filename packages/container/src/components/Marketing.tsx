import React, { useRef, useEffect }  from 'react';
import { mount } from 'marketing/Marketing';

const Marketing = () => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		mount(ref.current as HTMLElement);
	});

	return (
		
		<React.Suspense>
			<div ref={ref}/>
		</React.Suspense>
	);
}

export default Marketing;
