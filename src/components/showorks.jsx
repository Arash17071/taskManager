import React from 'react'
import { Button } from 'react-bootstrap';


const Workser = ({worksubject,workgroup,workdefine,workdate,worklen,deletedWork}) =>{
    return(
        <tr>
            <th>-</th>
            <th>{`${workdate}`}</th>
            <th>{`${worksubject}`}</th>
            <th>{`${workgroup}`}</th>
            <th>{`${workdefine}`}</th>
            <th>
                <Button onClick={deletedWork} size="sm" variant="danger">حذف کار</Button>
            </th>
        </tr>
    )
};


export default Workser;