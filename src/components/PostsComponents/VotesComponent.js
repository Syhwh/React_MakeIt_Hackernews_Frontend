import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
export function VotesComponent({votes}) {
    return (
        <div>
            <Button variant="secondary" >
            <FontAwesome name='thumbs-up' /> <strong> Vote </strong> 
           
            </Button>
        </div>
    )

}