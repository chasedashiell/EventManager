import React, { forwardRef, ComponentProps } from 'react';

export interface LabelProps
	extends Omit<ComponentProps<'label'>, 'ref' | 'className'> {
	label: string;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
	({ label, children, ...labelProps }, ref) => {
		return (
			<label
				ref={ref}
				{...labelProps}
				className='flex flex-col flex-nowrap items-stretch gap-1'
			>
				<div className='text-xs font-medium text-white'>
					{label}
				</div>
				{children ? (
					<div className='text-xs font-medium text-white'>{children}</div>
				) : null}
			</label>
		);
	}
);