import { useEffect, useState } from "react";

export default function useErrorBoundary() {
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleError = () => {
            setError(error);
        }
        window.addEventListener('error', handleError);

        return () => {
            window.removeEventListener('error', handleError);
        }
    }, []);

    const resetError = () => {
        setError(null);
    }

    return { error, resetError };
}