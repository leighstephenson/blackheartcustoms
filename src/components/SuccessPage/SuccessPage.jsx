// import ProgressBar from '../ProgressBar/ProgressBar';
import { Card, Typography } from '@mui/material';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';

function SuccessPage() {
    const history = useHistory();

    //! Takes user back to dashboard
    const backToDash = () => {
        history.push('/dashboard')
    };
    return (

        <>
            <center>
                <br /> <br /> <br />

                <Typography variant='h2'>
                    Success!
                </Typography>

                <br /> <br /> <br />

                <Typography>
                    Your new kit will now display on the homepage.
                </Typography>

                <br /> <br /> <br />

                <button className='btn' onClick={backToDash}>
                    Back to Dashboard
                </button>

                <br /> <br />

            </center>
        </>
    )
}// End Success Page 

export default SuccessPage;