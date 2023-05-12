import React, { type ComponentProps, forwardRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

export type ButtonOrLinkProps = Omit<Partial<LinkProps> & ComponentProps<'a'> & ComponentProps<'button'>, 'ref'>;

export const ButtonOrLink = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonOrLinkProps>(
	({ href, to, ...props }, ref: any) => {
		// External link:
		if (href) {
			return <a ref={ref} target='_blank' rel='noreferrer noopener' href={href} {...props} />;
		}

		// Internal router link:
		if (to) {
			return <Link to={to} ref={ref} {...props} />;
		}

		// We set the default type to be "button" to avoid accidentally submitting forms.
		// eslint-disable-next-line react/button-has-type
		return <button {...props} type={props.type || 'button'} ref={ref} />;
	}
);