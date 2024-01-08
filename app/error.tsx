'use client';

import { Button, Tooltip } from '@nextui-org/react';
import { RxReload } from 'react-icons/rx';
import { useEffect } from 'react';


const Error = ({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) => {
    useEffect(() => {
        // log error 
        console.log(error)
    }, [error]);

    return (
        <div>
            <Tooltip content={error.message}>
                <h2>Error</h2>
                <Button onClick={() => reset()}>
                    <RxReload />
                </Button>
            </Tooltip>
        </div>
    )
}

export default Error;