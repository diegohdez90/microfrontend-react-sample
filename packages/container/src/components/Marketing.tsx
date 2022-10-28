import React, { Suspense } from 'react';
const MarketingApp = React.lazy(() => import('marketing/Marketing'))
console.log(MarketingApp);

const Marketing = () => {

	return (
		<MarketingApp />
	);
}

export default Marketing;
