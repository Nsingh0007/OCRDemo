import React from 'react'
import "./pagination.css"
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { ArrowBackIcon, ArrowForwardIcon } from '../../assets/svg/svgCoponent';


const PaginationComponent = ({page,counts,onClick}) => {
    console.log("counts---->",counts);
    console.log("page---->",page);
    return (
        <Stack spacing={2}>
            <Pagination
                count={counts}
                // page={page}
                shape="rounded"
                onChange={onClick}
                renderItem={(item) => (
                    <PaginationItem
                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                    />
                )}
            />
        </Stack>
    )
}

export default PaginationComponent
