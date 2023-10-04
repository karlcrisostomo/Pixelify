import Image from 'next/image'
import { useRouter } from 'next/router'; 

const Logo = () => {
  const router = useRouter();

  const handleReload = () => {
    router.reload(); 
  };

  return (
    <>
      <div onClick={handleReload} style={{ cursor: 'pointer' }}>
        <Image src='./Pixelify.svg' width={100} height={100} alt='Pixelify Logo' />
      </div>
    </>
  );
};

export default Logo;
