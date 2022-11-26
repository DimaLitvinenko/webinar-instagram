import React, { useState, useEffect } from 'react';
import data from '../../data/images.json';
import { Photo } from './Photo';

export const Photos = () => {
    const [photos, setPhotos] = useState(data);

    useEffect(() => {
        setTimeout(() => {
            setPhotos((prevPhotos) => {
                return [
                    {
                        id:     Date.now(),
                        src:    'http://placebeard.it/g/640x640',
                        public: true,
                    },
                    ...prevPhotos,
                ];
            });
        }, 5000);
    }, [photos]);

    const photosJSX = photos.map((photo) => {
        return <Photo
            key = { photo.id }
            src = { photo.src }
            isSecured = { !photo.public } />;
    });

    return <div className = 'photos'>{ photosJSX }</div>;
};
