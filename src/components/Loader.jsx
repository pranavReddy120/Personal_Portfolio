import { Html, useProgress } from '@react-three/drei'; 

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Full viewport height
        textAlign: 'center',
      }}>
        <span className="canvas-loader"></span>
        <p style={{ 
          fontSize: 14, 
          color: '#f1f1f1', 
          fontWeight: 800, 
          marginTop: 40 
        }}>
          Rendering:&nbsp;
          <span style={{ display: 'inline' }}>{progress.toFixed(2)}%</span>
        </p>
      </div>
    </Html>
  );
}

export default Loader;