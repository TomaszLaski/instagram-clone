import React from 'react';
import Skeleton from 'react-loading-skeleton';


export default function Timeline() {
    const photos = [1,2,3,4,5];
    
    return (
        <div className="container col-span-2">
            {!photos ? (
                <Skeleton count={4} width={640} height={500} className="mb-5" />
            ) : (
                photos.map((content) => <p>I will be a photo!</p>)
            )}
        </div>
    );
}