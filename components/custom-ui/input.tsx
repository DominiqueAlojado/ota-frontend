import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UseFormRegister, FieldError } from "react-hook-form";

type CustomInputProps = {
  type: "text" | "number" | "email" | "textarea";
  label: string;
  placeholder: string;
  error: FieldError | undefined;
  field: ReturnType<UseFormRegister<any>>;
};

export const CustomInput: React.FC<CustomInputProps> = ({
  type,
  label,
  placeholder,
  field,
  error,
}) => {
  return (
    <div>
      <Label>
        <div className="flex items-center mb-2">
          <span className="mr-2  ">{label}</span>
        </div>
      </Label>
      {type === "text" ? (
        <>
          <Input
            type={type}
            placeholder={placeholder}
            className="text-xs w-full  focus:ring-transparent focus:outline-none focus:border-transparent border border-collapse   mb-2 bg-opacity-20 bg-[#333333] text-[16px]"
            {...field}
          />
          {error && (
            <>
              <span className="text-red-400">{error.message}</span>
            </>
          )}
        </>
      ) : (
        <>
          <Textarea
            placeholder={placeholder}
            className="bg-opacity-20 bg-[#333333] text-xs h-40 mb-2 text-[16px]"
            {...field}
          />
          {error && (
            <>
              <span className="text-red-400">{error.message}</span>
            </>
          )}
        </>
      )}
    </div>
  );
};
