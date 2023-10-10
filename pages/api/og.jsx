/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import Image from 'next/image';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: '#DADADB',
          background: '#262627',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={'https://avatars.githubusercontent.com/u/107942776?v=4'}
          className="profile-img"
          style={{
            borderRadius: '50%',
            marginBottom: 50,
          }}
          width={300}
          height={300}
          alt="eric personal headshot"
          priority
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
