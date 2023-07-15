import React from 'react';

const Hello = () => {
/*     return (
        <div>
            <h1>Hello Yicheng</h1>
        </div>
    ) */
    return React.createElement('div', {id: 'hello', className: 'dummy-class'}, React.createElement('h1', null, 'Hello Yicheng'));

}

export default Hello;