import { cn } from '@/lib/utils';

interface DottedSeparatorProps {
  className?: string;
  color?: string;
  height?: string;
  dotSize?: string;
  gapSize?: string;
  direction?: 'horizontal' | 'vertical';
}

import React from 'react';

const DottedSeparator = ({
  className,
  color = '#d4d4d8',
  height = '2px',
  dotSize = '2px',
  gapSize = '6px',
  direction = 'horizontal',
}: DottedSeparatorProps) => {
  const isHorizontal = direction === 'horizontal'
};

export default DottedSeparator;
