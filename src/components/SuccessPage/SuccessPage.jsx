// import ProgressBar from '../ProgressBar/ProgressBar';
import { Typography } from '@mui/material';
import { useHistory } from 'react-router-dom'

function SuccessPage() {
    const history = useHistory();

    //! Takes user back to dashboard
    const backToDash = () => {
        history.push('/dashboard')
    };

     //! Takes user existing kits
     const viewExisting = () => {
        history.push('/editExisting')
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

                <button className='btn' onClick={viewExisting}>
                    View Existing Kits          
                 </button>

                 <br /> <br />

                <button className='btn' onClick={backToDash}>
                    Back to Dashboard
                </button>

                <br /> <br />

            </center>
        </>
    )
}// End Success Page 

export default SuccessPage;