import React from 'react';
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import UserList from '../requests/Request'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const requests = () => {
    return (
       <Admin dataProvider={dataProvider} >
           <Resource name="users" list={UserList}/>
       </Admin>
    );
}

export default requests;
