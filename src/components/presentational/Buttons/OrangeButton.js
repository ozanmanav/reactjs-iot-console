import { Button } from 'semantic-ui-react';
import React from 'react';

export default function OrangeButton(props) {
    return (
        <Button style={{ backgroundColor: 'orange', color: 'white' }}>
            {props.children}
        </Button>
    );
}
