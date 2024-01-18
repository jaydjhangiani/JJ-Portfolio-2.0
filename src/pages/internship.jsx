import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Coincap from '../assets/pdfs/Coincap.pdf';

const Internship = () => {
  const history = useNavigate();
  useEffect(() => {
    window.open(Coincap);
    history.push('/');
  }, []);
  return <div></div>;
};

export default Internship;
