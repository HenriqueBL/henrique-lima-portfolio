export type ClassValue = string | number | null | false | undefined | ClassValue[];

/**
 * Concatena classes condicionais de forma segura, ignorando valores falsy.
 * Alternativa mínima e sem dependências ao clsx/classnames.
 */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (value: ClassValue) => {
    if (!value) return;
    if (Array.isArray(value)) {
      value.forEach(walk);
    } else {
      out.push(String(value));
    }
  };
  inputs.forEach(walk);
  return out.join(" ");
}
