const input: string =
  "border: none;" +
  "appearance: none;" +
  "-webkit-appearance: none;" +
  "-moz-appearance: none;" +
  "margin: 0;" +  /* Remove default margin */
  "box-sizing: border-box;" +  /* Ensure padding and border are included in the total width/height */
  "outline: none;" +  /* Remove default outline */
  "background-color: transparent;" +  /* Remove default background color */
  "color: inherit;" +  /* Inherit text color */
  "font-family: inherit;" +  /* Inherit font family */
  "font-size: inherit;" /* Inherit font size */

export const clearDefault = {
  input: input,
};
