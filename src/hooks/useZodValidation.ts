import { useState } from "react";
import * as z from "zod";

export function useZodValidation<VS extends z.ZodObject>(validationSchema: VS) {
  type Data = z.infer<VS>;
  type ErrorObj  = Partial<Record<keyof Data, string>>;
  const [errors, setErrors] = useState<ErrorObj | null>(null);

  function isValid(jsonData: Data) {
    const res = validationSchema.safeParse(jsonData);
    if(!res.success) {
      const flatError = z.flattenError(res.error);
      const newErrors: ErrorObj = {};
      for(const err in flatError.fieldErrors) {
        const message = flatError.fieldErrors[err]?.[0];

        if(message) {
          newErrors[err as keyof Data] =  message;
        }
      }
      setErrors(newErrors);
      return false;
    }
    setErrors(null);

    return true;
  }

  return { isValid, errors };
}
