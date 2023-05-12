import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { ButtonOrLink, ButtonOrLinkProps } from './ButtonOrLink';
import classNames from 'classnames';
import { SpinnerCircular } from 'spinners-react';

const buttonStyles = cva(
  'relative inline-flex items-center justify-center rounded-md text-sm font-medium text-white shadow-sm focus:outline-none',
  {
    variants: {
      variant: {
        accent: 'bg-red-600 hover:bg-red-700 text-white',
      },
      size: {
        normal: 'px-4 py-2',
        square: 'p-2'
      },
      isLoading: {
        true: `text-transparent cursor-not-allowed`,
      }
    },
    defaultVariants: {
      size: 'normal',
      variant: 'accent',
    },
  }
);

interface Props extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> { }

const Button: React.FC<Props> = ({ variant, size, isLoading, className, ...props }) => {
  return (
    <>
      {isLoading ? (
        <ButtonOrLink className={classNames(buttonStyles({ variant, size, isLoading }), className)} {...props}>
          <div className='flex justify-center items-center w-full h-full left-0 top-0'>
            <SpinnerCircular size={20} thickness={200} secondaryColor='rgba(0, 0, 0, .2)' color='#fff' />
          </div>
        </ButtonOrLink>
      ) : (
        <ButtonOrLink className={classNames(buttonStyles({ variant, size, isLoading }), className)} {...props} />
      )}
    </>
  );
};

export default Button;