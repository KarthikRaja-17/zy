'use client';
import { ConfigProvider, theme } from 'antd';
import CustomCursor from '@/components/CustomCursor/CustomCursor';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#7b5cff',
          colorLink: '#7b5cff',
          fontFamily: "'DM Sans', sans-serif",
          borderRadius: 12,
          colorBgContainer: 'rgba(255,255,255,0.04)',
          colorBorder: 'rgba(255,255,255,0.08)',
          colorText: '#ffffff',
          colorTextSecondary: '#a0aec0',
        },
      }}
    >
      <CustomCursor />
      {children}
    </ConfigProvider>
  );
}
