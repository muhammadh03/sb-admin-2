/* eslint-disable no-lone-blocks */
{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script> */}
{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> */}
export const ProgressBarData = [
    {
        id: 1,
        title: "Server Migration",
        percentage: '20%',
        bar: <div className="progress-bar bg-info" role="progressbar" style={{width: '20%', backgroundColor: '#e74a3b'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    },
    {
        id: 2,
        title: "Sales Tracking",
        percentage: '40%',
        bar: <div className="progress-bar bg-info" role="progressbar" style={{width: '40%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    },
    {
        id: 3,
        title: "Customer Database",
        percentage: '60%',
        bar: <div className="progress-bar bg-info" role="progressbar" style={{width: '60%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    },
    {
        id: 4,
        title: "Payout Details",
        percentage: '80%',
        bar: <div className="progress-bar bg-info" role="progressbar" style={{width: '80%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    },
    {
        id: 5,
        title: "Account Setup",
        percentage: 'Complete',
        bar: <div className="progress-bar bg-info" role="progressbar" style={{width: '20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    }
]