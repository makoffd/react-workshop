import React from 'react';

import Input from '#input';

export default function Search(props) {
    return (
        <div block="search">
            <Input
                {...props}
                mix={{ block: 'search', elem: 'input' }}
                type="search"
                />
        </div>
    );
}
