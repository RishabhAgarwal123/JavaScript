import React, { Suspense } from 'react';

const LazyLoadedModule = React.lazy(() => import('./BigComponent'));

const ParentComponent = () => {
    return (
        <div>
            <h1>Parent Component</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyLoadedModule />
            </Suspense>
        </div>
    )
}

export default ParentComponent