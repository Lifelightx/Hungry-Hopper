import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../Contex';
import axios from 'axios';

function Verify() {
  const [searchParams] = useSearchParams();
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true); // Loading state

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + '/api/order/verify', { success, orderId });
      if (response.data.success) {
        navigate('/myorders');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Verification failed', error);
      navigate('/'); // Handle error and redirect
    } finally {
      setLoading(false); // Stop loading after verification
    }
  };

  useEffect(() => {
    setTimeout(() => {
        verifyPayment();
    }, 1000);
  }, [success, orderId]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading ? (
        <div className="flex flex-col justify-center items-center">
          {/* Tailwind CSS Spinner */}
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-orange-500 border-solid"></div>
          <p className='text-orange-600'>Verifying Payment...</p>
        </div>
      ) : (
        <div>Payment Verified!</div>
      )}
    </div>
  );
}

export default Verify;
