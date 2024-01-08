'use client';

const GlobalError = ({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) => {
    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    )
}

export default GlobalError;