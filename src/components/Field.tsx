import React, { forwardRef } from 'react';
import { Field as FormikField, FieldProps } from 'formik';
import Input from './Input';

interface OwnProps {
  name: string;
  label?: string;
  validate?: (value: any) => undefined | string | Promise<any>;
}

type Props = OwnProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'>;

const Field = forwardRef<HTMLInputElement, Props>(({ id, name, label, validate, ...props }, ref) => (
  <FormikField innerRef={ref} name={name} validate={validate}>
    {
      ({ field }: FieldProps) => (
          <Input
            id={id}
            label={label}
            {...field}
            {...props}
          />
      )
    }
  </FormikField>
));
Field.displayName = 'Field';

export default Field;