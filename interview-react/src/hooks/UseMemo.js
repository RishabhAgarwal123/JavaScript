import React, { useMemo } from 'react';

function ExpensiveComponent({ num }) {
    // useMemo allows you to memoize the result of a computation, which can help optimize React components by avoiding unnecessary 
    // calculations when dependencies haven't changed.
    const factorial = useMemo(() => {
        const computeFactorial = (n) => {
            return n <= 1 ? 1 : n * computeFactorial(n - 1);
        };
        return computeFactorial(num);
    }, [num]); // Recompute only when `num` changes

    return <div>Factorial of {num} is {factorial}</div>;
}

export default ExpensiveComponent;
