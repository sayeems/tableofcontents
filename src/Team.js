import {useEffect, useState} from 'react';
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
    Paper
} from '@mui/material';

import {
    GitHub,
    InsertLink
} from '@mui/icons-material';

const Team = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

      useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get('team.json');
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
                {data.description.map((txt,ind)=><>
                <p key={`txt_${ind}`}>{txt}</p>
                </>)}
                {/* members */}
                <Grid container spacing={2}>
                    {data.team.map((t,index)=><>
                        <Grid item md={3} xs={6} key={`tm_${index}`}>
                            <Paper style={{padding:'15px', backgroundColor:'#fefefe', position:'relative'}} className="teamCard" >
                                <img src={t.image} alt="" />
                                <h4>{t.name}</h4>
                                <h6>{t.designation}</h6>
                                <Divider />
                                <h5>{t.title}</h5>
                                <p className="flag">{t.country}</p>
                            </Paper>
                        </Grid>
                        
                    </>)}
                </Grid>
            
            </>}
        </Grid>
     );
}
 
export default Team;