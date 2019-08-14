import { Button } from 'semantic-ui-react';
import React from 'react';

export default function OrangeButton(props) {
    return (
        <Button style={{ backgroundColor: '#f68a4d', color: 'white' }}>
            {props.children}
        </Button>
    );
}
