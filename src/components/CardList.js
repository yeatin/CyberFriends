import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // throw new Error("nooooo");
    return (
        <div>
            {
                robots.map((user) => {
                    return (
                        <Card
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;