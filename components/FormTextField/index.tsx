import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

interface FormTextFieldProps<T extends FieldValues> extends Omit<TextFieldProps, 'name'> {
	name: Path<T>;
	control: Control<T>;
}

export const FormTextField = <T extends FieldValues>({
	name,
	control,
	...textFieldProps
}: FormTextFieldProps<T>) => (
	<Controller
		name={name}
		control={control}
		render={({ field, fieldState: { error } }) => (
			<TextField
				{...field}
				{...textFieldProps}
				error={!!error || textFieldProps.error}
				helperText={error?.message || textFieldProps.helperText}
			/>
		)}
	/>
);
