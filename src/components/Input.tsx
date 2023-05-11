import React, { forwardRef } from 'react';
import type { ComponentProps } from 'react';
import { Label } from './Label';

interface InputProps extends Omit<ComponentProps<'input'>, 'ref'> {
	label?: string;
}

export default forwardRef<HTMLInputElement, InputProps>(
	({ label, ...props }, ref) => {
		return (
			<>
				{label ?
					<Label label={label}>
						<input
							ref={ref}
							{...props}
							className='font-semibold block w-full rounded-md border-2 border-transparent bg-slate-600 py-2 px-3 leading-5 text-gray-100 placeholder-gray-100 sm:text-sm ring-0 outline-none focus:ring-0 active:border-red-500 focus:border-red-500'
						/>
					</Label>
					:
					<input
						ref={ref}
						{...props}
						className='font-semibold block w-full rounded-md border-2 border-transparent bg-slate-600 py-2 px-3 leading-5 text-gray-100 placeholder-gray-100 sm:text-sm ring-0 outline-none focus:ring-0 active:border-red-500 focus:border-red-500'
					/>
				}
			</>
		);
	}
);