// 1 - Crie um type union que represente os estados físicos da matéria: 
// líquido, sólido ou gasoso.
type StatesOfMatter = "liquid" | "solid" | "gaseous";

// 2 - Crie um type union que represente o documento identificador de 
// uma pessoa que pode receber valores numéricos ou texto 
// - Ex: “123.567.890 - 12” ou 123456789012.
type IdentifyingDocument = string | number;

// 3 - Crie um type union que represente sistemas operacionais: 
// linux, mac os ou windows.
type SO = "linux" | "mac os" | "windows";

// 4 - Crie um type union que represente as vogais do alfabeto.
type Vowels = "a" | "e" | "i" | "o" | "u";