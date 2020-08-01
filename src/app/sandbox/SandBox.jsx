import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { Increment, Decrement } from './testReducer';

export default function SandBox() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.test.data);

    return (
        <>
            <h1>Testing 123</h1>
            <h3>the date is: {data}</h3>
            <Button onClick={() => dispatch(Increment(3))}content='Increment' color='green' />
            <Button onClick={() => dispatch(Decrement(2))}content='Decrement' color='red' />
        </>
    )
}
