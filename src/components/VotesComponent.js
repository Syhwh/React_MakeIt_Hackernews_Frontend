import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
export function VotesComponent() {
    return (
        <div>
            <Button variant="secondary" >
            <strong>  <FontAwesome name='thumbs-up' /></strong>   <Badge pill variant="light">9</Badge> 
              </Button>
        </div>
    )

}