import React, { useState, useEffect } from 'react'

const House = ({ house }: { house: HouseType }) => {
    const listingDate = new Date(house.listDate);
    const [isLiked, setIsLiked] = useState(false);

    // Get the liked properties from session storage and set the icon
    useEffect(() => {
        const likedIdsString = localStorage.getItem('likedMlsIds');
        const likedIds = likedIdsString ? JSON.parse(likedIdsString) : [];
        setIsLiked(house.mlsId && likedIds.includes(house.mlsId));
    }, []);

    const toggleLike = () => {
        let currentLikedIdsString = localStorage.getItem('likedMlsIds');
        let currentLikedIds = currentLikedIdsString ? JSON.parse(currentLikedIdsString) : [];
        if (currentLikedIds?.includes(house.mlsId)) {
            currentLikedIds = currentLikedIds?.filter((id: number) => id !== house.mlsId)
        } else {
            currentLikedIds?.push(house.mlsId)
        }
        localStorage.setItem('likedMlsIds', JSON.stringify(currentLikedIds))
        setIsLiked(!isLiked);
    };

    return (
        <div className='house-tile'>
            <img style={{ maxWidth: '100%', borderRadius: '3px' }} src={house.photos[0]}></img>
            <span className='like-button' onClick={toggleLike}>
                <img
                    className='heart-icon'
                    src={isLiked ? 'heart-fill.svg' : 'heart-stroke.svg'}
                    alt='Heart'
                />
            </span>
            <p style={{ fontWeight: 600, fontSize: '20px', color: '#2D2D2D' }}>
                {house.property.bedrooms} BR | {house.property.bathsFull + (house.property.bathsHalf / 2)} Bath | {house.property.area} Sq Ft
            </p>
            <p className='house-price'>{(house.listPrice / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            })}</p>
            <span className='house-address'>{house.address.streetNumberText} {house.address.streetName}, {house.address.city}, {house.address.state}</span>
            {/* TODO should be YY not YYYY */}
            <p style={{ fontSize: '14px', fontWeight: '400', color: '#979797' }}>Listed: {listingDate.toLocaleDateString()}</p>
        </div>
    )
}
export default House