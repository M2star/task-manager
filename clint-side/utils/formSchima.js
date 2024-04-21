import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"

export const useZodFormValidation = (schema, initialValues) => {
    const { errors, setError, ...form } = useForm({
        defaultValues: initialValues,
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            return data;
        } catch (validationError) {
            console.log(validationError)
        }
    };

    return { form, onSubmit };
};
