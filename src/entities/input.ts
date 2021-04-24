import { ChangeEventHandler } from "react";

export interface InputProps {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}