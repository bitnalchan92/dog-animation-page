import { useState, useEffect } from 'react';
import dogImage from '../assets/images/dog.svg';
import '../styles/animations.css';

function DancingDog() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        toggleAnimation();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isAnimating]);

  return (
    <div className="dancing-dog-container">
      <p className="instruction-text">
        {isAnimating ? '강아지가 신나게 춤추고 있어요! 🐕' : '강아지가 쉬고 있어요 😴'}
      </p>
      <div className={`dog-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={dogImage} alt="Dancing Dog" className="dog-image" />
      </div>
      <button
        className="control-button"
        onClick={toggleAnimation}
        aria-label={isAnimating ? '애니메이션 일시정지' : '애니메이션 시작'}
      >
        {isAnimating ? '⏸ 일시정지' : '▶ 춤추기'}
      </button>
      <p className="hint-text">💡 스페이스바를 눌러도 제어할 수 있어요</p>
    </div>
  );
}

export default DancingDog;
