import React from 'react';

type PersonProps = {
    name: string;
};

const Person = ({ name }: PersonProps) => {
    return <div>Person {name} </div>;
};

export default Person;
