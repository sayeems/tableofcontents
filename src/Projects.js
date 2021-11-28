import {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Grid,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    Stack,
    Fab,
    CheckCircle
} from '@mui/material';

import {
    GitHub,
    InsertLink,
    Done
} from '@mui/icons-material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Projects = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

      useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get('projects.json');
            setData(res.data);
            setLoading(false);
        }
        return fetchData();
    }, []);
    return ( 
        <Grid item xs={12}>
            {!loading && <>
            <h1 style={{marginBottom:'5px'}}><img src="/favicon.ico" alt="" style={{width:'25px',marginRight:'10px'}}/>{data.pageTitle}</h1>
            <Divider />
            <TableContainer style={{marginTop:'30px'}}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead style={{backgroundColor:'#292929'}}>
                        <TableRow>
                            {data.tableHeads.map((head, index)=><>
                                <TableCell style={{color:'#ffffff', fontWeight:'bold'}} key={`head_${index}`}>{head}</TableCell>
                            </>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.tableBody.map((body, index)=><>
                            <TableRow key={`body_${index}`}>
                                {body.map((b,i)=><>
                                <TableCell key={`con_${i}`}>
                                    {Array.isArray(b) ? b.map((c,ndx)=> <Chip icon={<CheckCircleIcon />} color="info" size="small" style={{marginRight:'2px'}} label={c} key={`chip_${ndx}`}/>
                                    )
                                    : typeof(b) == "object" ? 
                                    <>
                                    <Fab target="_blank" href={b.github} size="small" color="secondary">
                                        <GitHub />
                                    </Fab>
                                    <Fab style={{marginLeft:'5px'}} target="_blank" href={b.live} size="small" color="primary">
                                        <InsertLink />
                                    </Fab>
                                    </>
                                    : b}
                                </TableCell>
                                </>)}
                            </TableRow>
                        </>)}
                    </TableBody>
                </Table>
            </TableContainer>
            </>}
        </Grid>
    );
}
 
export default Projects;