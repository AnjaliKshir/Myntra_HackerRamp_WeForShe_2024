// MovableButton.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.div`
  width: auto;
  height: auto;
  background-color: #FF7F50;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  border-radius: 8px;
  cursor: grab;
  user-select: none;
  transition: transform 0.1s ease-out;
  z-index:20
`;

const MovableButton = ({snapImage,snapId}) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition((prevPosition) => ({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        }));
      }
    };

    const handleTouchMove = (e) => {
      if (isDragging) {
        const touch = e.touches[0];
        setPosition((prevPosition) => ({
          x: touch.clientX - offset.x,
          y: touch.clientY - offset.y,
        }));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, offset]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setOffset({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  useEffect(() => {
    if (isDragging) {
      buttonRef.current.style.transition = 'none';
    } else {
      buttonRef.current.style.transition = 'transform 0.1s ease-out';
    }
  }, [isDragging]);

  return (
    <Button
      ref={buttonRef}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <Link to={`/product/${snapId}`}>
        <img src={snapImage} alt='Snap' style={{ width: '100px', height: '100px' }} />
      </Link>
    </Button>
  );
};

export default MovableButton;
