import React from 'react';

const loading = () => {
  return (
    <div
      className="spinner-container flex-center flex-column flex-1 h-100vh w-100vw bg-white position-fixed z-index-1 top-0 left-0 overflow-hidden pointer-events-none"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="spinner-content">
        <div className="spinner-content-inner">
          <div className="spinner-content-title">
            <span className="loading loading-spinner loading-lg "></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
