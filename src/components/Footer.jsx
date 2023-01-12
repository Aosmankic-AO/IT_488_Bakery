
import React from 'react';
import {
  MDBCol,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {

    return (
        <footer className='footer'>

  
          <section >
            <form>
                <MDBCol>
                  <p >
                    <strong>Sign up to our newsletter</strong>
                  </p>
                </MDBCol>

                  <input/>

                <button className='subscribe-btn'>
                    Subscribe </button>

            </form>
          </section>



          <section className='links'>
                <ul >
                  <li>
                    <a>
                      BakeryOnMain.com
                    </a>
                  </li>
                  <li>
                  <MDBBtn size='lg' href='#'>
      <MDBIcon className='instagram' fab icon='instagram'/>
    </MDBBtn>
                  </li>
                  <li>
                  <MDBBtn size='lg' href='#'>
      <MDBIcon className='facebook' fab icon='facebook'/>
    </MDBBtn>
                  </li>
                </ul>
          </section>

  
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
        </div>
      </footer>
    );
  };
  
  export default Footer;