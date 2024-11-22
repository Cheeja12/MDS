import React from 'react';
import './Term.css';

const Term = () => {
  return (
    <div className='terms'>
      <p>Welcome to the Medicine Dispensing System (hereinafter referred to as "MDS"). By accessing and using our services, you agree to comply with and be bound by the following terms and conditions. </p>
      <h1>Terms and Condition</h1>
      <p>1. Only pharmacies registered with the DDA are eligible to use the MDS for ordering and receiving medications.<br/>2. All registered pharmacies must provide accurate and up-to-date information during the registration process. Failure to do so may result in suspension or termination of access to the MDS.<br/>3. MDS is designed to distribute medications only to authorized and registered pharmacies. Unauthorized use or distribution to non-registered entities is strictly prohibited.<br/>4. Pharmacies must ensure that medications obtained through the MDS are dispensed in compliance with all applicable laws and regulations.<br/>5. Due to the sensitive nature of narcotic and hormonal drugs, the MDS provides a limited stock of these medications.<br/><br/>By using the Medicine Dispensing System, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree to these terms, you may not access or use the MDS.</p>
    </div>
  );
};

export default Term;
