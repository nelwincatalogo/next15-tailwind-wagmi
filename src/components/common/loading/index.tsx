'use client';

import { cn } from '@/core/lib/utils';

import { SvgSpinnersBarsRotateFade } from '../icons/SvgSpinnersBarsRotateFade';

interface LoadingProps {
	className?: string;
}

export default function Loading({ className = '', ...props }: LoadingProps) {
	return (
		<SvgSpinnersBarsRotateFade className={cn('size-4', className)} {...props} />
	);
}
