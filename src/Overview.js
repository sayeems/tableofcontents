import {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Grid,
    Divider
} from '@mui/material';

const Overview = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

      useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get('overview.json');
            setData(res.data);
            setLoading(false);
        }
        return fetchData();
    }, []);
    return ( 
    <>
    {!loading && data.overviews.map((dat, index)=>
        <Grid item xs={12} key={`overview${index}`}>
            <h1 style={{marginBottom:'5px'}}><img src="/favicon.ico" alt="" style={{width:'25px',marginRight:'10px'}}/>{dat.title}</h1>
            <Divider />
            {dat.description.map((des, ind)=>
                <>
                    <p key={`p_${ind}`}>{des}</p>
                </>
                )}
        </Grid>
        )}
    </>
    );
}
 
export default Overview;