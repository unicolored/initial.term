export function getBrowserName(): string {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('firefox')) return 'Firefox';
  if (ua.includes('chrome')) return 'Chrome';
  if (ua.includes('safari')) return 'Safari';
  if (ua.includes('edge')) return 'Edge';
  if (ua.includes('opera') || ua.includes('opr')) return 'Opera';
  return 'Unknown Browser';
}

export type Style = 'red' | 'yellow' | 'blue' | 'green' | 'bold' | 'italic';
export type StylesKey = `text-${Style}`;
// Define the allowed style keys
// Define the style map type
interface StyleMap {
  [key: string]: StylesKey; // Maps style names to CSS class names
}

// Value type for interpolation: [text, styles]
type StyledValue = [string, Style | Style[]];

// The colorize function
export function colorize(
  strings: TemplateStringsArray,
  ...values: StyledValue[]
) {
  const styleMap: StyleMap = {
    red: 'text-red',
    yellow: 'text-yellow',
    blue: 'text-blue',
    green: 'text-green',
    bold: 'text-bold',
    italic: 'text-italic',
  };

  let result = '';
  strings.forEach((str, i) => {
    result += str; // Add the raw string part
    if (values[i]) {
      const [text, styles] = values[i]; // Destructure the text and styles
      const styleArray = Array.isArray(styles) ? styles : [styles]; // Normalize to array
      const classes = styleArray
        .map((s: Style) => styleMap[s] || '') // Map each style to a class
        .join(' ')
        .trim();
      result += `<span class="${classes}">${text}</span>`; // Build the HTML
    }
  });
  return result;
}
