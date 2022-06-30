import React from 'react';
import Header from '../components/Header';

export default function MainLayout({ childrem }) {
  return (
    <>
      <Header />
      <main style={{ marginTop: '100px' }}>
        <div>{childrem}</div>
      </main>
    </>
  );
}
