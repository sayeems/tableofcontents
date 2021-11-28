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
    Paper,
    Avatar
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
                        <Grid item md={4} lg={4} xs={12} md={6} key={`tm_${index}`}>
                            <Paper style={{padding:'15px', backgroundColor:'#fefefe', position:'relative'}} className="teamCard" >
                                <Stack direction="row" spacing={2}>
                                    {
                                    t.image ? 
                                    <Avatar 
                                    src={t.image}
                                    sx={{width:100, height:100}}
                                    />
                                    :
                                    <Avatar
                                    sx={{width:100, height:100}}
                                    >{t.name.split("")[0]}</Avatar>
                                    }
                                    <Stack direction="column" sx={{width:'100%'}}>
                                        <h4>{t.name}</h4>
                                        <h6>{t.designation}</h6>
                                        <Divider/>
                                        <h5>{t.title}</h5>
                                    </Stack>
                                </Stack>
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