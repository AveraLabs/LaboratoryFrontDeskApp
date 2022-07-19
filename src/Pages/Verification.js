import React, {useState} from 'react';
import PinInput from 'react-pin-input';

const Verification = () => {

  const [code, setCode] = useState('');   

  // const [first, setFirstDigit] = useState('');
  // const [second, setSecondDigit] = useState('');
  // const [third, setThirdDigit] = useState('');
  // const [fourth, setFourthDigit] = useState('');
  // const [fifth, setFifthDigit] = useState(''); 
  // const [sixth, setSixthDigit] = useState('');

  const handleVerification = (event) => { 
    event.preventDefault();
    if(code == '') {
      window.location.href = '/frontdesk'
    }
  }

  return (
    <div className="authentication-wrapper authentication-basic px-4">
    <div className="authentication-inner py-4">
      {/* <!--  Two Steps Verification --> */}
      <div className="card">
        <div className="card-body">
          {/* <!-- Logo --> */}
          <div className="app-brand justify-content-center">
            <a href="index.html" className="app-brand-link gap-2">
              <span className="app-brand-logo demo">
                <svg
                  width="26px"
                  height="26px"
                  viewBox="0 0 26 26"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>icon</title>
                  <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                      <stop stop-color="#5A8DEE" offset="0%"></stop>
                      <stop stop-color="#699AF9" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="linearGradient-2">
                      <stop stop-color="#FDAC41" offset="0%"></stop>
                      <stop stop-color="#E38100" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g id="Pages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Login---V2" transform="translate(-667.000000, -290.000000)">
                      <g id="Login" transform="translate(519.000000, 244.000000)">
                        <g id="Logo" transform="translate(148.000000, 42.000000)">
                          <g id="icon" transform="translate(0.000000, 4.000000)">
                            <path
                              d="M13.8863636,4.72727273 C18.9447899,4.72727273 23.0454545,8.82793741 23.0454545,13.8863636 C23.0454545,18.9447899 18.9447899,23.0454545 13.8863636,23.0454545 C8.82793741,23.0454545 4.72727273,18.9447899 4.72727273,13.8863636 C4.72727273,13.5423509 4.74623858,13.2027679 4.78318172,12.8686032 L8.54810407,12.8689442 C8.48567157,13.19852 8.45300462,13.5386269 8.45300462,13.8863636 C8.45300462,16.887125 10.8856023,19.3197227 13.8863636,19.3197227 C16.887125,19.3197227 19.3197227,16.887125 19.3197227,13.8863636 C19.3197227,10.8856023 16.887125,8.45300462 13.8863636,8.45300462 C13.5386269,8.45300462 13.19852,8.48567157 12.8689442,8.54810407 L12.8686032,4.78318172 C13.2027679,4.74623858 13.5423509,4.72727273 13.8863636,4.72727273 Z"
                              id="Combined-Shape"
                              fill="#4880EA"
                            ></path>
                            <path
                              d="M13.5909091,1.77272727 C20.4442608,1.77272727 26,7.19618701 26,13.8863636 C26,20.5765403 20.4442608,26 13.5909091,26 C6.73755742,26 1.18181818,20.5765403 1.18181818,13.8863636 C1.18181818,13.540626 1.19665566,13.1982714 1.22574292,12.8598734 L6.30410592,12.859962 C6.25499466,13.1951893 6.22958398,13.5378796 6.22958398,13.8863636 C6.22958398,17.8551125 9.52536149,21.0724191 13.5909091,21.0724191 C17.6564567,21.0724191 20.9522342,17.8551125 20.9522342,13.8863636 C20.9522342,9.91761479 17.6564567,6.70030817 13.5909091,6.70030817 C13.2336969,6.70030817 12.8824272,6.72514561 12.5388136,6.77314791 L12.5392575,1.81561642 C12.8859498,1.78721495 13.2366963,1.77272727 13.5909091,1.77272727 Z"
                              id="Combined-Shape2"
                              fill="url(#linearGradient-1)"
                            ></path>
                            <rect
                              id="Rectangle"
                              fill="url(#linearGradient-2)"
                              x="0"
                              y="0"
                              width="7.68181818"
                              height="7.68181818"
                            ></rect>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="app-brand-text demo h3 mb-0 fw-bold">Avera Labs</span>
            </a>
          </div>
          {/* <!-- /Logo --> */}
          <h4 className="mb-2">Two Step Verification 💬</h4>
          <p className="text-start mb-4">
            We sent a verification code to your email. Enter the code from the email in the field below.
            <span className="fw-bold d-block mt-2">******1234</span>
          </p>
          <p className="mb-0 fw-semibold">Type your 6 digit security code</p>
          <form id="twoStepsForm" onSubmit={handleVerification}>
            <div className="mb-3"> 
            <PinInput 
              length={6} 
              initialValue=""
              onChange={(value, index) => {}} 
              type="numeric" 
              inputMode="number"
              style={{padding: '10px'}}  
              inputStyle={{borderColor: 'black'}}
              inputFocusStyle={{borderColor: 'blue'}}
              onComplete={(value, index) => {}}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
              {/* <div
                className="auth-input-wrapper d-flex align-items-center justify-content-sm-between numeral-mask-wrapper"
              >
                <input
                  type="text" 
                  onChange={(e) => setFirstDigit(e.target.value)}
                  value={first}
                  className="form-control auth-input h-px-50 text-center numeral-mask text-center h-px-50 mx-1 my-2"
                  maxlength="1"
                  autofocus
                />
                <input
                  type="text" 
                  onChange={(e) => setSecondDigit(e.target.value)}
                  value={second}
                  className="form-control auth-input h-px-50 text-center numeral-mask text-center h-px-50 mx-1 my-2"
                  maxlength="1"
                />
                <input
                  type="text" 
                  onChange={(e) => setThirdDigit(e.target.value)}
                  value={third}
                  className="form-control auth-input h-px-50 text-center numeral-mask text-center h-px-50 mx-1 my-2"
                  maxlength="1"
                />
                <input
                  type="text" 
                  onChange={(e) => setFourthDigit(e.target.value)}
                  value={fourth}
                  className="form-control auth-input h-px-50 text-center numeral-mask text-center h-px-50 mx-1 my-2"
                  maxlength="1"
                />
                <input
                  type="text" 
                  onChange={(e) => setFifthDigit(e.target.value)}
                  value={fifth}
                  className="form-control auth-input h-px-50 text-center numeral-mask text-center h-px-50 mx-1 my-2"
                  maxlength="1"
                />
                <input
                  type="text" 
                  onChange={(e) => setSixthDigit(e.target.value)}
                  value={sixth}
                  className="form-control auth-input h-px-50 text-center numeral-mask text-center h-px-50 mx-1 my-2"
                  maxlength="1"
                />
              </div> */}
              {/* <!-- Create a hidden field which is combined by 3 fields above --> */}
              <input type="hidden" name="otp" />
            </div>
            <button type='submit' className="btn btn-primary d-grid w-100 mb-3">Verify my account</button>
            <div className="text-center">
              Didn't get the code?
              <a href="javascript:void(0);"> Resend </a>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- / Two Steps Verification --> */}
    </div>
  </div>
  )
} 

export default Verification;
